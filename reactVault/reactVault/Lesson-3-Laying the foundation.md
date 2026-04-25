### Revision

1. [ ] In React, we can create 
	1. [ ] react elements → objects
	2. [ ] react components :
		1. [ ] Class based components → Classes
		2. [ ] Functional components → Functions
2. [ ] Syntax for a react element (object) :  
	1. [ ] `React.createElement(element, attribute, children)`
		1. [ ] Element : The element to be created 
		2. [ ] Attributes : attributes of the react element like `id`
		3. [ ] Children : Content or other elements
3. [ ] Syntax for creating root container using `ReactDOM.createRoot()` : 
	1. [ ] `ReactDOM.createRoot(root)`
		1. [ ] root : The HTML element in which our react code will be rendered in
4. [ ] We render elements and components using the `render()` method. It is used to render the react elements inside the root. When we `render` a react element / react component on to the Document Object Model (DOM) then it becomes a HTML element.
5. [ ] Flow : Virtual DOM → Reconciles → Updates actual DOM
6. [ ] Syntax for rendering : 
	1. [ ] `root.render(react-element)`
	2. [ ] `root.render(<ComponentName />)`
7. [ ] The `render()` method **DOES NOT APPEND** instead it replaces all the content present inside the root.

### Industry standard shortcuts

1. [ ] We will now setup shortcuts for different commands
2. [ ] Currently for dev builds we use command : `npx parcel index.html`
3. [ ] Currently for production builds we use command : `npx parcel build index.html`
4. [ ] To setup shortcuts we have to open `package.json` and in the file under `scripts`  add : 
	1. [ ] `"start" : "parcel index.html"`
	2. [ ] `"build" : "parcel build index.html"`
5. [ ] Now we can use the industry standard methods such as :
	1. [ ] `npm run start` OR `npm start`
	2. [ ] `npm run build`
6. [ ] To start the dev server we run : `npm run start` OR `npm start`
7. [ ] To create a production build we run : `npm run build`

### JSX (JavaScript XML)

1. [ ] It stands for **JavaScript XML**.
2. [ ] JSX is a syntax extension for JavaScript, that allows us to write HTML-like or XML-like code directly inside our JavaScript files.
3. [ ] Entities defined by JSX are also react elements (objects). However JSX is a separate concept and is not a fundamental part of React.
4. [ ] To render JSX we sill use the `render()` method. But instead of passing the variable containing the `React.createElement()` method, we pass the JSX variables.
5. [ ] JS engines only understand ECMA scripts. 
6. [ ] It does not understand JSX natively as it is not built-into JS.
7. [ ] When building our project using `parcel`, it uses the `babel` package to transpile our react and JSX code into plain JavaScript which can then be understood by the browsers JS engines.
8. [ ] In the background babel creates each JSX defined tag using `React.createElement()`
9. [ ] Mental model : JSX → Babel → `React.createElement()` → render() → HTML element

**NOTE :** 
- JSX may look like HTML but it is NOT HTML. It has a HTML like syntax. 
- JavaScript does not come with JSX built into it. Thus the JS engine will not understand it natively.
- JS engine understands ECMA script (ES)

### React Components 

1. [ ] A React component is an independent, reusable piece of code that serves as the fundamental building block of a React application.
2. [ ] There are two types of components that we can create : 
	1. [ ] Class based component : 
		1. [ ] Old legacy method of creating components
		2. [ ] Might be present in legacy applications
	2. [ ] Functional component : 
		1. [ ] This is the modern way of creating components
		2. [ ] These are just functions, that returns JSX or react element(s).
		3. [ ] It is mandatory for component names to start with a uppercase letter, else it will not be considered as a component.
		4. [ ] Rendering a react component : `render(<ComponentName />)`


### Component Composition

1. [ ] It is the process of putting one or more components inside other components (nesting components)
2. [ ] Inside the final component, the components must be present inside a tag (e.g. `<div></div>).

---

### Common Files 

#### `index.html`

```
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <link rel="stylesheet" href="./style.css">

</head>

<body>

    <div id="root">

        <h1>Not Rendered</h1>

    </div>

    <script type="module" src="./app.js"></script>

  

</body>

</html>
```

#### `style.css`

```
#heading{

    color: red;

}
```

### Comparing `React.createElement()` with JSX

#### `app.js`

```
import React from "react";

import ReactDOM from "react-dom/client";

const heading = React.createElement(

    "h1",

    {id : "heading"},

    "Element made using createElement"

);

const jsxHeading = <h1>Element made using JSX</h1>;

console.log(heading);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
```

### Single vs Multi-line JSX

#### `app.js`

```
import React from "react";

import ReactDOM from "react-dom/client";

const singlelineHeading = <h1 className="heading">Element made using JSX</h1>;

