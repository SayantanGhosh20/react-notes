
1. [ ] React is a JavaScript library
2. [ ] The react code we write is converted to JS at the end
3. [ ] DOM manipulation is the most costly operation in a website.
4. [ ] In React we create react-components which are objects.
5. [ ] When rendered these react-components (objects) are converted to HTML.
6. [ ] In this lesson we are using CDN links to bring React into our project.
7. [ ] Two CDN links are being used, one for the core react functionality and the other for DOM manipulation. In code they are written accordingly as React and ReactDOM
8. [ ] In this lesson we are covering the following React methods :
	1. [ ] `React.createElement()`
	2. [ ] `ReactDOM.createRoot()`
	3. [ ] `render()`
9. [ ] `React.createElement()`
	1. [ ] It performs the same function as `document.createElement()`
	2. [ ] However instead of creating an element, it creates a react-components i.e. an object
	3. [ ] This method takes three parameter:
		1. [ ] The element to be created
		2. [ ] The attributes of the element
		3. [ ] The content of the element i.e. text or other element(s)
	4. [ ] In the third parameter we can put text or other elements. 
	5. [ ] We can put in one element by again writing `React.createElement()` as the parameters value or we can use `[]` to create and array and put multiple `React.createElement()` inside the array. This enables us to create nested elements and sibling elements inside an element.
----
#### HTML Template with `Hello World!` message

```
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>

<body>

    <div class="root">

        <h1>Hello world!</h1>

    </div>

</body>

</html>
```

#### Creating `<h1>Hello World</u>` using JavaScript

```
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

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

#### Importing React into our project using CDN links : 

```
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>

<body>

    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

</body>

</html>
```

#### Render `<h1>Hello World From React</u>` using React

```
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

</head>

<body>

    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  

    <script>

        const heading = React.createElement("h1", {}, "Hello World From React!");

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

    <title>Document</title>

</head>

<body>

    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  

    <script src="./app.js"></script>

</body>

</html>
```

##### app.js

```
const heading = React.createElement("h1", {}, "Hello World From React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

  

root.render(heading);
```


#### React with CSS - understanding react elements, props and render method

##### `index.html`

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

    <div id="root"></div>

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
// Creating a react element : an object

// The second and third parameter are designated as the props i.e. the attributes and the children/content

const heading = React.createElement(

    "h1",

    {id : "heading"},

    "Hello World From React!"

);

const root = ReactDOM.createRoot(document.getElementById("root"));

  

// render converts react elements (objects) to the required tags and attributes

root.render(heading);
```

#### Nested HTML Structure in React 

##### Target structure

```
<div>
	<div>
		<h1>Nested h1 tag</h1>
	</div>
</div>
```

##### app.js

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

#### Creating Sibling elements using `[ ]`

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