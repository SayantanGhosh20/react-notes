
### Overall

1. [ ] React is a JavaScript Library developed by Facebook (no Meta)
2. [ ] It is bare-bones library but has a very rich ecosystem of official and third party libraries
3. [ ] The React code we write is converted to JS at the end using transpilation.
4. [ ] DOM manipulation is the most costly operation in a website. React improves these operations by using Virtual DOM (VDOM)
5. [ ] In React we create react-elements (objects) and react-components (functions)
6. [ ] When rendered these react-elements and react-components are converted to HTML
7. [ ] In this lesson we are **using Content Delivery Network (CDN) links** to bring React into our project.
8. [ ] We will need to use two CDN links , one for the core react functionality and the other for Document Object Model (DOM) manipulation. 
9. [ ] In code, they are used with the `React` and `ReactDOM` keywords
10. [ ] This lesson covers the following React methods : 
	1. [ ] `React.createElement()`
	2. [ ] `ReactDOM.createRoot()`
	3. [ ] `render()`

#### `React.createElement()`

1. [ ] In React, this is used in place of `document.createElement("h1")`
2. [ ] However, `React.createElement()` does not create html elements, instead it creates an object called a react-element. 
3. [ ] The syntax is as follows : `React.createElement(Element, {Attributes}, Children);`
4. [ ] This method takes three parameters : 
	1. [ ] `Element` : In this parameter we define the element that is to be created, such as `"h1"`, `"span"` etc.
	2. [ ] `Attributes` : In this parameter we define the attributes of the element such as `id`, `class` etc.
	3. [ ] `Children` : In this parameter, we define the elements content or its children element(s). If only one item is to be put then we can put it as is, however for multiple items we have to define them using an array i.e. within `[]`

#### `ReactDOM.createRoot()`

1. [ ] `ReactDOM` is used for DOM manipulation
2. [ ] In React, the `createRoot()` function is used to define the container (HTML element) within which our react elements and components will be rendered, 
3. [ ] It takes a single parameter which is the element that we wish to be the container for our React code.

#### `render()`

1. [ ] In React, this method is used for rendering the react elements and react components that we created in our code, on to the DOM.
2. [ ] The rendering is done inside the root container that we created using ` ReactDOM.createRoot()`.
3. [ ] Rendering replaces any content present within the root container.

**NOTE :** The `render()` method does NOT append to the existing content in the container. However anything outside of the container stays unaffected. To detect rendering issues, it is a standard practice to put the text of `Not rendered` inside the root element.

----

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

        const heading = document.createElement("h1");

        heading.innerHTML = "Hello World!";

  

        const root = document.getElementById("root");

        root.appendChild(heading);

    </script>

</body>

</html>
```

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

---
---
