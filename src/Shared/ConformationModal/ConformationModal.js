import React from 'react';

const ConformationModal = ({ title, message, closeModal, modalData, successBtnName, successAction }) => {
   return (
      <div>

         <input type="checkbox" id="my-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box">
               <h3 className="font-bold text-lg">{title} </h3>
               <p className="py-4">{message}</p>
               <div className="modal-action">

                  <label onClick={() =>
                     successAction(modalData)}
                     htmlFor="my-modal"
                     className="btn btn-primary">{successBtnName}!
                  </label>

                  <button onClick={closeModal} className='btn btn-outline'> Cancel</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ConformationModal;