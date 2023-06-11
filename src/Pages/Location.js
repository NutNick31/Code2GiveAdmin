import React, { useState, useEffect } from "react";
import axios from "axios";

const Location = () => {
  // const [locationData, setUserLocationData] = useState([]);
  // const getUserData = async () => {
  //   const res = await axios.get(
  //     "http://localhost:8000/api/location/getlocation/"
  //   );
  //   // const data = await res.data;
  //   setUserLocationData(res?.data?.UserLocationData);
  //   console.log(res?.data?.UserLocationData);
  // };
  // useEffect(() => {
  //   getUserData();
  // }, []);
  return (
    <div className="place">
      <h3>Location</h3>
      <table>
        <tr>
          <th>Username</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>College</th>
        </tr>
        {/* {locationData?.map((user) => (
          <tr>
           <td>{user.userid}</td>
            <td>{user.latitude}</td>
            <td>{user.longitude}</td>
            <td>{user.college}</td> 
            
          </tr>
        ))} */}
        <tr>
            <td>Team</td>
            <td>North</td>
            <td>Southeastwesteverywhere</td>
            <td>IIT KGP</td>
        </tr>
            
      </table>
    </div>
  );
};

export default Location;
