import React, { useState } from 'react'
import "./update.scss"
import { makeRequest } from '../../axios';
import { useMutation,useQueryClient } from '@tanstack/react-query';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const Update = ({setOpenUpdate,user}) => {

const [cover,setCover]=useState(null);
const [profile,setProfile]=useState(null);
    const[texts,setTexts]=useState({
      email: user.email,
      password: user.password,
      name: user.name,
      city: user.city,
      website: user.website,
    });
    const upload=async(file)=>{
      console.log(file)
        try{
          const formData=new FormData();
          formData.append("file",file);
          const res=await makeRequest.post("/upload",formData);
          return res.data;
        }
        catch(err){
          console.log(err)
        }
      }

    // const handleChange=(e)=>{
    //     setTexts((prev)=>({...prev,[e.target.name]:[e.target.value]}));
    // };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTexts((prev) => ({ ...prev, [name]: value }));
      };
    
  const queryClient = useQueryClient()
  const mutation = useMutation(
   
    {
      mutationFn:  (user)=>{
        return makeRequest.put("/users",user);
      },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["user"]);
    },
  })


  const handleClick =async ( e)=>{
    e.preventDefault();
let coverUrl;
let profileUrl;
coverUrl=cover ? await upload(cover): user.coverPic;
profileUrl=profile ? await upload(profile): user.profilePic;
    mutation.mutate({ ...texts, coverPic : coverUrl,profilePic:profileUrl});
setOpenUpdate(false);
setCover(null);
setProfile(null);
  }

//   return (
//     <div className='update'>
//       Update
//       <form>
//         <input type="file" onChange={e=>setCover(e.target.files[0])}/>
//         <input type="file" onChange={e=>setProfile(e.target.files[0])}/>
//         <input type="text" name="name" onChange={handleChange}/>
//         <input type="text" name="city" onChange={handleChange}/>
//         <input type="text" name="website" onChange={handleChange}/>
//         <button onClick={handleClick}>  Update</button>
//       </form>
//       <button onClick={()=>setOpenUpdate(false)}>X</button>
//     </div>
//   )
// }

// export default Update



return (
  <div className="update">
    <div className="wrapper">
      <h1>Update Your Profile</h1>
      <form>
        <div className="files">
          <label htmlFor="cover">
            <span>Cover Picture</span>
            <div className="imgContainer">
              <img
                src={
                  cover
                    ? URL.createObjectURL(cover)
                    : "/upload/" + user.coverPic
                }
                alt=""
              />
              <CloudUploadIcon className="icon" />
            </div>
          </label>
          <input
            type="file"
            id="cover"
            style={{ display: "none" }}
            onChange={(e) => setCover(e.target.files[0])}
          />
          <label htmlFor="profile">
            <span>Profile Picture</span>
            <div className="imgContainer">
              <img
                src={
                  profile
                    ? URL.createObjectURL(profile)
                    : "/upload/" + user.profilePic
                }
                alt=""
              />
              <CloudUploadIcon className="icon" />
            </div>
          </label>
          <input
            type="file"
            id="profile"
            style={{ display: "none" }}
            onChange={(e) => setProfile(e.target.files[0])}
          />
        </div>
        <label>Email</label>
        <input
          type="email"
          value={texts.email}
          name="email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          value={texts.password}
          name="password"
          onChange={handleChange}
        />
        <label>Name</label>
        <input
          type="text"
          value={texts.name}
          name="name"
          onChange={handleChange}
        />
        <label>Country / City</label>
        <input
          type="text"
          name="city"
          value={texts.city}
          onChange={handleChange}
        />
        <label>Website</label>
        <input
          type="text"
          name="website"
          value={texts.website}
          onChange={handleChange}
        />
      </form>
      
      <button className='close1' onClick={handleClick}>Update </button>
      <button className="close" onClick={() => setOpenUpdate(false)}>
        close
      </button>
    </div>
  </div>
);
};

export default Update;
