import "./leftBar.scss";

import Groups from "../../assets/2.png";

import Memories from "../../assets/5.png";

import Gallery from "../../assets/8.png";

import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

import logout from "../../assets/log.jpg"

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);
  const[isfollow,setIsFollow]=useState("follow");
  
  const[isfollow2,setIsFollow2]=useState("follow");
  function followHandler(){
    setIsFollow("following ");
  }
  function followHandler2(){
    setIsFollow2("following ");
  }

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
         
        </div>
        
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="user">
            <img
              src={"/upload/"+currentUser.profilePic}
              alt=""
            />
          <Link
                to={`/profile/${currentUser.id}`}
                
                style={{ textDecoration: "none", color: "inherit" }}
              >
              <span>My Profile </span>
        
        </Link>
          </div>
          <div className="user">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="user">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
         
          
          <div className="user">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
          <div className="user">
            <img src={logout} alt="" />
            <Link to="/login" ><span id="logout" >Logout</span>
            </Link>
          </div>
        </div>
        <hr />
     
      </div>
    </div>
  );
};

export default LeftBar;
