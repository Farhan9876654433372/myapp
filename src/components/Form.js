import React, { useState } from 'react';

function Form() {
    const  [name,setName] = useState("");   //syntax to declare a variable in react
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [branch,setBranch] = useState("");
    const [USN,setUSN] = useState("");
    const [sem,setSem] = useState("");

    const handleSubmit = (e) => {     //eventhandler to activate submit button
        e.preventDefault();           //to prevent default function like refresh

        const data ={                 //to send data to server
            name: name,               // right side values should be same as defined above in const
            email: email,
            phone: phone,
            USN: USN,
            branch: branch,
            sem: sem
        }
        console.log(data);
    };
    
  return (
    <div className="f">
        <form onSubmit={(handleSubmit)}>  
            <input type="text" value={name} placeholder="Student name"  onChange={(e) => setName(e.target.value)}/><br></br>
            <input type="email" value={email} placeholder="student email" onChange={(e) => setEmail(e.target.value)} /><br></br>
            <input type="text" value={phone} placeholder="student phone" onChange={(e) => setPhone(e.target.value)} /><br></br>
            <input type="text" value={branch} placeholder="student branch" onChange={(e) => setBranch(e.target.value)} /><br></br>
            <input type="text" value={USN} placeholder="student USN" onChange={(e) => setUSN(e.target.value)} /><br></br>
            <input type="text" value={sem} placeholder="student sem" onChange={(e) => setSem(e.target.value)} /><br></br>
            <button className="but" type="submit">submit</button>  
        </form>
        <p>{name}</p> 
        <p>{email}</p>
        <p>{phone}</p>
        <p>{branch}</p>
        <p>{USN}</p>
        <p>{sem}</p>
    </div>
  )
}

export default Form