import { useEffect, useState, useContext } from "react";
import "./approveStudent.css";
import { Context } from "../../context/Context";
import axios from "axios";
export default function ApproveStudent() {
  const { user } = useContext(Context);
  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get(
        "https://ictak-project.herokuapp.com/api/student/approve",
        {
          headers: { token: "Bearer " + user.accessToken },
        }
      );
      setStudents(res.data);
    };
    fetchStudents();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (event) => {
    setId(event.target.value);
  };
  useEffect(() => {
    const approveStudent = async () => {
      if (id) {
        try {
          await axios.put(
            `https://ictak-project.herokuapp.com/api/student/approve/${id}`,
            {},
            {
              headers: { token: "Bearer " + user.accessToken },
            }
          );
        } catch (err) {}
      }
      setId(false);
    };
    approveStudent();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

   return (
    <div className="aprove_table_container">
      <h1 className="heading">APPROVE STUDENTS</h1>
      <table  className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Pass out year</th>
            <th>ICTAK Course</th>
            <th>Place</th>

            <th>Employment Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {students.map((item) => (
            <tr key={item._id}>
              <td data-label="Name">{item.name}</td>
              <td data-label="Qualification">{item.qualification}</td>
              <td data-label="Passout Year">{item.passOutYear}</td>
              <td data-label="Course">{item.course}</td>
              <td data-label="Place">{item.place}</td>

              <td>{item.employmentStatus}</td>
              <td>
                <button
                  className="btns btn-success"
                  value={item._id}
                  onClick={handleClick}
                >
                  Approve
                </button>
                <button className="btns btn-danger mx-2">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
