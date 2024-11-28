import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-900">
        <div className="d-flex justify-content-around gap-5 p-3">
          <Link to="/" className="text-decoration-none text-white active">
            Search Student Details
          </Link>
          <Link
            to="/addYourDetails"
            className="text-decoration-none text-white"
          >
            Add Details
          </Link>
          <Link
            to="/listOfStudents"
            className="text-decoration-none text-white"
          >
            List of Students
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
