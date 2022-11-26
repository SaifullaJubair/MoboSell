import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
   return (

      <div className='flex flex-col justify-center min-h-[66vh] lg:mx-60 md:mx-20'>
         <Helmet><title>Blogs</title></Helmet>
         <h2 className='text-center text-3xl my-5 font-bold'>Blog</h2>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box my-4 ">
            <div className="collapse-title text-xl font-medium">
               What are the different ways to manage a state in a React application?
            </div>
            <div className="collapse-content ">
               <p>
                  There are four main types of state you need to properly manage in your React apps:

                  Local state
                  Global state
                  Server state
                  URL state
                  Let's cover each of these in detail:

                  Local (UI) state – Local state is data we manage in one or another component.
                  Local state is most often managed in React using the useState hook.
                  For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                  Global (UI) state – Global state is data we manage across multiple components.
                  Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                  A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                  Sometimes state we think should be local might become global.
                  Server state – Data that comes from an external server that must be integrated with our UI state.
                  Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                  There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                  Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                  URL state – Data that exists on our URLs, including the pathname and query parameters.
                  URL state is often missing as a category of state, but it is an important one.
                  In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                  There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box my-4">
            <div className="collapse-title text-xl font-medium">
               How does prototypical inheritance work?
            </div>
            <div className="collapse-content">
               <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
               </p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box my-4">
            <div className="collapse-title text-xl font-medium">
               Angular vs React
            </div>
            <div className="collapse-content">
               <p>If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                  React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                  React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.


               </p>
            </div>
         </div>
         <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box my-4">
            <div className="collapse-title text-xl font-medium">
               React vs. Angular vs. Vue?
            </div>
            <div className="collapse-content">
               <p>Angular vs React</p>
            </div>
         </div>
      </div>
   );
};

export default Blog;