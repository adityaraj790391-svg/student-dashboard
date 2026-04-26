import React from 'react'

const StudentCard = ({ item, index, updateScore }) => {
  return (
    <div className='h-full w-full text-white flex p-3 items-center m-3 border-blue-300 border-4 rounded-3xl space-x-6'>
      <p className='text-2xl font-bold gap-4 space-x-4'> Name: {item.name}, Marks: {item.marks}, Subject: {item.subject}, Status: {item.status}</p>
      <div className='flex items-center space-x-2'>
        <h1 className='text-2xl font-bold'>Marks: </h1>
        <input type="number" value={item.marks} 
        onChange={(e) => updateScore(index, e.target.value)} className='text-white font-bold p-4 rounded-md w-20'/>
      </div>
    </div>
  )
}

export default StudentCard