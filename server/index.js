import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import filmsRoute from "./Routes/Films.js";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/films", filmsRoute);
// const { Schema } = mongoose;
// const UserScheme = new Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     image:{type:String,required:true},
//     category:[{type:String,required:true}]
//   },
//   { timestamps: true }
// );
// const Users = mongoose.model("data", UserScheme);


// app.get("/", async (req, res) => {
//   const data = await Users.find({});
//   res.send(data);
// });


// app.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   const data = await Users.findById(id);
//   res.send(data);
// });


// app.post("/", async (req, res) => {
//   const data =  new Users({
//     title: req.body.title,
//     description: req.body.description,
//     image:req.body.image,
//     category:req.body.category
//   });
//   data.save();
//   res.send({ message: "User Created" });
// });


// app.delete("/:id", async (req, res) => {
//   const id =  req.params.id;
//   const data = await Users.findByIdAndDelete(id);
//   res.send(data);
// });


// app.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   const data = await Users.findByIdAndUpdate(id,req.body);
//   res.send(data);
// });


const PORT = process.env.PORT;
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net');
app.listen(PORT,()=>{
    console.log('Serverimize xos geldiniz');
})
