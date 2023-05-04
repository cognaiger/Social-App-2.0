import express from "express";
import { getPosts, deletePost } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.delete("/:id", deletePost);

export default router