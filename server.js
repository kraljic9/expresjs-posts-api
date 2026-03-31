import express from "express";
import posts from "./routes/posts.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const PORT = process.env.PORT || 8000;
const app = express();

// Handle body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", posts);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
