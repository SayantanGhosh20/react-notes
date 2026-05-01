
### Topics Covered

1. [ ] Introduction to React
2. [ ] Introducing react in our project
3. [ ] `React.createElement()`
4. [ ] `ReactDOM.createRoot()`
5. [ ] `render()`
6. [ ] Directory structure of a React project
7. [ ] Code

---
### Introduction to React

1. [ ] React is a **JavaScript** based library that was developed and is being maintained by **Facebook** (now **Meta**).
2. [ ] It is a bare bones library, but has a very rich ecosystem of official and third-party supporting libraries.
3. [ ] Even though we write our code using **React syntax** and **JSX**, the browser the code is run on can only understand plain JS (ECMA script). Thus the code we write is transpiled using **bundler packages** such as **Webpack**, **Parcel**, **Vite** etc.
4. [ ] Traditionally for a dynamic website, there are lots of DOM manipulation operations. These operations are some of the most costly actions in a website.
5. [ ] React improves these operations by using a **Virtual DOM (VDOM)** which is a lightweight JS representation of the actual DOM.
6. [ ] Just like in JS we can create DOM elements, in React, we create **react-elements (objects)** and **react-components (functions/classes)**.
7. [ ] When rendered, these **react-elements (objects)** and **react-components (functions/classes)** are converted to actual HTML elements (DOM nodes).

### Introducing react in our project

1. [ ] The simplest (but not recommended) way of brining react to our project is by **using Content Delivery Network (CDN) links**.
2. [ ] For this, we will need to use two CDN links, one for the **core react functionality** and the other for **Document Object Model (DOM) manipulation**.
3. [ ] Use the following links :
	1. [ ] For `React` : `https://unpkg.com/react@18/umd/react.development.js`
	2. [ ] For `ReactDOM` : `https://unpkg.com/react-dom@18/umd/react-dom.development.js`
4. [ ] In the code, they are used with the `React` and the `ReactDOM` keywords.

### `React.createElement()`

1. [ ] In JS, in order to create elements we use `document.createElement("h1")`
2. [ ] In React we replace the above with `React.createElement()`
3. [ ] However, `React.createElement()` does not create HTML elements, instead it creates an object, called a react-element.
4. [ ] **Syntax** : `React.createElement(Element, {Attributes}, Children)`
5. [ ] The method takes three arguments :
	1. [ ] `Element` : In this argument, we define the HTML element, that we wish to create, such as `"h1"`, `"div"`, `"span"` etc.
	2. [ ] `{Attributes}` : In this argument, we define the attributes that the element is to have, such as `id`, `class` etc.
	3. [ ] `Children` : In this argument, we define the elements content or its children element(s). If only one item is to be put then we can put it as is, however for multiple child items, we have to define them using an array i.e. within `[]`.

### `React.createRoot()`

