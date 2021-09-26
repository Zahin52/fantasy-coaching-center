import React from 'react'

export default function Cart(props) {
    const { TotalSelected } = props
    console.log(TotalSelected)
   return (
      <div className="border p-4">
         <div className="border mb-2">
            <span>Total teacher :</span>{TotalSelected}
         </div>
         <div className="border">
            <span>Total cost :</span>
         </div>
         <div>
            {/* {selctedTeacher.map((teacherName) => (
               <div>{teacherName}</div>
            ))} */}
         </div>
      </div>
   )
}
