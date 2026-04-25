import React from "react";

import ReactDOM from "react-dom/client";

const singlelineHeading = <h1 className="heading">Element made using JSX</h1>;

const multilineHeading = (
    <h1 className="heading">
        Element made using JSX
	</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(multilineHeading);










// -----------------------------------------------------------------
// import React from "react";
// import ReactDOM from "react-dom/client"

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Component
// const SubHeading1 = () => {
//     return <h2 className = "subHeading">This is the first sub-heading</h2>
// };

// // Component
// const SubHeading2 = () => (
//     <h2 className = "subHeading">
//         This is the second sub-heading
//     </h2>
// );

// // Component
// const SubHeading3 = () => <h2 className="subHeading">This is the third sub-heading</h2>;

// // component composition
// const CombinedComponent = () =>(
//  <div>
//     <SubHeading1/>
//     <SubHeading2 />
//     <SubHeading3 />
//  </div>
// );

// root.render(<CombinedComponent />);







// import React from "react";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const elem = "Made in plain JS";

// const Heading = ({text, id}) =>{
//     return (<
//         h1 id={id}>
//             {text}
//         </h1>);
// };

// const ReusableComponent = () => (
//     <div id = "parent">
//         <div id = "child1">
//             <Heading text="First nested h1 tag" id="firstHeading" />
//             <Heading text="Second nested h1 tag" id="secondHeading" />
//         </div>
//         <div id = "child2">
//             <Heading text="Third nested h1 tag" id="thirdHeading" />
//             <Heading text="Fourth nested h1 tag" id="fourthHeading" />
//         </div>       
//         {elem}
//     </div>
// );

// root.render(<ReusableComponent />);