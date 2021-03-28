import axios from "axios";

export function GetUserData(){
    return axios.get(`https://605c14386d85de00170d93e0.mockapi.io/users`);
}

export function PostUserData(data)
{
    return axios.post(`https://605c14386d85de00170d93e0.mockapi.io/users`,data);
}

export function getCurrentUserData(id)
{
    return axios.get(`https://605c14386d85de00170d93e0.mockapi.io/users/${id}`);
}

export function updateCurrentUserData(id,data)
{
    return axios.put(`https://605c14386d85de00170d93e0.mockapi.io/users/${id}`,data);
}

export function deleteCurrentUser(id)
{
    axios.delete(`https://605c14386d85de00170d93e0.mockapi.io/users/${id}`);
}