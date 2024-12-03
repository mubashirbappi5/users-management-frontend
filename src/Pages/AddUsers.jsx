import React from "react";
import Swal from "sweetalert2";

const AddUsers = () => {
    const handleadduser = (e)=> {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const gender = form.radio1.value
        const status = form.radio2.value
        const userData = {
            name,email,gender,status
        }
        console.log(userData)
        fetch("https://users-management-backend.vercel.app/user",{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(userData)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                   
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
              
            }
            console.log(data)
        })

    }
  return (
    <div>
      <div className="card bg-base-100 w-5/12 mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleadduser} className="card-body">
          <div className="flex gap-4">
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
          
          <div className="form-control">
            <label className="label">
              <span>Gender</span>
            </label>
           <div className="flex items-center">
           <input
              type="radio"
              name="radio1"
              className="radio"
              value='male'
              defaultChecked
            />
            <label  className="label">
              <span>Male</span>
            </label>

           </div>
           <div className="flex items-center">
           <input
              type="radio"
              name="radio1"
              className="radio"
              value='fmale'
              
            />
            <label  className="label">
              <span>Fmale</span>
            </label>

           </div>
            
          </div>
          <div className="form-control">
            <label className="label">
              <span>Status</span>
            </label>
           <div className="flex items-center">
           <input
              type="radio"
              name="radio2"
              className="radio"
              defaultChecked
              value='active'
            />
            <label  className="label">
              <span>Active</span>
            </label>

           </div>
           <div className="flex items-center">
           <input
              type="radio"
              name="radio2"
              className="radio"
              value='inactive'
              
            />
            <label  className="label">
              <span>Inctive</span>
            </label>

           </div>
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
