import {API} from './backend';

export const registerAPI=(user)=>{
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>{
        alert(res)
        return res.json()
    })
}

export const getAllUserAPI=()=>{
    return fetch(`${API}/getAllEmployee`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    })
    .then(res=>{
        console.log(res)
        return res.json()
    })
}

