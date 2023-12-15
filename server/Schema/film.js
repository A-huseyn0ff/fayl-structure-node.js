import mongoose from "mongoose";

const UserScheme = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image:{type:String,required:true},
        category:[{type:String,required:true}]
      },
      { timestamps: true }
);

export default mongoose.model("data", UserScheme);