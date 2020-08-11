const server = require("./infra/server");

    const main = async() =>{
            await server();
    };

main();



/* const express = require(`express`);
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Welcome, pals"));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); */