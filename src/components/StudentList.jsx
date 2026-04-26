import React from 'react'
import StudentCard from './StudentCard'

const StudentList = ({ students,updateScore }) => {
  return (
    <div>
      {students.map((item, index) => (
        <StudentCard key={index} item={item} index={index} updateScore={updateScore}/>
      ))}
    </div>
  )
}

export default StudentList