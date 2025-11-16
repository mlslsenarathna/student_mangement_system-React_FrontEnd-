import { useState } from "react";
import axios from "axios";

function Update_Form() {
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
    console.log("Searching");
    if (!studentId) return alert("Enter a student ID");
    axios.get(`http://localhost:888//getById/{studentId}`)
      .then(res => setStudent(res.data))
      .catch(err => console.error(err));
  };

  // Update student
  const updateStudent = (e) => {
    console.log("Updating");
    e.preventDefault(); // prevent form reload
    axios.put(`http://localhost:8888/student/updateStudent`, student)
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

      {/* Update form */}
      <form onSubmit={updateStudent}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={student.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="secondName">Second Name</label>
            <input
              type="text"
              className="form-control"
              id="secondName"
              name="secondName"
              value={student.secondName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="contactNo">Contact No</label>
            <input
              type="text"
              className="form-control"
              id="contactNo"
              name="contactNo"
              value={student.contactNo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
              name="gender"
              value={student.gender}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="grade">Grade</label>
            <input
              type="number"
              className="form-control"
              id="grade"
              name="grade"
              value={student.grade}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={student.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={student.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={student.dob}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-25">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default Update_Form;
