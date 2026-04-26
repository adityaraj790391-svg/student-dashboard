import React, { useState } from 'react'
import StudentForm from '../components/StudentForm'
import StudentList from '../components/StudentList'

  const StudentRegister = () => {
  const [name, setName] = useState('')
  const [marks, setMarks] = useState('')
  const [subject, setSubject] = useState('')
  const [students, setStudents] = useState([])

  const handleAdd = () => {
    if (name === '' || marks === '' || subject === '') {
      alert("Fill all fields")
      return
    }

    const newStudent = {
      name,
      marks,
      subject,
      status: marks >= 40 ? "Pass" : "Fail"
    }

    setStudents([...students, newStudent])

    setName('')
    setMarks('')
    setSubject('')
  }

  const updateScore = (index, newMarks) => {
    const updatedStudents = [...students];
    updatedStudents[index].marks = newMarks;
    updatedStudents[index].status = newMarks >= 40 ? "Pass" : "Fail";
    setStudents(updatedStudents);
  } 

  return (
    <div>
      <StudentForm name={name} setName={setName} marks={marks} setMarks={setMarks} subject={subject} setSubject={setSubject} handleAdd={handleAdd}/>
      <StudentList students={students} updateScore={updateScore} />
    </div>
  )
}

export default StudentRegister
