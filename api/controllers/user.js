// import {db} from "../connect.js";
// import jwt from "jsonwebtoken";
// export const getUser=(req,res)=>{
//     const userId=req.params.userId;
//     const q="SELECT * FROM users WHERE id=?"
//     db.query(q,[userId],(err,data)=>{
//         if(err) return res.status(500).json(err)
//         const {password, ...info}=data[0];
//     return res.json(info);
//     });
// };


// export const updateUser=(req,res)=>{

//   const token=req.cookies.accessToken;
//   if(!token) return res.status(401).json("Not Authenticated");


//   jwt.verify(token,"secretkey",(err,userInfo)=>{
//     if(err) return res.status(403).json("Token is not valid!");

//     const q="UPDATE users SET `name`=? `city`=? `website`=? `profilePic`=? `coverPic`=? where id=? ";
//     db.query(q,
//       [req.body.name,
//         req.body.city,
//         req.body.website,
//         req.body.coverPic,
//         req.body.profilePic,
//         userInfo.id,
//     ],
//     (err,data)=>{
//         if(err) res.status(500).json(err)

//         if(data.affectedRows>0) return res.json("Updated!")
//          return res.status(403).json("you can update only your post!") ;  
//     })
//   })
// };



// controllers/user.js

// import { db } from "../connect.js";
// import jwt from "jsonwebtoken";

// // Get user details
// export const getUser = (req, res) => {
//   const userId = req.params.userId;
//   const q = "SELECT * FROM users WHERE id=?";

//   db.query(q, [userId], (err, data) => {
//     if (err) return res.status(500).json(err);

//     if (data.length === 0) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const { password, ...info } = data[0];
//     return res.json(info);
//   });
// };

// // Update user details
// export const updateUser = (req, res) => {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not Authenticated");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");
//     console.log("Profile Pic:", req.body.profilePic);
//     //console.log("Cover Pic:", req.body.coverPic);

//     const q = `
//       UPDATE users 
//       SET name=?, city=?, website=?, profilePic=?, coverPic=? 
//       WHERE id=?
//     `;

//     db.query(
//       q,
//       [
//         req.body.name,
//         req.body.city,
//         req.body.website,
//         req.body.profilePic,
//         req.body.coverPic,
//         userInfo.id,
//       ],
//       (err, data) => {
//         if (err) return res.status(500).json(err);

//         if (data.affectedRows > 0) {
//           return res.json("Updated!");
//         } else {
//           return res.status(403).json("You can update only your own profile!");
//         }
//       }
//     );
//   });
// };




// controllers/user.js

import { db } from "../connect.js";
import jwt from "jsonwebtoken";

// Get user details
export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password, ...info } = data[0];
    return res.json(info);
  });
};

// Update user details
export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Authenticated");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // Validate input
    const { name, city, website, profilePic, coverPic } = req.body;
    if (!profilePic || !coverPic) {
      return res.status(400).json("Profile picture and cover picture are required.");
    }

    const q = `
      UPDATE users 
      SET name=?, city=?, website=?, profilePic=?, coverPic=? 
      WHERE id=?
    `;

    db.query(
      q,
      [
        name,
        city,
        website,
        profilePic,
        coverPic,
        userInfo.id,
      ],
      (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.affectedRows > 0) {
          return res.json("Updated!");
        } else {
          return res.status(403).json("You can update only your own profile!");
        }
      }
    );
  });
};