1. [ ] `ReactDOM` is an object that we get from the `react-dom` package
2. [ ] `createRoot()` is a function that is used to define the container in which our react code will be rendered in.
3. [ ] The function takes one argument : 
	1. [ ] It is a HTML element that we wish to be the container for our react code. 
	2. [ ] This element should already be present in our HTML file
	3. [ ] The element typically has the `id="root"`, using which it is captured in our JS file. 
	4. [ ] The element is captured using the JS method, `document.getElementById();
4. [ ] Example : `React.createRoot(document.getElementById("root")`

### `render()`

1. [ ] In React, this method is used for rendering the react elements and react components that have been created in our code, on to the **actual DOM** on the browser.
2. [ ] **Syntax** : `rootContainer.render()`
3. [ ] Here the `rootContainer` **represents a variable** that will contain the result of `ReactDOM.createRoot()`.
4. [ ] The `render()` method renders the elements inside the `rootContainer`.
5. [ ] Rendering replaces any content present within the root container.

##### **Note** : 

1. [ ]  React does not affect any content present outside of the root container. Inside the root container the `render()` method does **NOT** append to the pre-existing content, instead it replaces any pre-existing content. To detect rendering issues, it is a standard practice to put the text of `Not rendered` inside the root element.

---

### Directory structure of a React project

#### Structure Diagram

```
src/
│
├── components/        # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│
├── pages/             # Route-level components
│   ├── Home.jsx
│   ├── Dashboard.jsx
│
├── layouts/           # Layout wrappers
│   ├── MainLayout.jsx
│
├── hooks/             # Custom hooks
│   ├── useAuth.js
│
├── services/          # API calls
│   ├── api.js
│
├── context/           # Global state
│   ├── AuthContext.js
│
├── utils/             # Helper functions
│
├── App.jsx            # Root component
└── main.jsx           # Entry point
```

#### Explanation of the directory structure

##### `src/`

1. [ ] This is the root directory for our react code
2. [ ] This is the source (root) directory for all the react code used in the application
3. [ ] It is composed of various directories, each containing code for distinct functionalities/responsibilities, thus creating separation of concerns. 

##### `components/`

1. [ ] This directory contains files, each of which represent a reusable component
2. [ ] These components contains, **small, reusable UI building blocks**, such as **Button**, **Card**, **Input**.
3. [ ] Key characteristics : 
	1. [ ] The code is focused on **presentation (UI)**
	2. [ ] The code has minimal or no business logic
	3. [ ] The code has **no routing logic**
	4. [ ] These components are designed for reuse across multiple pages
4. [ ] Naming convention :
	1. [ ] It is a convention for a file to match the name of the component present in it. So, for a component named `Button`, the conventional file name will be `Button.jsx`
	2. [ ] If a file contains multiple components and multiple component exports (named exports) then a meaningful name that groups them together is used.

`Example code for a Component`

```
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

`used like :` 

```
<button label="Submit" />
```

##### `pages/`

1. [ ] This directory contains route level components
2. [ ] The code in each file, represents **entire screens/pages** of the applications
3. [ ] Example : `Home.jsx`, `Dashboard.jsx`, `Settings.jsx`
4. [ ] Key characteristics : 
	1. [ ] The files are connected to routing
	2. [ ] Each file is composed of multiple components
	3. [ ] The code in the files may contain business logic and data fetching

`Example code for a page`

```
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Card />
    </>
  );
};
```

##### `layouts/`

1. [ ] The files in it define the **common (shared) structures/layout wrappers** used across pages
2. [ ] Example : Header, Navbar, Sidebar, Footer
3. [ ] The purpose of reusing these components are to avoid repetition and maintain consistent UI structures.

`Example code for a layout`

```
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
```

`Used like :` 

```
<MainLayout>  
	<Home />  
</MainLayout>
```

##### `hooks/`

1. [ ] The files in it contains code for custom hooks
2. [ ] These are **reusable logic extracted** from components
3. [ ] Key characteristics :
	1. [ ] **NO UI code (No JSX)**
	2. [ ] The code is used across multiple components
	3. [ ] They must follow the naming convention of using the word `use` in front of the hooks name such as `useSomething.js`, `useAuth.js`, `useFetch.js`.

`Example code for a hook`

```
const useAuth = () => {  
	const [user, setUser] = useState(null);  
	return { user };  
};
```

`Used like :` 

```
const { user } = useAuth();
```

##### `services/`

1. [ ] The code present under this directory handles **API and Backend Layer**
2. [ ] The code handles **all communication with backend services**
3. [ ] Responsibilities handled : 
	1. [ ] API calls (fetch/axios)
	2. [ ] Request/response handling
	3. [ ] Data transformation
4. [ ] Benefits
	1. [ ] Centralizes API logic
	2. [ ] Keeps components clean (Keeps API logic out of them)
	3. [ ] Easier to maintain and test

`Example code for a service`

```
export const fetchUsers = async () => {
  const res = await fetch("/api/users");
  return res.json();
};
```

##### `context/`

1. [ ] The code in this directory is used for **Global State Management**
2. [ ] The code is used to **share data across components without performing prop drilling**
3. [ ] Common use cases :
	1. [ ] Authentication state
	2. [ ] Theme settings
	3. [ ] User preferences

`Example code for a context`

```
const AuthContext = React.createContext();
```

##### `utils/`

1. [ ] The code in this directory represents utility functions
2. [ ] The utility functions are pure helper functions
3. [ ] Characteristics : 
	1. [ ] Contains no React Code
	2. [ ] Contains no UI elements
	3. [ ] The codes are reusable across the entire application
4. [ ] Example : `formatData()`, `calculateTotal()`, `validateEmail()`

`Example code for utils`

```
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};
```

##### `app.jsx/`

1. [ ] This file acts as the **main composition layer** of the application
2. [ ] It combines everything present in the other directories
3. [ ] Responsibilities : 
	1. [ ] Combines layouts and pages
	2. [ ] Defines routing logic and structure
	3. [ ] Initializes global providers (Context, etc.)

`Example code for App.jsx`

```
const App = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};
```

##### `main.jsx/`

1. [ ] This file is **the starting point** of our React application.
2. [ ] Responsibilities : 
	1. [ ] Connects React to the DOM
	2. [ ] Renders the root component (`App`)
3. [ ] Example : `ReactDOM.createRoot(document.getElementById("root")).render(<App />);`

`Example code for main.jsx`

```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

#### How Everything connects : 

`main.jsx → App.jsx → Layout → Page → Components → Hooks/Services`

#### Example flow : 

1. [ ] User visits `/dashboard`
2. [ ] `App.js` routes to `Dashboard.jsx`
3. [ ] Wrapped inside `MainLayout`
4. [ ] `Dashboiard` uses : 
	1. [ ] `Card` (component)
	2. [ ] `useAuth` (hook)
	3. [ ] `fetchUsers` (service)

#### Advantages of this structure 

- Clean separation
- Easy to scale
- Easy for collaborative work
- This structure separates **UI, logic, and data**, making your app scalable and maintainable

#### Note : 

1. [ ] React files can use either the `.js` or `.jsx` extension. The extension does not affect our codes functionality since modern bundlers can handle both. `.jsx` is often used to indicate that **JSX** is being used. `.js` extension is also preferred for many projects for consistency.


---

### Code

#### Basic `Hello World!` message

##### `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Revision</title>
</head>
<body>

    <div id="root">
        <h1>Hello World!</h1>
    </div>
</body>
</html>
```

`Explanation :`
- This is a simple HTML file with no JS.
- It uses a `<h1></h1>` element to display the message `Hello World!`

#### Creating element using JavaScript

##### `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Revision</title>
</head>
<body>
    <div id="root"></div>
    
    <script>
        const root = document.getElementById("root");

        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World!";

        root.appendChild(heading);
    </script>
</body>
</html>
```

`Explanation :`
- This is a simple HTML file with a script tag in it contains JS code
- The JS code :
	- Captures the `<div id="root"></div>` element
	- Creates a "h1" element
	- Puts the text "Hello World!" in the created element
	- The "h1" tag is then appended to the `<div id="root"></div>` element

#### Importing React using CDN links

##### `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Revision</title>
</head>

<body>
    <div id="root"></div>
    
    
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World!";

        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>
</body>
</html>
```

`Explanation :`
- This code has 3 script tags
- The first link imports `React`
- The second link imports `ReactDOM`
- The third and last script tag is the same as the previous files

#### Rendering react-elements

##### `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Revision</title>
</head>

<body>
    <div id="root">Not Rendered</div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  
    <script>
        const heading = React.createElement("h1", {}, "Hello World from React!");

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);

    </script>
