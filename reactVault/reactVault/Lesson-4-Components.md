### Overall

1. [ ] Components are independent, reusable pieces of code that serve as the building blocks in React.
2. [ ] There can be two types of components : 
	1. [ ]  Class based components : 
		1. [ ] It is the legacy method of creating components using classes.
		2. [ ] These may be found in legacy projects, or projects that are still transitioning.
	2. [ ] Functional components : 
		1. [ ] It is the modern way of defining components using functions.
		2. [ ] These are found in modern React projects.

### Class Components (Legacy method)

1. [ ] This is the legacy method of creating components using the concept of `class`.
2. [ ] This is used in old code bases and might be found is some enterprise applications that are still migrating.

```
class Card extends React.Component{
	render(){
		return <h1>{this.props.title}</h1>
	}
}
```

### Functional react components

1. [ ] These are react components that are created using functions.
2. [ ] They return JSX code.
3. [ ] Since in a react script we can use JS, JSX and pure react, thus for a function to be recognized as a React component and not just a function, its name must start with an uppercase letter.
4. [ ] The functional components can accept arguments because of which we can call a component again and again with different data and thus create different UI components with the same structure.
5. [ ] For Functional React components : 
	1. [ ] It returns a **tree of react elements and components** which react converts to real DOM nodes.
	2. [ ] The tree can have only a single parent element
	3. [ ] To avoid having a parent element per component we can use React fragments i.e. `<> </>`. This will make our code cleaner.

#### Returning the following is allowed (single parent) : 

```
return( 
	<div className="parent"> 
		<div className="userName">{props.name}</div> 
	</div> 	
)
```

#### Returning the following is **NOT ALLOWED** (Sibling elements on the top level)

```
return( 
	<div className="">{props.name}</div> 
	<div className="">{props.name}</div> 
)
```

#### Using React fragments

```
return( 
	<>
		<div className="">{props.name}</div> 
		<div className="">{props.name}</div> 
	</>
)
```

### Props : Sending data INTO components

1. [ ] It stands for properties
2. [ ] These refer to arguments that we can dynamically pass to a component
3. [ ] They are read only inputs passed from parent (caller) to child (component)
4. [ ] These properties are sent as an object as `key:value` pairs
5. [ ] They are immutable in nature
6. [ ] Top → Down flow
7. [ ] We can pass any number of props we wish to.
8. [ ] We can also do de-structuring of the props, so instead of writing `(props)` we can do `({name})`

```
const Card = ({ title }) => <h1>{title}</h1>;

<Card title="Hello World" />
```

```
const ButtonComponent = ({label}) => {
	return <button>{label}</button>
}

<ButtonComponent label = "Sign Up" />
```

Under to hood the function above becomes 

```
React.createElement("h1", {}, title);

React.createElement("button", {}, label);
```

**Note :** Here, `title` and `label` are variables

### Components Composition:

1. [ ] It is the concept of arranging our components to create UI elements and/or complete UI.
2. [ ] Since each piece of code is independent and reusable thus making each of them maintainable.

```
const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
};
```

### Config/Data driven UI 

1. [ ] This refers to the concept of modifying the UI based on the data that our front-end receives from the backend and any other APIs that it might be using.
2. [ ] This is prominent in applications that have region specific components / component properties.

### Passing data to components

#### Pre-requisites : 

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

    <div id="root">
        <h1>Not Rendered</h1>
    </div>

    <script type="module" src="./app.js"></script>

</body>
</html>
```

##### `app.js` 

**Note :** This is the barebones JS script, specified here to avoid repetition throughout the note. All the sub components must be appropriately placed within this code, in order to get a complete and functional code.

```
import React from "react";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Put the supporting variables and data here



// Put the components

  

// Component Composition

  

const ComponentAssembler = () =>{
    return (
        <>
            {/* Put your component caller code here */}
        </>
    )
}

