// import React,{ Component } from 'react'
// import CBCPropsexl from './propsexample/CBCPropsexl';
// import './App.css';
// class App extends Component {
//     render() {
//         return (
//             <div className='jar'>App
//                 <hr/>

//                 <CBCPropsexl
//                 username="Sam"
//                 age={25}
//                 desig={["developer","tester"]}
//                 userDetails={{city:"Hyd",area:"Maisammaguda"}}
//                 sendFun={function(){alert("Hi i am from parent component")}}
//                 />
//             </div>
//         )
//     }
// }

// export default App;

// // import React from "react";
// // import FBCPropex1 from "./propsexample/FBCPropex1";
// // const App=()=>{
// //     return(
// //         <div>
// //             <FBCPropex1
// //             username="PRASHANTH"
// //             isLoggedIn={false}
// //             hobbies={["running","playing games","traveling","viedo gaming"]}
// //             />
// //         </div>
// //     )
// // }
// // export default App;
import React from "react";
import PropsChildrenEx from "./propsexample/PropsChildrenEx";
import ChildProps from "./propsexample/ChildProps";
const App=()=>{
    return(
        <div className="hi">
            <PropsChildrenEx username="JOE" company="meta">
                <h1>THis data is passes props children</h1>
                <ChildProps/>
            </PropsChildrenEx>
        </div>
    )
}
export default App;