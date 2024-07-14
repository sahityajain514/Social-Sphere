import "./rightBar.scss";
import chahat from "../../assets/chahatpro.png.jpg";
import ganesh from "../../assets/ganeshpro.png.jpg";
import chhotu from "../../assets/chhotu1.jpg";
import deepak from "../../assets/deepakpro.png.jpg";
import shobha from "../../assets/ms1.jpg";
import ankita from "../../assets/shreya2.png.jpg";
import priyansh from "../../assets/priyanshpro.png.jpg"
import ankit from "../../assets/ankit.jpg"
import abhishek from "../../assets/abhishek.jpg"
import { useState } from "react";

const RightBar = () => {

  const[isfollow,setIsFollow]=useState("follow");
  
  const[isfollow2,setIsFollow2]=useState("follow");
  function followHandler(){
    setIsFollow("following ");
  }
  function followHandler2(){
    setIsFollow2("following ");
  }
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={ankit}
                alt=""
              />
              <span>Ankit Biganiya</span>
            </div>
            <div className="buttons">
              <button onClick={followHandler}>{isfollow}</button>
              <button onClick={()=>setIsFollow("follow")}>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={abhishek}
                alt=""
              />
              <span>Abhishek Kumar</span>
            </div>
            <div className="buttons">
            <button onClick={followHandler2}>{isfollow2}</button>
              <button onClick={()=>setIsFollow2("follow")}>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src = {chahat}
                alt=""
              />
              <p>
                <span>Chahat Gupta</span> changed his profile picture
              </p>
            </div>
            <span>a while ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={ganesh}
                alt=""
              />
              <p>
                <span>Ganesh Agarwal</span> changed his cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={chhotu}
                alt=""
              />
              <p>
                <span>Sanyam Jain</span> changed his cover picture
              </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={deepak}
                alt=""
              />
              <p>
                <span>Deepak Panwar</span> changed his profile picture
              </p>
            </div>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={chhotu}
                alt=""
              />
              <div className="online" />
              <span>Sanyam Jain</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={shobha}
                alt=""
              />
              <div className="online" />
              <span>Shobha </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={deepak}
                alt=""
              />
              <div className="online" />
              <span>Deepak Panwar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={chahat}
                alt=""
              />
              <div className="online" />
              <span>Chahat Gupta</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={ganesh}
                alt=""
              />
              <div className="online" />
              <span>Ganesh Agarwal</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={ankita}
                alt=""
              />
              <div className="online" />
              <span>Ankita Chaudhary</span>
            </div>
          </div>
        
          
        
         
          <div className="user">
            <div className="userInfo">
              <img
                src={priyansh}
                alt=""
              />
              <div className="online" />
              <span>Priyansh Jain</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
