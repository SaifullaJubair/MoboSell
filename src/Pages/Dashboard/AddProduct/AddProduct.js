import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider';


const AddProduct = () => {
   const { user } = useContext(AuthContext)
   const { register, handleSubmit, formState: { errors } } = useForm()
   const navigate = useNavigate()
   const imageHostKey = process.env.REACT_APP_imgbb_key;

   const { data: categories, isLoading } = useQuery({
      queryKey: ['category'],
      queryFn: async () => {
         const res = await fetch('https://mobosell-server-a12.vercel.app/categories');
         const data = await res.json();
         return data;

      }
   })
   // console.log(categories)

   // const handleAddProduct = data => {
   //    console.log(data.category)
   //    const info = data.category.split('-')
   //    const id = info[0]
   //    const name = info[1]
   //    console.log('id:', id)
   //    console.log("name:", name);
   // }

   const handleAddProduct = data => {
      const info = data.category.split('-')
      const category_id = info[0]
      const categoryName = info[1]
      // console.log(data.image[0]);
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image)
      // console.log(data.image)
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
         method: 'POST',
         body: formData
      })
         .then(res => res.json())
         .then(imgData => {
            if (imgData.success) {
               console.log(imgData.data.url)
               const product = {
                  name: data.productName,
                  categoryName,
                  category: category_id,
                  email: user?.email,
                  sellerName: data.sellerName,
                  location: data.location,
                  originalPrice: data.originalPrice,
                  resellPrice: data.resellPrice,
                  purchaseYear: data.purchaseYear,
                  condition: data.condition,
                  number: data.number,
                  description: data.description,
                  image: imgData.data?.url,
                  userImg: user?.photoURL
               }
               console.log(product);
               //save categories info to the database
               fetch('https://mobosell-server-a12.vercel.app/products', {
                  method: 'POST',
                  headers: {
                     'content-type': 'application/json',
                     // authorization: `bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(product)
               })
                  .then(res => res.json())
                  .then(result => {
                     console.log(result);
                     toast.success(`${data.productName} is added successfully`)
                     // Navigate('/dashboard/manageCategories')
                  })
            }
         })

   }
   const Conditions = [
      {
         id: 1,
         conditionName: 'Excellent',
      },
      {
         id: 2,
         conditionName: 'Good',
      },
      {
         id: 3,
         conditionName: 'Normal',
      },
      {
         id: 4,
         conditionName: 'Bad',
      },
      {
         id: 5,
         conditionName: 'Very Bad',
      },
   ]

   // if (isLoading) {
   //    return <Loading></Loading>
   // }

   return (
      <div data-theme="">
         <div className='w-full max-w-md p-8 space-y-3 rounded-xl   mx-auto my-12 text-black">
      <h1 className="text-2xl font-bold text-center'>
            <h1>Add A Category</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>
               <div className="form-control  ">
                  <label className="label"> <span className="label-text">Product Name</span></label>
                  <input type="text" {...register("productName", {
                     required: "Name is Required"
                  })} className="input input-bordered w-full " />
                  {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
               </div>
               <div className="form-control  ">
                  <label className="label"> <span className="label-text">Category Name</span></label>
                  <select {...register('category')}
                     className="select  select-bordered font-bold w-full text-black">
                     {
                        categories?.map(category =>
                           <option className='bg-base-300 text-black'
                              key={category._id}
                              // value={category.name}
                              value={`${category._id}-${category.name}`}
                           >{category.name}
                           </option>)
                     }
                  </select>
                  {/* <input type="text" {...register("category", {
                     required: "Category is Required"
                  })} className="input input-bordered w-full " />
                  {errors.category && <p className='text-red-500'>{errors.category.message}</p>} */}
               </div>
               <div className="form-control w-full ">
                  <label className="label"> <span className="label-text">Seller's Name</span></label>
                  <input type="text" {...register("sellerName", {
                     required: true
                  })} className="input input-bordered w-full " />
                  {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
               </div>
               <div className="form-control w-full ">
                  <label className="label"> <span className="label-text">Email</span></label>
                  <input type="email" readOnly value={user?.email} {...register("email", {
                     required: true
                  })} className="input input-bordered w-full " />
                  {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
               </div>

               <div className="form-control w-full ">
                  <label className="label"> <span className="label-text">Location</span></label>
                  <input type="text" {...register("location", {
                     required: true
                  })} className="input input-bordered w-full " />
                  {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
               </div>
               <div className="form-control w-full ">
                  <label className="label"> <span className="label-text">Original Price</span></label>
                  <input type="number" {...register("originalPrice", {
                     required: true
                  })} className="input input-bordered w-full " />
                  {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
               </div>
               <div className="form-control w-full ">
                  <label className="label"> <span className="label-text">Resell Price</span></label>
                  <input type="number" {...register("resellPrice", {
                     required: true
                  })} className="input input-bordered w-full " />
                  {errors.resellPrice && <p className='text-red-500'>{errors.resellPrice.message}</p>}
               </div>
               <div className="form-control w-full ">
                  <label className="label"> <span className="label-text">Year of purchase</span></label>
                  <input type="number" {...register("purchaseYear", {
                     required: true
                  })} className="input input-bordered w-full " />
                  {errors.purchaseYear && <p className='text-red-500'>{errors.purchaseYear.message}</p>}
               </div>
               <div className="form-control w-full ">
                  <label className="label"> <span className="label-text">Mobile Number</span></label>
                  <input type="number" {...register("number", {
                     required: true
                  })} className="input input-bordered w-full " />
                  {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
               </div>

               <div className="form-control w-full ">
                  <label className="label"> <span className="label-text">Condition type</span></label>
                  <select {...register('condition')}
                     className="select  select-bordered font-bold w-full text-black">
                     {
                        Conditions?.map(Condition =>
                           <option className='bg-base-300 text-black'
                              key={Condition.id}
                              value={Condition.conditionName}
                           >{Condition.conditionName}
                           </option>)
                     }
                  </select>

               </div>

               <div className="form-control w-full ">
                  <label className="label"> <span className="label-text">Description</span></label>
                  <textarea type="text" {...register("description", {
                     required: true
                  })} rows="3" className="w-full p-3 mb-6 border rounded-lg " />
                  {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
               </div>

               <div className="form-control  text-black ">
                  <label className="label"> <span className="label-text">Product Image</span></label>
                  <input type="file" {...register("image", {
                     required: "Photo is Required"
                  })} className="file-input file-input-primary  bg-base-200 w-full " />
                  {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
               </div>
               <input
                  type="submit"
                  value="Add Product"
                  className="block w-full p-3 text-center rounded-lg text-white bg-gradient-to-r from-primary to-secondary mt-4" />
            </form >
         </div >

      </div>
   );
};

export default AddProduct;