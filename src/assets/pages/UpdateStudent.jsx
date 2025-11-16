import Navbar from "../components/Navbar";
import Update_Form from "../components/Update_Form";

function UpdateStudent() {
    
  return (
    <>
        <Navbar />

      <div className="container mt-4">
        <h2>Update Student</h2>

        <div className="row">
          <div className="col-md-12">
            <Update_Form/>  
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateStudent;
