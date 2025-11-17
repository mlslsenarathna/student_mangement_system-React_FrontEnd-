import { useState } from "react";
import axios from "axios";

function Delete_Form() {

  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState({
    studentId:"",
    firstName: "",
    secondName: "",
    contactNo: "",
    gender: "",
    grade: "",
    address: "",
    email:"",
    dob: ""
  });

  const handleSearch = () => {
    console.log("Searching");
  if (!studentId) return alert("Enter a student ID");

  axios.get("http://localhost:8888/student/getById/" + studentId)
    .then(res => {
      console.log("Response:", res.data);

      setStudent({
        studentId: res.data.studentId,
        firstName: res.data.firstName,
        secondName: res.data.secondName,
        contactNo: res.data.contactNo,
        gender: res.data.gender,
        grade: res.data.grade,
        address: res.data.address,
        email: res.data.email,
        dob: res.data.dob
      });

      console.log("Updated State:", student);
    })
    .catch(err => console.error(err));
};




  // const searchStudent = () => {
  //   console.log("Searching");
  //   if (!studentId) return alert("Enter a student ID");
  //   axios.get('http://localhost:8888/student/getById/'+studentId)
  //     .then(response => {

  //   let studentObj = response.data;
  //   console.log("Student Object:", studentObj);

  //   document.getElementById("firstName").innerHTML = studentObj.firstName ;
  //   document.getElementById("secondName").innerHTML = studentObj.secondName ;
  //   document.getElementById("contactNo").innerHTML = studentObj.contactNo ;
  //   document.getElementById("gender").innerHTML = studentObj.gender ;
  //   document.getElementById("grade").innerHTML= studentObj.grade ;
  //   document.getElementById("address").innerHTML = studentObj.address ;
  //   document.getElementById("email").innerHTML = studentObj.email ;
  //   document.getElementById("dob").innerHTML = studentObj.dob ;

  // })
  // .catch(error => {
  //   console.error("Error:", error);
  // });
  // };


  const deleteStudent = (e) => {
    console.log("deleting");
     e.preventDefault(); 
    console.log("Deleting student with ID:", studentId);
    axios.delete('http://localhost:8888/student/deleteStudent/'+studentId)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
    
      <div className="form-inline mb-3">
        <input
          type="text"
          id="studentId"
          className="form-control mr-2"
          placeholder="Enter Student ID"
          value={studentId}
           onChange={(e) => setStudentId(e.target.value)}
         
        />
        <button type="button" className="btn btn-secondary" onClick={handleSearch}>
          Search
        </button>
      </div>

      
      <form onSubmit={deleteStudent}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={student.firstName}
              
           
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
             
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
              name="gender"
              value={student.gender}
          
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
             
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-25">
          Delete Student
        </button>
      </form>
    </div>
  );
}

export default Delete_Form;
