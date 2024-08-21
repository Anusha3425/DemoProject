import {User} from "../models/userdata.models.js";

 export const getUser = async (req, res) => {
    const user=await User.find();
    res.status(200).json({data: user});
    console.log("Success")
 }

 export const postUser=async(req,res)=>{
    const user= new User(req.body);
    res.status(201).json({data: user, message:"Userdata added successfully."})
    user.save();
 }

 export const updateUser=async(req, res)=>{
    const {id}=req.params;
    const user=await User.findByIdAndUpdate(id,req.body, {new: true});
    if(!user){
        res.status(404).send("User not found");
    }
    res.status(200).json({data: user, message:"Userdata Updated successfully"})
 }

 export const deleteUser=async(req, res)=>{
    const {id}=req.params;
    const user=await User.findByIdAndDelete(id);
    if(!user){
        res.status(404).send("User not found");
    }
    res.status(200).json({message: "Successfully deleted"})
 }

// export getUser;