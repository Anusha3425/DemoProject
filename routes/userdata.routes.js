import {getUser, postUser, updateUser, deleteUser} from "../controllers/userdata.controllers.js";
import express from "express";

const UserRouter=express.Router();

UserRouter.get('/', getUser)
UserRouter.post('/', postUser);
UserRouter.put('/:id', updateUser);
UserRouter.delete('/:id', deleteUser);

export default UserRouter;