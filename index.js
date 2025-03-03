const express = require("express");
const app = express();

app.use(express.json());
const coursesRouter = require("./routes/courses.route");
app.use("/api/courses", coursesRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
