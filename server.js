import express from "express";

const PORT = process.env.PORT || 8000;
const app = express();

// Handle body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Post array hardcoded API
let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post one" },
];

// Get all posts

app.get("/api/posts", (req, res) => {
  const limit = Number(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// Get individual post

app.get("/api/posts/:id", (req, res) => {
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

app.post("/api/posts", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
