import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
import Shobha from "../../assets/ms3.jpg";
import ankita from "../../assets/shreya1.png.jpg";
import chhotu from "../../assets/chhotu1.jpg";
import Riya from "../../assets/riya2.png.jpg";
const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Shobha ",
      img: Shobha,
    },
    {
      id: 2,
      name: "Ankita Chaudhary",
      img: ankita,
    },
    {
      id: 3,
      name: "Sanyam Jain",
      img:chhotu ,
    },
    {
      id: 4,
      name: "Riya Jain",
      img: Riya,
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={ "/upload/"+currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories