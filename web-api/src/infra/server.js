const express = require("express");

//Setup variables
const port = 3000;

const server = async() => {
  //Create an express app
  const app = express();

  // Routes'
  app.post("/stories", (req, res) =>{
    res.send("Hey, story here");
    <video control></video>
  });

  // app.get('/', (req, res) => {
  //   res.send('Hello World!')
  // })

  app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);

    console.table({
      "App Name": "Covid Anchor API",
      path: `http://localhost:${port}`,
    });
  });
};

module.exports = server;
