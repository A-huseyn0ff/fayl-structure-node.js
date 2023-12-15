import express from "express";
import { getUsers,getUser,deleteUser,updateUser,postUser } from "../controllers/film.js";

const router = express.Router();
router.post("/", postUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/:id", getUser);

router.get("/", getUsers);





export default router;