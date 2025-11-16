import { useState } from "react";
import axios from "axios";

function Delete_Form() {
  // State for student ID input
  const [studentId, setStudentId] = useState("");

  // State for student object
  const [student, setStudent] = useState({
    firstName: "",
    secondName: "",
    contactNo: "",
    gender: "",
    grade: "",
    address: "",
    email: "",
    dob: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // Search student by ID
  const searchStudent = () => {
    if (!studentId) return alert("Enter a student ID");
    axios.get(`http://localhost:8080/student/${studentId}`)
      .then(res => setStudent(res.data))
      .catch(err => console.error(err));
  };

  // Update student
  const updateStudent = (e) => {
    e.preventDefault(); // prevent form reload
    axios.put(`http://localhost:8080/student/update/${studentId}`, student)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      {/* Search input */}
      <div className="form-inline mb-3">
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button type="button" className="btn btn-secondary" onClick={searchStudent}>
          Search
        </button>
      </div>

     <div>
  {/* Display student data as non-editable */}
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>First Name</label>
      <p className="form-control-plaintext">{student.firstName}</p>
    </div>

    <div className="form-group col-md-6">
      <label>Second Name</label>
      <p className="form-control-plaintext">{student.secondName}</p>
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-4">
      <label>Contact No</label>
      <p className="form-control-plaintext">{student.contactNo}</p>
    </div>

    <div className="form-group col-md-4">
      <label>Gender</label>
      <p className="form-control-plaintext">{student.gender}</p>
    </div>

    <div className="form-group col-md-4">
      <label>Grade</label>
      <p className="form-control-plaintext">{student.grade}</p>
    </div>
  </div>

  <div className="form-group">
    <label>Address</label>
    <p className="form-control-plaintext">{student.address}</p>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Email</label>
      <p className="form-control-plaintext">{student.email}</p>
    </div>

    <div className="form-group col-md-6">
      <label>Date of Birth</label>
      <p className="form-control-plaintext">{student.dob}</p>
    </div>
  </div>
</div>
 <button type="submit" className="btn btn-primary w-25">
          Delete Student
        </button>
</div>
  );
}

export default Delete_Form;
