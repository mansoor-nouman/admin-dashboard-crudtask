import React, {useState} from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({children}) => {
    let [userList, setUserList] = useState([]);
    return <UserContext.Provider value={{ userName: "Mansoor", userList, setUserList }}>
        {children}
    </UserContext.Provider>
}