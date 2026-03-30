import express from "express";

const PORT = process.env.PORT || 8000;
const app = express();

let post = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post one" },
];

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
