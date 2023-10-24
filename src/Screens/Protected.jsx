import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "../Config/FirebaseMethodss";

function Protected(props) {
 const {DonorScreen}=props;
 const [loader,setLoader]=useState(true);
 const navigate =useNavigate();
 let checkAuth=()=>{
    setLoader(true);
    fbAuth().then(res=>{
        setLoader(false);
    }).catch(err=>{
        setLoader(false)
        navigate("/login")
    })
    // let auth =false
    // if (auth){
    //     setLoader(false);
    // }else{
    //     setLoader(false);
    //     navigate("/login")
    // }
  };
  useEffect(()=>{
    checkAuth()
},[])
    return (
    loader?<>
    <h1>loading...</h1>
    </>:
    <>
    <DonorScreen/>
    {/* <Screen/> */}
    </>
  );
}

export default Protected;
