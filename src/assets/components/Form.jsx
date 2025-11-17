import { Link } from "react-router-dom";
import axios from "axios";

function Form() {

    const addData=(e)=>{
        console.log("Added");
     
       const student = {
            studentId: document.getElementById("studentId").value,
            firstName: document.getElementById("firstName").value,
            secondName: document.getElementById("secondName").value,
            contactNo: document.getElementById("contactNo").value,
            gender: document.getElementById("gender").value,
            grade: parseInt(document.getElementById("grade").value),
            address: document.getElementById("address").value,
            email: document.getElementById("email").value,
            dob: document.getElementById("dob").value
        };

          axios.post("http://localhost:8888/student/saveNewStudent", student)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };
   
    
       



    //     const student = {
    //         studentId: document.getElementById("studentId").value,
    //         firstName: document.getElementById("firstName").value,
    //         secondName: document.getElementById("secondName").value,
    //         contactNo: document.getElementById("contactNo").value,
    //         gender: document.getElementById("gender").value,
    //         grade: parseInt(document.getElementById("grade").value),
    //         address: document.getElementById("address").value,
    //         email: document.getElementById("email").value,
    //         dob: document.getElementById("dob").value
    //     };

    //     axios.post("http://localhost:8888/student/saveNewStudent", student)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.error(err));
    // };
    // }

    return (



        <>
            <form onSubmit={addData}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="studentId">Student ID</label>
                        <input type="text" className="form-control" id="studentId" placeholder="S001" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="secondName">Second Name</label>
                        <input type="text" className="form-control" id="secondName" placeholder="Second Name" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="contactNo">Contact No</label>
                        <input type="text" className="form-control" id="contactNo" placeholder="Mobile Number" />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" className="form-control">
                            <option defaultValue="">Choose...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="grade">Grade</label>
                        <input type="number" className="form-control" id="grade" placeholder="1 - 13" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Colombo" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="student@email.com" />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-10 m-5 p-2" onClick={addData}>
                    Add Student
                </button>
            </form>

        </>
    )
}
export default Form;

/* //const[book, getBook]=useState([]);

    // axios.get("http://localhost:8080/book/getAll")
    // .then(res=>getBook(res.data))
    // .catch(err=>console.log(err));
    // useEffect(()=>{
    //     axios.get("http://localhost:8080/book/getAll")
    //     .then(res=>getBook(res.data))
    //     .catch(err=>console.log(err));
    // },[]);

    // console.log(book);


    // fetch("http://localhost:8080/book")
    // .then(res=>res.text())
    // .then(data=>console.log(data))
    // .catch(err=>console.log(err));


    const[saveBook,book]=useState({
        id:"110",
        title:"Java",
        author: "Mhuytta Wicramasinghe",
        publisher: "Sarasavi",
        isbn: "978-564-0525-7",
        category: "Sinhala Literature",
        availableCopies: 20                  
    });
    axios.post("http://localhost:8080/book/save",saveBook)
    .then(res=>console.log("Book saved"))
    .catch(err=>console.log(err));*/