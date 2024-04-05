import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser
} from "../controller/UserController.js";
const router = express.Router();
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);
export default router;