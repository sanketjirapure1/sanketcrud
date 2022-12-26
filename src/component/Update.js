
import React, { useState,useEffect } from "react";
import { v4 as uuid } from "uuid";
import Employees from "./Employee";
import { Link, useNavigate } from "react-router-dom";

function Update() {
 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [address,setAddress] = useState("");
 const [age,setAge] = useState("");
 const [id,setId] = useState("");

 let history = useNavigate();

 var index = Employees.map(function(e){
    return e.id
 }).indexOf(id);

 const handleUpdate = (e) => {
    e.preventDefault();
   let a = Employees[index];
   a.Name= name;
   a.Email= email;
   a.Address= address;
   a.Age= age;
    history("/")
   }

   useEffect(() =>{
  setName(localStorage.getItem("Name"))
  setEmail(localStorage.getItem("Email"))
  setAddress(localStorage.getItem("Address"))
  setAge(localStorage.getItem("Age"))
  setId(localStorage.getItem("Id"))
   },[])
 

  return (
    <div style={{width:"50%",textAlign:"left",marginLeft:200,marginTop:100}}>

<form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Addrees
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            {" "}
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" 
        className="btn btn-primary"
        onClick={(e) => handleUpdate(e)}
        > 
          Submit
        </button>
      </form>
      
    </div>
  )
}

export default Update
