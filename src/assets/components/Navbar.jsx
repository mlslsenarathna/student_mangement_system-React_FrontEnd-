import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" aria-hidden="true">
                            <use xlinkHref="#bootstrap">
                            </use>
                        </svg>
                        <span className="fs-4">Student Management System</span>
                    </a>
                    <ul className="nav nav-pills">
                       
                        <li className="nav-item">
                        <Link to="/add"className="nav-link active" aria-current="page">Add New Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/update" className="nav-link">Update Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/view" className="nav-link">View Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/delete" className="nav-link">Delete Student</Link>
                        </li>
                        
                    </ul>
                </header>
            </div>

        </>
    )


}
export default Navbar;