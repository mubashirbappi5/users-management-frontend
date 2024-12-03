
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const AllData = ({users,setusers, }) => {
  
    
    const handleDelete = (id)=>{
    
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",})
            .then((result) => {
                if (result.isConfirmed) {
      
      console.log(id)
      fetch(`https://users-management-backend.vercel.app/user/${id}`,
        {
            method:"DELETE",
           headers: { 'Content-Type': 'application/json' },

        }
      )
      .then(res=> res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
            const remainguser = users.filter(user=>user._id !== id)
            setusers(remainguser)

        }
      })
    }
    })
    }
   
   
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Status</th>
      </tr>
    </thead>
   {
    users.map((data,idx)=> <tbody>
        {/* row 1 */}
        <tr className="bg-base-200">
          <th>{idx+1}</th>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.gender}</td>
        {
            (data.status ==='active'?<td>active</td>:<td>inactive</td>)
        }
        <td className=' flex gap-2'>
           <Link to={ `/update/${data._id}`}> <button className='btn'>edit</button></Link>
            <button onClick={()=>handleDelete(data._id)} className='btn'>X</button>
        </td>
        
        </tr>
       
      </tbody>
              )
   }
  </table>
</div>
            
        </div>
    );
};

export default AllData;