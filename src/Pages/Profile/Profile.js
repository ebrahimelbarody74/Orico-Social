import React, { useEffect, useState } from "react";
import LeftBar from "../../components/LeftBar/LeftBar";
import RightBar from "../../components/RightBar/RightBar";
import "./Profile.scss";
import Navbar from "../../components/Navbar/Navbar";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import { useParams } from "react-router-dom";
import axios from "axios";
function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  console.log(username);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  console.log(user);
  return (
    <div className="profile">
      <Navbar />
      <div className="box">
        <LeftBar />
        <ProfilePage />
        <RightBar user={user} />
      </div>
    </div>
  );
}

export default Profile;
