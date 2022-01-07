

const express = require("express");
const app = express();
const {addUser,selectAllUser} = require("./user")
const port = 9001;
const cors = require("cors");
const { add } = require("nodemon/lib/rules");
app.use(express.json());
app.use(cors());

app.get("/users", async (req, res)=>{
    const list = await selectAllUser();
    res.json(list);
});

app.post("/addUser", async (req, res) => {
    const user1 = req.body;
    await addUser(obj);
    res.json({message:"User added..."});
});
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