const multilineHeading = (

    <h1 className="heading">

        Element made using JSX

    </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(multilineHeading);
```

### Converting our react code to JSX

#### `app.js`

```
import React from "react";

import ReactDOM from "react-dom/client";

  

const root = ReactDOM.createRoot(document.getElementById("root"));

  
  

// old code

  

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

                    "First nested h1 tag"

                ),

                React.createElement(

                    "h1",

                    {id : "secondHeading"},

                    "Second nested h1 tag"

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

                    "Third nested h1 tag"

                ),

                React.createElement(

                    "h1",

                    {id : "fourthHeading"},

                    "Fourth nested h1 tag"

                )

            ]

        )

    ]

);

  

// new JSX code

  

const JSXParent = () => (

    <div id = "parent">

        <div id = "child1">

            <h1 id ="firstHeading">First nested h1 tag</h1>

            <h1 id ="secondHeading">Second nested h1 tag</h1>

        </div>

        <div id = "child2">

            <h1 id ="thirdHeading">Third nested h1 tag</h1>

            <h1 id ="fourthHeading">Fourth nested h1 tag</h1>

        </div>

    </div>

);

  

root.render(<JSXParent />);
```

### JSX code only

#### `app.js`

```
import React from "react";

import ReactDOM from "react-dom/client";

  

const root = ReactDOM.createRoot(document.getElementById("root"));

const JSXParent = () => (

    <div id = "parent">

        <div id = "child1">

            <h1 id ="firstHeading">First nested h1 tag</h1>

            <h1 id ="secondHeading">Second nested h1 tag</h1>

        </div>

        <div id = "child2">

            <h1 id ="thirdHeading">Third nested h1 tag</h1>

            <h1 id ="fourthHeading">Fourth nested h1 tag</h1>

        </div>

    </div>

);

  

root.render(<JSXParent />);
```

### Component usage

#### `app.js`

```
import React from "react";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const JSXParent = () => (

    <div id = "parent">

        <div id = "child1">

            <h1 id ="firstHeading">First nested h1 tag</h1>

            <h1 id ="secondHeading">Second nested h1 tag</h1>

        </div>

        <div id = "child2">

            <h1 id ="thirdHeading">Third nested h1 tag</h1>

            <h1 id ="fourthHeading">Fourth nested h1 tag</h1>

        </div>

    </div>

);

root.render(<JSXParent />);
```

### Component composition

#### `app.js`

```
import React from "react";

import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));


// Component

const SubHeading1 = () => {

    return <h2 className = "subHeading">This is the first sub-heading</h2>

};

  

// Component

const SubHeading2 = () => (

    <h2 className = "subHeading">

        This is the second sub-heading

    </h2>

);

  

// Component

const SubHeading3 = () => <h2 className="subHeading">This is the third sub-heading</h2>;

  

// component composition

const CombinedComponent = () =>(

 <div>

    <SubHeading1/>

    <SubHeading2 />

    <SubHeading3 />

 </div>

);

root.render(<CombinedComponent />);
```

### Calling a component as a function 

#### `app.js`

```
import React from "react";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () =>(
	<h1 className="heading" tabIndex="5">Hello</h1>
);

const HeadingComponent = () =>(
	<div>
		{Title()}
	</div>
);

root.render(<HeadingComponent />);
```

**NOTE :** This is not recommended as it bypasses react lifecycle. `<Title />` is the preferred way.
### Combining components with JSX and plain JavaScript

#### `app.js`

```
import React from "react";

import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));


// plain JS

const val = 1000;

const elem = <span>Spanning</span>


// JSX

const heading = (

    <h1>{elem} {val + ": "} Testing component composition</h1>

);
  

// Component

const SubHeading1 = () => {

    return <h2 className = "subHeading">This is the first sub-heading</h2>

};
  

// Component

const SubHeading2 = () => (

    <h2 className = "subHeading">

        This is the second sub-heading

    </h2>

);


// Component  

const SubHeading3 = () => <h2 className="subHeading">This is the third sub-heading</h2>;
  

// component composition

const CombinedComponent = () =>(

 <div>

    {heading}

    <SubHeading1/>

    <SubHeading2 />

    <SubHeading3 />

 </div>

);
  

root.render(<CombinedComponent />);
```

### Component Reusability

#### `app.js`

```
import React from "react";

import ReactDOM from "react-dom/client";

  
const root = ReactDOM.createRoot(document.getElementById("root"));

  
const elem = "Made in plain JS";

  
const Heading = ({text, id}) =>{

    return (
		<h1 id={id}>

            {text}

        </h1>);

};


const ReusableComponent = () => (

    <div id = "parent">

        <div id = "child1">

            <Heading text="First nested h1 tag" id="firstHeading" />

            <Heading text="Second nested h1 tag" id="secondHeading" />

        </div>

        <div id = "child2">

            <Heading text="Third nested h1 tag" id="thirdHeading" />

            <Heading text="Fourth nested h1 tag" id="fourthHeading" />

        </div>      

        {elem}

    </div>

);


root.render(<ReusableComponent />);
```
