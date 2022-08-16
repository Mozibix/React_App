import React from "react";
import "./App.css";
let Test = (props) => {
  console.log(props);
  return (
    <div className="App">
      {/* <h1>
        Name: {props.name} and Age: {props.age}
      </h1>
      <h1>New Dat: {props.children} </h1> */}
    </div>
  );
};

export default Test;

//function Test() {
//   //   return (
//   //     <div className="App">
//   //       <h1>This is the test page</h1>
//   //     </div>
//   //   );

//   return React.createElement(
//     "div",
//     { className: "App" },
//     React.createElement("hi", null, "This is test file")
//   );
// }
