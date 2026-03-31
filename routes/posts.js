import express from "express";
import {
  getPosts,
  getPost,
  addPost,
  deletePost,
  editPost,
} from "../controllers/postControllers.js";
const router = express.Router();

// Get all posts

router.get("/", getPosts);

// Get individual post

router.get("/:id", getPost);

// Add post

router.post("/", addPost);

// Delete post

router.delete("/:id", deletePost);

// Edit post

router.put("/:id", editPost);

export default router;
