import React, { Fragment } from "react";
import Employees from "./Employee";
import { Link, useNavigate } from "react-router-dom";

function Home() {

  let history = useNavigate();

  const handleUpdate = (id, name, email, address, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Address", address);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };
  
  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    history("/");

  };
  return (
    <Fragment>
      <div className="container mt-5">

      <Link to={"/create"}>
          <button type="button" class="btn btn-primary mb-5">
            CREATE
          </button>
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Age</th>

              <th> Action</th>
            </tr>
          </thead>

          <tbody>
             {
            //  Employees && Employees.length > 0
            //   ?  
              Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Email}</td>
                      <td>{item.Address}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Link to={"/update"}>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() =>
                              handleUpdate(
                                item.id,
                                item.Name,
                                item.Email,
                                item.Address,
                                item.Age
                              )}
                          >
                            EDIT
                          </button>
                        </Link>
                        &nbsp; &nbsp;
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  );
                })
            //   : "No Data Available"
              }
          </tbody>
        </table>

        {/* <Link to={"/create"}>
          <button type="button" class="btn btn-primary">
            CREATE
          </button>
        </Link> */}
      </div>
    </Fragment>
  );
}

export default Home;
