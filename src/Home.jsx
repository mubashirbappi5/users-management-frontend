import { Link, useLoaderData } from "react-router-dom";
import AllData from "./components/AllData";
import { useState } from "react";


const Home = () => {
    const allData = useLoaderData()
    const [users,setusers] = useState(allData)
    console.log(allData)
    return (
        <div>
            <div className="flex justify-center items-center">
                <Link to={'/addusers'}><button className="btn btn-outline text-orange-500">Add User</button></Link>
            </div>


            <div className="w-7/12 mx-auto my-10">
                <AllData setusers={setusers}users={users} />
            </div>

            
            
        </div>
    );
};

export default Home;