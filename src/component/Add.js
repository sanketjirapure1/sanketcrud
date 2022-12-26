import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Employees from "./Employee";
import { useNavigate } from "react-router-dom";
function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  let history = useNavigate();

  const handleSubmit = (e) => {
   e.preventDefault();
   const ids = uuid();
   let uniqueId = ids.slice(0,8);

   let a = name,
   b = email,
   c = address,
   d = age;
   Employees.push({id:uniqueId, Name:a,Email:b,Address:c,Age:d} )
   history("/")
  };

  return (
    <div style={{width:"50%",textAlign:"left",marginLeft:200,marginTop:100}} >
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
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" 
        className="btn btn-primary"
        onClick={(e) => handleSubmit(e)}
        > 
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
