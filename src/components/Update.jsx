import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  const handleupdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    
    const updateData = {
      name,
      email,
      
    };
    fetch(`https://users-management-backend.vercel.app/user/${data._id}`,{
        method:"PUT",
        headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(updateData)
            

    })
    .then(res => res.json())
    .then(data=> {
        console.log('update',data)
        if( modifiedCount>0){
            Swal.fire({
                   
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  };
  return (
    <div>
      <h1>this is update section</h1>
      <h2>{data.name}</h2>
      <div className="card bg-base-100 w-5/12 mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleupdate} className="card-body">
          <div >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder=" Enter your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