root.render(<ComponentAssembler />);
```

#### Calling Functions : Methods of sending data

##### Method 1 : Hardcoding 

1. [ ] In this method the data is hardcoded and sent
2. [ ] The data is sent as `key:value` pairs, since the target component receives them as an object.

`Props Structure`

```
props = {
    name : "...",
    age : "...",
    gender : "..."
}
```

`app.js` - Target Component

```
const CardComponent = (props) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.name}</div>
            <div className="cardParameter">{props.age}</div>
            <div className="cardParameter">{props.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
 <CardComponent  name = "Christopher Hainz" age =  {22} gender = "Male" />
```

##### Method 2 : Dynamic data

1. [ ] In this method the data is present in an external variable as an object.
2. [ ] The data is sent as `key:value` pairs, since the target component receives them as an object.

`Props Structure`

```
props = {
    name : "...",
    age : "...",
    gender : "..."
}
```

`app.js` - Variables

```
const val = {
    name : "Christopher Hainz",
    age : 22,
    gender : "Male"
};
```

`app.js` - Target Component

```
const CardComponent = (props) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.name}</div>
            <div className="cardParameter">{props.age}</div>
            <div className="cardParameter">{props.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
<CardComponent  name = {val.name} age =  {val.age} gender = {val.gender} />
```

##### Method 3 : Sending the whole object

1. [ ] In this method, instead of sending individual data parameters, we pass the object as a whole.
2. [ ] The data is sent as `key:value` pairs, since the target component receives them as an object.

`Props Structure`

```
props = {
    name : "...",
    age : "...",
    gender : "..."
}
```

`app.js` - Variables

```
const val = {
    name : "Christopher Hainz",
    age : 22,
    gender : "Male"
};
```

`app.js` - Target Component

```
const CardComponent = (props) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.name}</div>
            <div className="cardParameter">{props.age}</div>
            <div className="cardParameter">{props.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
<CardComponent {...val} />
```

##### Method 4 : Encapsulation

1. [ ] In this method, the object is encapsulation and then sent as a single object
2. [ ] The data is sent as `key:value` pairs, since the target component receives them as an object.

`Props Structure`

```
props = {
  data: {
    name: "...",
    age: "...",
    gender : "..."
  }
}
```

`app.js` - Variables

```
const val = {
    name : "Christopher Hainz",
    age : 22,
    gender : "Male"
};
```

`app.js` - Target Components

```
const CardComponent = (props) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.data.name}</div>
            <div className="cardParameter">{props.data.age}</div>
            <div className="cardParameter">{props.data.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
<CardComponent data={val} />
```

##### Method 5 : Data Transformation During Component Call

1. [ ] In this method, data from the object is transformed before sending to the target function.
2. [ ] If the variable in which the transformation takes place has the same name as the original parameter then it will override the data in that parameter. In this the original number of parameters remain the same.
3. [ ] If the variable in which the transformation takes place has a different name than the original parameter it is transforming then it will get appended to the original object (inside the call). In this the original number of parameter changes.

`Props Structure`

```
props = {
  data: {
    name: "...",
    age: "...",
    gender : "...",
    salutation : "..."
  }
}
```

`app.js` - Variables

```
const val = {
    name : "Christopher Hainz",
    age : 22,
    gender : "Male"
};
```

`app.js` - Target Component

```
const CardComponent = (props) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.salutation}</div>
            <div className="cardParameter">{props.name}</div>
            <div className="cardParameter">{props.age}</div>
            <div className="cardParameter">{props.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
<CardComponent
	{...val}
	salutation = {`Mr. ${val.name}`}
	age = {`${val.age} years`}
/>
```


##### Method 6 : External Data Transformation

1. [ ] In this method, the object containing the data is transformed outside of the component call. The transformed object is then used in the component call.


`Props Structure`

```
props = {
  data: {
    name: "...",
    age: "...",
    gender : "...",
    salutation : "..."
  }
}
```

`app.js` - Variable

```
const val = {
    name : "Christopher Hainz",
    age : 22,
    gender : "Male"
};

const formattedObj = {
    ...val,
    salutation : `Mr. ${val.name}`,
    age : `${val.age} years`
};
```

`app.js` - Target Component

```
const CardComponent = (props) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.salutation}</div>
            <div className="cardParameter">{props.name}</div>
            <div className="cardParameter">{props.age}</div>
            <div className="cardParameter">{props.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
<CardComponent {...formattedObj} />
```

##### Method 6 : Sending multiple objects

1. [ ] In this method we pass multiple objects when calling the target component
2. [ ] Among the ones passed, if multiple objects contain the same parameter then the parameter in the former object is overwritten by the later object.

`Props Structure`

```
props = {
    name: "...",
    age: "...",
	gender : "..."
}
```

`app.js` - Variables

```
const val1 = {
    name : "Christopher Hainz",
    age : 23,
    gender : "Male"
};

const val2 = {
    name : "Robert Cole",
    age : 26,
    gender : "Male"
};
```

`app.js` - Target Component

```
const CardComponent = (props) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.name}</div>
            <div className="cardParameter">{props.age}</div>
            <div className="cardParameter">{props.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
 <CardComponent {...val1} {...val2} />
```

`Additional notes`

```
Inside the system React does the following : 
{
	...val1,
	...val2
}
```

##### Method 7 : Sending multiple objects as a single encapsulation

1. [ ] In this method, multiple objects are sent as a single object prop using encapsulation
2. [ ] Even if the encapsulated objects have the same parameters, they are not merged

`Props Structure`

```
props = {
	data : {
		val1 : {
			name: "...",
			age: "...",
			gender : "..."
		}
		val2 : {
			name: "...",
		    age: "...",
			gender : "..."
		}
	}
}
```

`app.js` - Variables

```
props = {
	const val1 {
	    name : "Christopher Hainz",
	    age : 23,
	    gender : "Male"
	};
	const val2 {
	    name : "Robert Cole",
	    age : 26,
	    gender : "Male"
	};
}
```

`app.js` - Target Component 

```
const CardComponent = (props) =>{

    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.data.val1.name}</div>
            <div className="cardParameter">{props.data.val1.age}</div>
            <div className="cardParameter">{props.data.val1.gender}</div>
            
            <div className="cardParameter">{props.data.val2.name}</div>
            <div className="cardParameter">{props.data.val2.age}</div>
            <div className="cardParameter">{props.data.val2.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
<CardComponent data = {{val1, val2}} />
```

##### Method 8 : Sending multiple objects with separate encapsulations

1. [ ] In this each prop is encapsulated separately

`Props Structure`

```
props = {
	const data1 {
	    name : "Christopher Hainz",
	    age : 23,
	    gender : "Male"
	};
	const data2 {
	    name : "Robert Cole",
	    age : 26,
	    gender : "Male"
	};
}
```

`app.js` - Variables

```
const val1 = {
    name : "Christopher Hainz",
    age : 23,
    gender : "Male"
};

const val2 = {
    name : "Robert Cole",
    age : 28,
    gender : "Male"
};
```

`app.js` - Target Component

```
const CardComponent = (props) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.data1.name}</div>
            <div className="cardParameter">{props.data1.age}</div>
            <div className="cardParameter">{props.data1.gender}</div>
            <div className="cardParameter">{props.data2.name}</div>
            <div className="cardParameter">{props.data2.age}</div>
            <div className="cardParameter">{props.data2.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
<CardComponent data1={val} data2={val} />
```

##### Method 9 : Hybrid of encapsulation and non-encapsulation

1. [ ] In this method we push some objects as is while the others are encapsulated

`Props Structure`

```
props = {
	name : "...",
	age : "...",
	gender : "...",
	data : {
		name : "...",
		age : "...",
		gender : "..."
	}
}
```

`app.js` - Variables

```
const val1 = {
    name : "Christopher Hainz",
    age : 23,
    gender : "Male"
};

const val2 = {
    name : "Robert Cole",
    age : 28,
    gender : "Male"
};
```

`app.js` - Target Variables

```
const CardComponent = (props) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.name}</div>
            <div className="cardParameter">{props.age}</div>
            <div className="cardParameter">{props.gender}</div>

            <div className="cardParameter">{props.data.name}</div>
            <div className="cardParameter">{props.data.age}</div>
            <div className="cardParameter">{props.data.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
<CardComponent {...val1} data = {val2}/>
```

##### Method 10 : De-structuring arguments

1. [ ] De-structuring is the process of separating the parameters received by a component.

`Props Structure`

```
{
	name : "...",
	age : "..."
}
```

`app.js` - Variables

```
const val1 = {
    name : "Christopher Hainz",
    age : 23,
    gender : "Male"
};

const val2 = {
    name : "Robert Cole",
    age : 28,
    gender : "Male"
};
```

`app.js` - Target Component

```
const CardComponent = ({name, age, gender, data}) =>{
    return(
        <div className="cardWrapper">
            <div className="cardParameter">{props.name}</div>
            <div className="cardParameter">{props.age}</div>
            <div className="cardParameter">{props.gender}</div>
            
            <div className="cardParameter">{data.name}</div>
            <div className="cardParameter">{data.age}</div>
            <div className="cardParameter">{data.gender}</div>
        </div>
    );
};
```

`app.js` - Calling Component

```
<CardComponent {...val1} data = {val2}/>
```

##### Method 11 : Conditional arguments and Default parameter values

1. [ ] We can set conditions that when satisfied will forward the data objects to the target component.
2. [ ] If a component does not receive data appropriately then we can setup default values that the component can fallback on.

`Props Structure`

```
props = {
    name : "...",
    age : "...",
    gender : "..."
}
```

`app.js` - Variables

```
const flag = true;

const val = {
    name : "Christopher Hainz",
    age : 23,
    gender : "Male"
};
```

`app.js` - Target Component

```
const CardComponent = ({name = "Richard Kross", age = 58, gender = "Male"}) => {
  return (
    <div className="cardWrapper">
      <div className="cardParameter">{name}</div>
      <div className="cardParameter">{age}</div>
      <div className="cardParameter">{gender}</div>
    </div>
  );
};
```

`app.js` - Calling Component

```
<CardComponent {...(flag && val)} />
```

##### Method 12 : Centralizing default parameter values

`Props Structure`

```
props = {
    name : "...",
    age : "...",
    gender : "..."
}
```

`app.js` - Variables

```
const flag = true;

const val = {
    name : "Christopher Hainz",
    age : 23,
    gender : "Male"
};

const defaultValues = {  
name: "Richard Kross",  
age: 58,  
gender: "Male"  
};
```

`app.js` - Target Component

```
const CardComponent = (props) => {
  const { name, age, gender } = { ...defaultUser, ...props };

  return (
    <div className="cardWrapper">
      <div>{name}</div>
      <div>{age}</div>
      <div>{gender}</div>
    </div>
  );
};
```

`app.js` - Calling Component

```
<CardComponent />
```

`Additional Notes :`

```
We can replace, const { name, age, gender } = { ...defaultUser, ...props };
With, const componentProps = { ...defaultUser, ...props};

In both the aboce cases, the result is defaultUser + props. The common parameters present in both are overwritten by props resulting in only the absent parameters to have the default values.

In the first case we can user the parameters name, age, gender directly.
In the second case we have to use componentProps.name, componentProps.age, componentProps.gender
```

##### Method 13 : Special React prop `children`

1. [ ] `children` is a special React prop
2. [ ] It represents the content that is present between the starting and ending tags of a component i.e. `<Component> </Component>`
3. [ ] Props work when structure is fixed, but when we wish to use not only dynamic data but also dynamic structure 

`Output structure`

```
<div>
	<h1>Hello World!</h1>
</div>
```

`app.js` - Target Component

```
const Card = ({ children }) => {
  return <div>{children}</div>;
};
```

`app.js` - Calling Component

```
const ComponentAssembler = () =>{
    return (
        <>
            <Card>
                <h1>Hello</h1>
             </Card>
        </>
    )
}
```

##### Method 14 : Combining all the features so far

1. [ ] Here we are using JSX 
2. [ ] We are using functional components and their displaying their reusability
3. [ ] We are covering the `children` prop
4. [ ] We are covering the default values concept
5. [ ] Here :
	1. [ ] We have created 2 structure variables 
	2. [ ] When we write `{children({ name, age, gender })}`, React performs `structure1({ name, age, gender })` or `structure1({ name, age, gender })`

`Output structure`

```
<div className="cardWrapper"> 
	<div className="detail">name</div> 
	<div className="detail">age</div> 
	<div className="detail">gender</div> 
</div>

<div className="cardWrapper"> 
	<div className="detailWrapper> 
		<div className="detail">name</div> 
	</div> 
	<div className="detailWrapper> 
		<div className="detail">age</div> 
	</div> 
	<div className="detailWrapper> 
		<div className="detail">gender</div> 
	</div> 
</div>
```

`app.js` - Variables

```
const flag = true;

const val = {
    name : "Christopher Hainz",
    age : 23,
    gender : "Male"
};

const structure1 = ({ name, age, gender }) => (  
	<>  
		<div className="detail">{name}</div>  
		<div className="detail">{age}</div>  
		<div className="detail">{gender}</div>  
	</>  
);  
  
const structure2 = ({ name, age, gender }) => (  
	<>  
		<div className="detailWrapper">  
			<div className="detail">{name}</div>  
		</div>  
		<div className="detailWrapper">  
			<div className="detail">{age}</div>  
		</div>  
		<div className="detailWrapper">  
			<div className="detail">{gender}</div>  
		</div>  
	</>  
);
```

`app.js` - Target Component

```
const Card = ({name = "Richard Kross", age = 58,gender = "Male", children}) => {  
	return (  
		<div className="cardWrapper">  
			{children({ name, age, gender })}  
		</div>  
	);  
};
```

`app.js` - Calling Component

```
const ComponentAssembler = () => {
	return(
		<>
			{/* Structure 1 */}
			<Card {..val}>
				{structure1}
			</Card>
			
			{/* Structure 2 */}
			<Card {...user}>
				{structure2}
			</Card>
			
			{/* Dynamic selection based on flag variable */}
			<Card {...user}>
				{flag? structure1 : structure2}
			</Card>
			
			{/* No props → fallback values */}  
			<Card>  
				{structure1}  
			</Card>
		</>
	)
)
```

##### Method 15 : Using Loops

`app.js` - Variables

```
const dataObj = [
    {
        id : 1,
        name : "Christopher Hainz",
        age : 24,
        gender : "Male"
    },
    {  
        id : 2,
        name : "Robert macy",
        age : 26,
        gender : "Male"
    },
    {
        id : 3,
        name : "Darcy Green",
        age : 23,
        gender : "Female"
    },
    {
        id : 4,
        name : "Victoria Sanchez",
        age : 25,
        gender : "Female"
    },
    {
        id : 5,
        name : "Christine Williams",
        age : 28,
        gender : "Feale"
    }
];
```

`app.js` - Target Component

```
const CardComponent = (props) =>{
    const {data} = props;
    const {id, name, age, gender} = data;
    return (
    <div className="cardWrapper">
      <div className="cardParameter">{name}</div>
      <div className="cardParameter">{age}</div>
      <div className="cardParameter">{gender}</div>
    </div>
  );
};
```

`app.js` - Calling Component 

```
const ComponentAssembler = () =>{
    return(
        <>
            {
            dataObj.map(profile => <CardComponent key={profile.id} data={profile} />)
            }
        </>
    )
};
```

`Additional Notes`

1. [ ] React keeps track of all the rendered components using they `key` property which is a reserved word.
2. [ ] Using key, react avoids re-rendering all the components and re-renders only the necessary ones.
3. [ ] React officially says that we should NOT use indexes for keys and calls it a anti-pattern and thus a BAD practice.


---
#### Note :

1. [ ] `<Card {...val} />` creates new object reference every render. This affects : 
	1. [ ] `React.memo`
	2. [ ] `useEffect` dependencies

```
import React from "react";

import ReactDOM from "react-dom/client";

  

const root = ReactDOM.createRoot(document.getElementById("root"));

  


  



  



  

root.render(<ComponentAssembler />);
```