import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!",status:"success" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
