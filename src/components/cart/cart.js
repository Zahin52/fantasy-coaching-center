import React from 'react'

export default function Cart(props) {
   const { TotalSelected, TotalCost, addedTeacher } = props
   console.log(TotalSelected)
   return (
      <div className="bg-white shadow rounded border p-4">
         <div className="border p-4">
            <div className="border mb-2">
               <span className="fw-bold">Total teacher : </span>
               {TotalSelected}
            </div>
            <div className="border">
               <span className="fw-bold">Total cost : </span>
               {TotalCost}
            </div>
         </div>
         <div className="border my-2">
            <div className="fw-bold text-center">Added Teacher</div>
            {addedTeacher.map((teacherName) => (
               <div className="border m-2">{teacherName}</div>
            ))}
         </div>
      </div>
   )
}
