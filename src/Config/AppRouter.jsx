import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import Protected from "../Screens/Protected";
import DonorDetails from "../Screens/DonorDetails";
import RecipentDetails from "../Screens/Recipient";
export default function AppRouter(){
    return(
        <>
        <Router>
        <Routes>
          {/* <Route path="/" element={<Protected Screen={Home}/>} /> */}
          <Route path="donordetails" element={<Protected DonorScreen={DonorDetails}/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>}/>
          <Route path="recipientdetails" element={<RecipentDetails/>}/>
        </Routes>
      </Router>
        </>
    )
}
