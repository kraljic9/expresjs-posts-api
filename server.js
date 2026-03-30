import express from "express";

const PORT = process.env.PORT || 8000;
const app = express();

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post one" },
];

// Get all posts

app.get("/api/posts", (req, res) => {
  res.json(posts);
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

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
