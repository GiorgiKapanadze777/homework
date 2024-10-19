import React, { useState, useEffect } from 'react';


const StudentForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [age, setAge] = useState(initialData?.age || "");
  const [grade, setGrade] = useState(initialData?.grade || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age, grade });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      <input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="Grade" required />
      <button type="submit">Save</button>
    </form>
  );
};

const StudentItem = ({ student, onDelete, onEdit }) => (
  <div>
    <p>Name: {student.name}</p>
    <p>Age: {student.age}</p>
    <p>Grade: {student.grade}</p>
    <button onClick={onEdit}>Edit</button>
    <button onClick={onDelete}>Delete</button>
  </div>
);

const StudentList = ({ students, onDelete, onEdit }) => (
  <div>
    {students.map((student, index) => (
      <StudentItem
        key={index}
        student={student}
        onDelete={() => onDelete(index)}
        onEdit={() => onEdit(index)}
      />
    ))}
  </div>
);


const Navbar = () => (
  <nav>
    <h1>Student Management</h1>
  </nav>
);

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const addStudent = (newStudent) => {
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const editStudent = (index, updatedStudent) => {
    const updatedStudents = students.map((student, i) => (i === index ? updatedStudent : student));
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setEditingIndex(null);
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  return (
    <div>
      <Navbar />
      <h2>{editingIndex === null ? 'Add Student' : 'Edit Student'}</h2>
      
      {/* StudentForm switches between add and edit modes */}
      <StudentForm 
        onSubmit={(student) => {
          editingIndex === null ? addStudent(student) : editStudent(editingIndex, student);
        }} 
        initialData={editingIndex !== null ? students[editingIndex] : null} 
      />
      
      <StudentList 
        students={students} 
        onDelete={deleteStudent} 
        onEdit={setEditingIndex}
      />
    </div>
  );
};

export default App;
