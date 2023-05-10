import express from "express";
<<<<<<< HEAD
import {
  getComments,
  addComment,
  deleteComment,
} from "../controllers/comment.js";
=======
import { addComment, getComments, deleteComment } from "../controllers/comment.js";
>>>>>>> 8192f120eb379a301e6706767d210d13590601cc

const router = express.Router();

router.get("/", getComments);
router.post("/", addComment);
<<<<<<< HEAD
router.delete("/:id", deleteComment);
=======
router.delete("/", deleteComment);
>>>>>>> 8192f120eb379a301e6706767d210d13590601cc

export default router;