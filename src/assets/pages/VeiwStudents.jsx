import Card from "../components/Card";
import Navbar from "../components/Navbar";

function VeiwStudents() {
    return (
        <div>
           
        <Navbar/>
      
            <div className="container mt-4">
        <h2>Veiw Student</h2>

        <div className="row">
          <div className="col-md-12">
              <Card/>
          </div>
        </div>
      </div>

        
        </div>
    );
}
export default VeiwStudents;