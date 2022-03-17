import "./employeeRegister.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function EmployeeRegister() {
  const [file, setFile] = useState(null);
  //Manage form values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "",
    photo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      formValues.photo = filename;
      console.log(formValues.photo);
      try {
        await axios.post(
          "https://ictak-project.herokuapp.com/api/upload",
          data
        );
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "https://ictak-project.herokuapp.com/api/auth/employee-register",
        formValues
      );
      console.log(res);
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div className="employeeRegister">
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="formcol">
          <div className="formItemscol">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>
          </div>
          <div className="formItemscol">
            <label>Address</label>
            <textarea
              rows="5"
              type="text"
              name="address"
              className="registerInput address"
              onChange={handleChange}
            />
            <p className="error"></p>
            <label>Role</label>
            <input
              type="text"
              name="role"
              className="registerInput"
              onChange={handleChange}
            />
            <p className="error"></p>

            <label>Photo</label>
            <input
              type="file"
              name="photo"
              className="registerInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <p className="error"></p>
          </div>
        </div>
        <div className="formItemscol"></div>

        <button className="registerButton" type="submit">
          REGISTER
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </button>
    </div>
  );
}
