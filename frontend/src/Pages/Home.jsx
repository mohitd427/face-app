import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card } from "antd";
import "./home.css";
import { useNavigate } from "react-router-dom";
import ProductSimple from "../components/UserCard";
import SkeletonImage from "antd/es/skeleton/Image";


const Home = () => {
    const [users, setUsers] = useState();
    const [image,setImage] = useState()

  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.dicebear.com/6.x/avataaars/svg`)
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    

      <div className="user-grid">
        {users?.map((user) => {
          return <ProductSimple key={user.id} {...user} />;
        })}
      </div>
    </>
  );
};

export default Home;
