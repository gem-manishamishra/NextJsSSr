import axios from 'axios';
// const axios=require('axios')
 export const fetchUser =async ()=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        // let = res.data
        // console.log(data);
        let users=[]
        for(let d of data){
            users.push(d)
        }
        // console.log(users)cl
        return users
    
}
export const fetchUserById =async (id)=>{
    let UserId=parseInt(id)
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${UserId}`)
        console.log(data)
        
        return data
    
}
