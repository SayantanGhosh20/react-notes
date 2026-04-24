// Creating a react element : an object
// The second parameter, which is an object contains the attibutes and the third parameter contains the content which can be the elements children

import React from "react";
import ReactDOM from "react-dom/client"


const parent = React.createElement(
    "div",
    {id : "parent"},
    [
        React.createElement(
            "div", 
            {id : "child1"}, 
            [
                React.createElement(
                "h1", 
                {id : "firstHeading"}, 
                "First Nested h1 tag"
                ),
                React.createElement(
                    "h1", 
                    {id : "secondHeading"}, 
                    "Second Nested h1 tag"
                )
            ]
        ),
        React.createElement(
            "div", 
            {id : "child2"}, 
            [
                React.createElement(
                "h1", 
                {id : "thirdHeading"}, 
                "Third Nested h1 tag"
                ),
                React.createElement(
                    "h1", 
                    {id : "fourthHeading"}, 
                    "Fourth Nested h1 tag"
                )
            ]
        )
    ]   
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// render converts react elements (objects) to the required tags and attributes
root.render(parent);