</body>
</html>
```

`Explanation :`
- This code has 3 script tags
- The first script link imports the `React`
- The second script link imports the `ReactDOM`
- The third and last script tag has React code in it : 
	- First we create a "h1" tag
	- Then we define the root for our react code
	- Then we render the react element

#### Moving React Code to a separate file called `app.js`

##### `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Revision</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div id="root">Not Rendered</div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./app.js"></script>
</body>
</html>
```

##### `style.css`

```
#heading{
    color: red;
}
```

##### `app.js`

```
<script>
        const heading = React.createElement(
	        "h1", 
	        {id : "heading"}, 
	        "Hello World from React!"
		);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
```

`Explanation :`
- Functionally it is the same as previous code
- Here we have passed and ID attribute of "heading" to the "h1" tag we created
- The text for the "h1" tag has been changed to "Hello World from React!"

#### Nested HTML Structure in React

##### Target structure

```
<div id="parent">
	<div id="child">
		<h1 id="nestedHeading">Nested h1 tag</h1>
	</div>
</div>
```

##### `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Revision</title>    
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div id="root">Not Rendered</div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./app.js"></script>
</body>
</html>
```

##### `style.css`

```
#heading{
    color: red;
}
```

##### `app.js`

```
const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        React.createElement(
            "h1",
            {id : "nestedHeading"},
            "Nested h1 tag"
        )
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// render converts react elements (objects) to the required tags and attributes

root.render(parent);
```

`Explanation :`
- `React.createElement()` creates a react-element
- Here we are passing it as the child argument
- Thus, when the code is executed :
	- The inner most `React.createElement()` is resolved first creating `<h1 id="nestedHeading>Nested h1 tag</h1>`
	- Then the next upper level `React.createElement()` is resolved creating `<div id="child"><div>`
	- Then the top `React.createElement()` is resolved creating `<div id="parent"><div>`

#### Created sibling elements using `[ ]`

##### Target structure

```
<div id="parent">
	<div id="child1">
		<h1 id="firstHeading">Nested h1 tag</h1>
		<h1 id="secondHeading">Nested h1 tag</h1>
	</div>
	<div id="child2">
		<h1 id="thirdHeading">Nested h1 tag</h1>
		<h1 id="fourthHeading">Nested h1 tag</h1>
	</div>
</div>
```

##### `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React-Revision</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div id="root">Not Rendered</div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./app.js"></script>
</body>
</html>
```

##### `style.css`

```
#heading{
    color: red;
}
```

##### `app.js`

```
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
```

`Explanation :`
- This code is similar to the previous code with some changes
- In this code, we pass an array of `React.createElement()` methods as the child argument
- This enables, us to create sibling elements.