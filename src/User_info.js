import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function User_info() {
  const [showPosts, setshowPosts] = useState();
  const apiUrl = "http://localhost:5000";

  let displayData;
  async function pullJson() {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    console.log(responseData);
    displayData = responseData.map(function (user) {
      return (
        <div>
          <img
            src="https://picsum.photos/200/200?random=1"
            className="image"
          ></img>
          <p key={user.id}>
            Nombre : {user.name} <br></br>
            email : {user.email}
          </p>
        </div>
      );
    });

    setshowPosts(displayData);
  }

  useEffect(() => {
    pullJson();
  }, []);
  return <div className="texto">{showPosts}</div>;
}

export default User_info;
