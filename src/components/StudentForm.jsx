import React from 'react'

const StudentForm = ({ name, setName, marks, setMarks, subject, setSubject, handleAdd }) => {
  return (
    <div>
        <div className='h-60  flex flex-col border-blue-300 border-8 p-3 m-3 rounded-4xl'>
            <input className ='text-amber-50 placeholder:text-amber-50 placeholder:border-blue-300 p-2 ' type="text" placeholder="Name" value={name} 
            onChange={(e) => setName(e.target.value)}/>

            <input className ='text-amber-50 placeholder:text-amber-50 p-2'type="number" placeholder="Marks" value={marks}
            onChange={(e) => setMarks(e.target.value)}/>

            <input className ='text-amber-50 placeholder:text-amber-50 p-2'type="text" placeholder="Subject" value={subject}
            onChange={(e) => setSubject(e.target.value)}/>

            <button className = 'text-amber-50 placeholder:text-amber-50 p-3 m-7 bg-blue-300 w-26 rounded-2xl justify-between items-center hover:bg-gray-300 font-bold'  onClick={handleAdd}>Add</button>
        </div>
        <h1 className=' h-full w-96 font-bold uppercase text-3xl text-white p-5 m-5 rounded-2xl border-blue-300 border-8 '>Student Details</h1>
    </div>
  )
}

export default StudentForm
