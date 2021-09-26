import React from 'react'

export default function Card({info}) {
    const { image, name, institution, subject, salary, batch } = info;
    console.log(image);
   return (
      <div className="col-4 my-2">
         <div className="card shadow">
            <div className="card-body ">
                   <img src={image} className="card-img-top img-fluid" alt="teacherimage" />
            </div>
            <div className="card-body">
               <h5 class="card-title fw-bold">{name}</h5>
               <p class="card-text m-1">Institution: {institution}</p>
               <p class="card-text m-1">Subject: {subject}</p>
               <p class="card-text m-1">Batch: {batch}</p>
               <p class="card-text m-1">Salary: {salary}</p>
               <a href="#" className="btn btn-primary w-100">
                  Ready to hire
               </a>
            </div>
         </div>
      </div>
   )
}
