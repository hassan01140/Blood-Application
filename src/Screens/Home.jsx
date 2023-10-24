// import { useEffect, useState } from "react";
// import BAInput from "../Components/BAInput";
// import BAButton from "../Components/BAButton";
// import { fbAdd, fbGet } from "../Config/FirebaseMethodss";

// function Home() {
//   const [model, setModel] = useState({});
//   const [taskList,setTaskList] =useState([]);
//   const fillModel = (key, val) => {
//     model[key] = val;
//     setModel({ ...model });
//   };

//   let addTask=()=>{
//     fbAdd('tasks',model).then(res=>{
//  console.log(res)
// }).catch(err=>{
//       console.log(err)

//   })
//   }

//   let getTask=()=>{
//     fbGet("tasks").then(res=>{
//  console.log(res)
// //  setTaskList([...res])
// }).catch(err=>{
//       console.log(err)

//   })
//   }
//   // useEffect(()=>{
//   // getTask();
//   // },[])

//   return (
//     <>
//     <h1>Home</h1>
//     <BAInput
//     value={model.task}
//     onChange={(e) => fillModel("task", e.target.value)}
//     label="Task"
//     /> 
//     <div className="mt3">
//     <BAInput
//               value={model.assigne}
//               onChange={(e) => fillModel("assigne", e.target.value)}
//               label="Assigne"
//             />
//     </div>
//     <div>
//       <BAButton onClick={addTask} label="Assigne"/>
//       <BAButton onClick={getTask} label="GET"/>
//     </div>

//     {/* <div>
//       {taskList &&  taskList.map((x)=><div>
//         <h1>{x.task}</h1>
//         <h1>{x.assigne}</h1>
//       </div>)}
      
//     </div> */}
//     </>
//   );
// }

// export default Home;
