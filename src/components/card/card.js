import React from 'react'

export default function Card({info,setTotalSelected}) {
    const { image, name, institution, subject, salary, batch } = info;
    const CartUpdate = () => {
        setTotalSelected((prevValue)=>prevValue+1);
    }
   return (
      <div className="col-4 mb-2">
         <div className="card shadow">
            <div className="card-body ">
                   <img src={image} className="card-img-top img-fluid" alt="teacherimage" />
            </div>
            <div className="card-body">
               <h5 class="card-title fw-bold">{name}</h5>
               <p class="card-text m-1">Institution: {institution}</p>
               <p class="card-text m-1">Subject: {subject}</p>
               <p class="card-text m-1">Batch: {batch}</p>
               <p class="card-text m-1 mb-3">Salary: {salary}</p>
               <a href="#" onClick={CartUpdate} className="btn btn-primary w-100">
                  <i class="fab fa-telegram"></i> Ready to hire
               </a>
            </div>
         </div>
      </div>
   )
}
