import express from "express";

const router = express.Router();

// Post array hardcoded API
let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post one" },
];

// Get all posts

router.get("/", (req, res, next) => {
  const limit = Number(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// Get individual post

router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Error accured post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
});

// Add post

router.post("/", (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`Error accured please add a title`);
    error.status = 404;
    return next(error);
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

// Delete post

router.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Error accured post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(201).json(posts);
});

// Edit post

router.put("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Error accured post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(201).json(posts);
});

export default router;
