import axios from "axios";
import { useState, useEffect } from "react";

function Card(){
const[student,setStudent]=useState([]);
// axios.get("http://localhost:8888/student/getAll")
// .then((res)=>{
//     console.log(res.data);
//     setStudent(res.data);
// })
// .catch((err)=>{
//     console.log(err);
// },[]); 



    // axios.get("https://fakestoreapi.com/products").then(res=>setStudent(res.data)).catch(err=>console.log(err));
    // axios.get("https://fakestoreapi.com/products").then(res=>res.json().then(data=>setStudent(data))).catch(err=>console.log(err));




useEffect(()=>{
    axios.get("http://localhost:8888/student/getAll")
    .then(res => {
        // Correct way: Access the data directly from res.data
        setStudent(res.data); 
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });                    
},[]);          


if(student.length==0){
    return (
      <>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Products are loading</p>
    </>

    );


}



return (
    <div className="container mt-4">
      <div className="row">
        {student.map((stu) => (
          <div className="col-md-4 mb-4" key={stu.studentId}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{stu.firstName} {stu.secondName}</h5>
                <p className="card-text"><strong>Student ID:</strong> {stu.studentId}</p>
                <p className="card-text"><strong>Contact No:</strong> {stu.contactNo}</p>
                <p className="card-text"><strong>Email:</strong> {stu.email}</p>   
                 <p className="card-text"><strong>Gender:</strong> {stu.gender}</p>    
                  <p className="card-text"><strong>Grade:</strong> {stu.grade}</p>    
                   <p className="card-text"><strong>Address:</strong> {stu.address}</p>    
                    <p className="card-text"><strong>DoB:</strong> {stu.dob}</p>       
                </div>
            </div>
          </div>
        ))} 

        </div>  
    </div>
  );


}

export default Card;
