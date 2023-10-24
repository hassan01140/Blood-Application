import { useState } from "react";
// import { fbSignUp } from "../config/firebasemethods";
import { useNavigate,Link } from "react-router-dom";
import BAInput from "../Components/BAInput";
import BAButton from "../Components/BAButton";
import { fbLogin } from "../Config/FirebaseMethodss";

export default function Login() {
  const [model, setModel] = useState({});

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let LoginUser = () => {
    console.log(model);
    fbLogin(model,`users/${model.selectedcategory}`)
      .then((res) => {
        console.log(res);
        if(res.selectedcategory=="Donor"){
          navigate("/donordetails")
        }else{
          navigate("/recipientdetails")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // let LoginUser = () => {
  //   console.log(model);
  //   fbLogin(model)
  //     .then((res) => {
  //       console.log(res);
  //       if(res.role=="admin"){
  //         navigate("/admin")
  //       }else{
  //         navigate("/student")
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-3">
            <h1 className="text-3xl font-medium">Login</h1>
          </div>
          <div className="py-3">
            <BAInput
              value={model.email}
              onChange={(e) => fillModel("email", e.target.value)}
              label="Email" type="email"
            />
          </div>
          <div className="py-3">
            <BAInput
              value={model.password}
              onChange={(e) => fillModel("password", e.target.value)}
              label="Password" type="password"
            />
          </div>
          <div className="py-3">
          <select className=" p-3 border-2 border-teal-700 focus:border-teal-100 w-full outline-none rounded "
          onChange={(e) => fillModel("selectedcategory", e.target.value)}
            aria-label="Default select example">
          <option selected>Select the Category </option>
          <option value={model.donor}>Donor</option>
          <option value={model.recipient}>Recipient</option>
          </select>
          </div>
        
          <div className="py-3">
            <BAButton onClick={LoginUser}  label="Login" />
          </div>
          <div className="">
            <Link to={"/signup"}>Create Account</Link>
          </div>
        </div>
      </div>
    </>
  );
}