import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [counsellingInfo, setCounsellingInfo] = useState([]);
  const getCounsellingInfo = async () => {
    const res = await axios.get("http://localhost:8000/api/counselling");
    const data = res.data;
    setCounsellingInfo(data);
    console.log(counsellingInfo);
  };
  useEffect(() => {
    getCounsellingInfo();
  }, []);
  return (
    <div className="contact">
      <p>Counselling Info</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
          <th>College</th>
          <th>Age</th>
        </tr>
        {counsellingInfo?.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>{user.college}</td>
              <td>{user.age}</td>
            </tr>
        ))}
      </table>
    </div>
  );
};

export default Contact;
