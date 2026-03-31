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

router.get("/", (req, res) => {
  const limit = Number(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// Get individual post

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `Error could not find post with id ${id}` });
  }

  res.status(200).json(post);
});

// Add post

router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res
      .status(400)
      .json({ message: "Error accured please add a title" });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

// Delete post

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `Error accured post with id ${id} was not found` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(201).json(posts);
});

// Edit post

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `Error accured post with id ${id} was not found` });
  }

  post.title = req.body.title;
  res.status(201).json(posts);
});

export default router;
