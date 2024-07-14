import express from "express";
import {  getComments,addComment} from "../controllers/comment.js";

const router=express.Router()

router.get("/",getComments);
//end point and controllers
router.post("/",addComment);

export default router