import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged , 
    signOut } 
from "firebase/auth";
import { getDatabase,ref,set,onValue,push } from "firebase/database";
import { app } from "./FirebaseConfig";


let auth = getAuth(app)
let db = getDatabase(app)

export const fbLogin=(body,nodeName)=>{
    return(
        new Promise ((resolve,reject)=>{
    if(!body.email || !body.password){
        reject("Email or Password is Required")
    }else{
    signInWithEmailAndPassword(auth,body.email,body.password).then(res=>{
    let id = res.user.uid;
    const refrence=ref(db,`${nodeName}/${id}`)
    onValue(refrence,(data)=>{
        if(data.exists()){
            resolve(data.val())
        }else{
            reject("No Data Found")
        }
    })
}
).catch((err)=>{
        reject("No Data Found")
        // reject(err)

    })
    }
        })
    )
}

export let fbSignUp=(body,nodeName)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            createUserWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid

                body.id = id
                const referece = ref(db,`${nodeName}/${id}`)
                set(referece,body).then(user=>{
                    resolve("User Created Succefully")
                }).catch(error=>{
                    reject(error)
                })

            }).catch(err=>{
                reject(err)
            })
        }
    })
}

export let fbAuth=()=>{
return new Promise((resolve,reject)=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          resolve(uid)
        } else {
            reject("No User is Logged in")
          // User is signed out
          // ...
        }
      });
})
    
}

export let fbAdd=(nodeName,body,id)=>{
return new Promise ((resolve,reject)=>{
    
    const TaskId = push(ref (db,`${nodeName}/`)).key
    body.id=TaskId;
    
    
    const reference = ref (db,`${nodeName}/${body.id}`)
    set(reference,body).then(res=>{
resolve("Data Send Successfully")
}).catch(err=>{
    reject(err)
})
})
}

// export let fbGet=(nodeName,id)=>{
//     return new Promise((resolve,reject)=>{
//         const referece= (db,`${nodeName}/${id?id:""}`)
//         onValue(referece,(data)=>{
//             if(data.exists()){
//                 resolve(data.val())
//             }else{
//                 reject("No Data Found")
//             }
//         })
//     })
// }
export const GetData = (nodeName, id) => {
    return new Promise((resolve, reject) => {
      const referencedb = ref(db, `${nodeName}/${id ? id : ""}`);
      onValue(referencedb, (data) => {
        if (data.exists()) {
          resolve(data.val());
        } else {
          reject("not Found Data");
        }
      });
    });
  };

  export let fbLogout=()=>{
    return signOut(auth)      
  }
  