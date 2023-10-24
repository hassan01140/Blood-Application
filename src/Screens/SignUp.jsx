import { useState } from "react";

// import { fbSignUp } from "../config/firebasemethods";
import { useNavigate,Link } from "react-router-dom";
import { fbSignUp } from "../Config/FirebaseMethodss";
import BAInput from "../Components/BAInput";
import BAButton from "../Components/BAButton";

export default function SignUp() {
  const [model, setModel] = useState({});

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };
  
  
  
  const navigate = useNavigate();
  // model.role="users";
  let SignUpUser = () => {
    
    console.log(model);
    fbSignUp(model,`users/${model.selectedcategory}`)
    .then((res) => {
      if(model.selectedcategory==="Donor"){
        navigate("/donordetails")
      }else if(model.selectedcategory==="Recipient"){
        navigate("/recipientdetails")
        // navigate("/login")
       
      }
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(model)
  };
  
  
  
  // model.role="users";
  // let SignUpUser = () => {
    
  //   console.log(model);
  //   fbSignUp(model)
  //   .then((res) => {
  //     if(model.role=="admin"){
  //       navigate("/login")
  //     }else{
  //       navigate("/login")
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //   console.log(model)
  // };
  
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-2">
            <h1 className="text-3xl font-medium">Sign Up</h1>
          </div>
          <div className="py-2">
            <BAInput
              value={model.userName}
              onChange={(e) => fillModel("userName", e.target.value)}
              label="User Name"
            />
          </div>
          <div className="py-2">
            <BAInput
              value={model.email}
              onChange={(e) => fillModel("email", e.target.value)}
              label="Email" type="email"
            />
          </div>
          <div className="py-2">
            <BAInput
              value={model.password}
              onChange={(e) => fillModel("password", e.target.value)}
              label="Password" type="password"
            />
          </div>
          <div className="py-2">
          <select    className=" p-3 border-2 border-teal-700 focus:border-teal-100 w-full outline-none rounded "
          onChange={(e) => fillModel("selectedblood", e.target.value)}
            aria-label="Default select example">
          <option selected>Select the blood group</option>
          <option value={model.O}>O</option>
          <option value={model.B}>B</option>
          <option value={model.AB}>AB</option>
          </select>
          </div>
          <div className="py-2">
          <select className=" p-3 border-2 border-teal-700 focus:border-teal-100 w-full outline-none rounded "
          onChange={(e) => fillModel("selectedcategory", e.target.value)}
            aria-label="Default select example">
          <option selected>Select the Category </option>
          <option value={model.donor}>Donor</option>
          <option value={model.recipient}>Recipient</option>
          </select>
          </div>
          <div className="py-3">
            <BAButton onClick={SignUpUser}  label="Sign Up" />
          </div>
          <div className="">
            <Link to={"/login"}>Already Registered</Link>
          </div>
        </div>
      </div>
    </>
  );
}