import React, {useContext, useEffect, useState} from "react";
import { getCurrentUserData, updateCurrentUserData } from "./api";
import UserContext from "./usercontext";


function EditUser(p)
{  
    let uniqueId;
    uniqueId = parseInt(p.match.params.userid);
     console.log(p.match.params.userid);
    // let users = useContext(UserContext);
    let [editName, setEditName]= useState("");
    let [editEmail, setEditEmail] = useState("");

    useEffect(async () => {
        let currentUser = await getCurrentUserData(uniqueId);
        setEditName(currentUser.data.name);
         console.log(currentUser.data.name);
        setEditEmail(currentUser.data.email);
    },[])

    async function updateUserData(obj){
        await updateCurrentUserData(uniqueId,obj);
        setEditName("");
        setEditEmail("");
    }

    function updateUser(e){
        e.preventDefault();
        let obj = {
            name: editName, email: editEmail
        }
        updateUserData(obj);
    }
    return(
    <>
    <form>
    <div className="container">
           <div className="row">
               <div className="col-lg-6">
                   <label>User Name</label>
                   <input className="form-control" type="text" value={editName} onChange = {(e) => {
                       setEditName(e.target.value);
                   }}/>
               </div>
               <div className="col-lg-6">
                   <label>User Email</label>
                   <input className="form-control" type="text"value={editEmail} onChange = {(e) => {
                       setEditEmail(e.target.value);
                   }}/>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-3">
                   <button className="btn btn-primary" style={{marginTop: "15px"}} onClick = {(e) => updateUser(e)}>Edit User</button>
               </div>
           </div>
           </div>
           </form>
    </>
    );
}
export default EditUser;