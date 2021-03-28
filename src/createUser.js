import React, {useContext, useState} from "react";
import { PostUserData } from "./api";
import UserContext from "./usercontext";


 function CreateUser()
{
    // let users = useContext(UserContext);

    let [userName, setUserName]= useState("");
    let [userEmail, setUserEmail] = useState("");

    async function addUser(e){
        e.preventDefault();
        let userData = {
            name: userName, email: userEmail
        }
        let setUser = await PostUserData(userData);
        console.log(setUser);
        setUserName("");
        setUserEmail("");
    }
   

    return (
        <>
        <div className="container">
           <div className="row">
               <div className="col-lg-6">
                   <label>User Name</label>
                   <input className="form-control" type="text" value={userName} onChange = {(e) => {
                       setUserName(e.target.value);
                   }}/>
               </div>
               <div className="col-lg-6">
                   <label>User Email</label>
                   <input className="form-control" type="text"value={userEmail} onChange = {(e) => {
                       setUserEmail(e.target.value);
                   }}/>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-3">
                   <button className="btn btn-primary" style={{marginTop: "15px"}} onClick = {(e) => addUser(e)}>Add User</button>
               </div>
           </div>
           </div>
           
           
        </>
    );
}
export default CreateUser;