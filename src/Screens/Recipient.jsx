import { useNavigate } from "react-router-dom";
import { GetData, fbLogout } from "../Config/FirebaseMethodss";
import { useEffect, useState } from "react";
import BAButton from "../Components/BAButton";

function RecipentDetails() {
  const [model,setModel] = useState([]);
  const navigate = useNavigate()
  const data = ()=>{
          GetData('users/Recipient').then((res)=>{
            const arr = []
            Object.keys(res).map((key) => {
              arr.push(res[key])
            })
            console.log("Keys", Object.keys(res))
            setModel(arr);
          }).catch((err)=>console.log(err))
        }
        useEffect((()=>{
          data()
        }),[])
  return(
<>
<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen ">
      <div className="bg-slate-200 text-center p-2">
<h1> Recipient Details</h1>
      </div>

<div className="container mt-3">
<table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Email</th>
<th scope="col">Blood Group</th>
</tr>
</thead>
<tbody>
{model.map((e,i)=>{
    return <>
    <tr>
    <th scope="row">{i + 1}</th>
    <td>{e.userName}</td>
    <td>{e.email}</td>
    <td>{e.selectedblood}</td>
    </tr>
    </>
  })}
</tbody>
</table>
<div>
  <BAButton onClick={()=>{
fbLogout().then((re)=>{
  navigate('/login')
}) }} label="Logout" />
</div>


</div>


      </div>
</>  )};
export default RecipentDetails;
  