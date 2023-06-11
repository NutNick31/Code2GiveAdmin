import React, { useState, useEffect } from "react";
import axios from "axios";

const Results = () => {
  const [resultData, setResultData] = useState([]);
  const getUserData = async () => {
    const res = await axios.get("http://localhost:8000/api/addiction");
    // const data = await res.data;
    setResultData(res?.data);
    console.log(res?.data);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <div className="place">
        <h3>Machine Learning Prediction Data</h3>
        <table>
          <tr>
            <th>Username</th>
            <th>Machine Learning Prediction</th>
          </tr>
          {resultData?.map((user) => (
            <tr>
              <td>{user.username}</td>
              <td>{user.result}</td>
            </tr>
          ))}
          {/* <tr>
            <td>Team</td>
            <td>North</td>
            <td>Southeastwesteverywhere</td>
            <td>IIT KGP</td>
        </tr> */}
        </table>
      </div>
    </div>
  );
};

export default Results;
