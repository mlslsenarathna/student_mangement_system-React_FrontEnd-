import Navbar from "../components/Navbar";
import Delete_Form from "../components/Delete_Form";    


function DeleteStudent() {
    
  return (
    <>
         
    <Navbar/>
        

      <div className="container mt-4">
        <h2> Delete Student</h2>
        <div className="row">
            <div className="col-md-12">
            <Delete_Form/>
            </div>
        </div> 
      </div> 
    
    </>
  );
}

export default DeleteStudent;
