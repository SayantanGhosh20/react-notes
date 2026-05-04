
#### Class based component


```
import React from "react";

class Userclass extends React.Component{
    render(){
        return(
            <div className="user-card">
                <div className="user-name">{props.name}</div>
                <div className="user-email">{props.email}</div>
            </div>
        );
    }
}
```

- Here `React.Component` is a class present in the "react" package that we are importing here.
- Our class will inherit some properties from it.
- A functional component returns some `JSX`
- A class based component has a method called render that returns some `JSX`
- Importing and exporting are the same
- We still use the render method.

#### Passing parameters

```
<Userclass name={"Robert Smith"} email={"RobertSmith@gmail.com"} />
```

- To pass the parameter to the class we have to use the concepts of `constructor` and `super`.
- Thus the previous code becomes : 

```
import React from "react";

class Userclass extends React.Component{
   constructor(props){
	   super(props);
	   console.log(props);
   }



	render(){
        return(
            <div className="user-card">
                <div className="user-name">{this.props.name}</div>
                <div className="user-email">{this.props.email}</div>
            </div>
        );
    }
}
```

- De-structuring : 

```
import React from "react";

class Userclass extends React.Component{
   constructor(props){
	   super(props);
	   console.log(props);
   }



	render(){
		const {name, email} = this.props
		
        return(
            <div className="user-card">
                <div className="user-name">{name}</div>
                <div className="user-email">{email}</div>
            </div>
        );
    }
}
```


`useState`

```
import React from "react";
import {useState} from "react";

class Userclass extends React.Component{
   constructor(props){
	   super(props);
	   
	   this.state = {
		   count : 0,
		   count2 : 1,
	   }
	   
   }

	render(){
		const {name, email} = this.props
		
        return(
            <div className="user-card">
                <div className="user-count">{this.state.count}</div>
                <button onClick = {() => {
	                this.setState({
		                count : this.state.count + 1,
		                count2 : this.state.count2 + 1
	                })
                }}> 
	                Count Up 
				</button>
                <div className="user-name">{name}</div>
                <div className="user-email">{email}</div>
            </div>
        );
    }
}
```

- For class based components, a state is created whenever the instance of a class is created.
- `state` is a reserved word here
- Here 0 is the initial state for `count` and 1 is the initial state for `count2`
- Both count and count2 are individual state variables
- They are put inside `this.state` since that contains all our state variables.
- Never update state variables directory i.e. `this.state.count = this.state.count + 1` 
- `this.setState` is a function to update our states and it can be used anywhere inside the class.
- When we need to update multiple states under one actions, then we DO NOT create `this.state` repeatedly, instead we batch them together, the way we have done here.
- Whenever a class is initialized, first the `constructor` is called and then the `render` method is called
- We can replace `import React from "react"` TO `import {Component} from "react"`;
- Now we write `Component` instead of `React.Component`.
- If a class component is within another class component. Then first the constructor of the parent component is called, then the render function of the parent is called. Then the child's constructor is called and then the child's render method is called. 
- `componentDidMount()`
	- This is another method that we can use in the class based components in react
	- It is given to us by the `Component` class of React, that our component extends from.
	- First, the constructor is called, then the render method is called.
	- Once the component has been loaded onto the DOM, after that this `componentDidMount()` method is called.
- For a nested class based component the order is now, as follows : 
	- Parent constructor
	- Parent render()
	- Child constructor
	- Child render()
	- Parent
- This order is because, when the parent component is being rendered, React will see that there is a class based component inside the parent component. Thus it will then shift to the child component. Thus the parent components render will not be complete till all the child components inside it have been rendered.  Thus the child components constructor will then be called, the the child components render() method will be called. Now the child components rendering has been finished, so the child components `componentDidMount` will be called. Finally the parent component will finish rendering and then the parent components `componentDidMount()` method will be called.
- `componentDidMount()` is used for making API calls (we make API calls in functional components, using the `useEffect` hook)
- Suppose, we have a parent class component, inside which there are 2 child class components. The execution sequence will be as follows.
- React Lifecycle diagram (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- Sequence : 
	- Parent constructor
	- Parent render
	- Child1 constructor
	- Child2 constructor
	- Child1 render()
	- Child2 render()
	- Child1 `componentDidMount()`
	- Child2 `componentDidMount()`
	- Parent `componentDidMount()`
- Updating DOM is expensive, thus React batches up render and mounting.

- Dummy state variable

```
this.state = {
	userInfo : {
		name : "Dummy",
		location : "Default"
	}
}
```

- To make an API call

```
async componentDidMount(){
	const data = await fetch("API LINK");
	const json = await data.json();
	console.log(json);
	
	this.setState({
		userInfo : json
	});
}
```

- When the `setState()` method is called React triggers the render() once again (Constructor is not called after the initial time). The DOM is then updated.
- Now `componentDidUpdate()` will be called.

- Component unmounting : 
	- `componentWillUnmount()` : This function is called just before our component is removed from the page (for e.g. when we move to a different page)

- NEVER COMPARE THE LIFECYCLE OF CLASS BASED COMPONENTS WTH FUNCTIONAL COMPONENTS WITH REACT.

- `prevProps` and `prevState` in React.
- 

```
class Profile extends React.Component{
	constructor (props){
	}
	
	componentDidMount(){
		this.timer = setInterval{(=> {
				console.log("Hello");
			},1000);
		}
	}
	
	componentWillUnmount(){
		clearInterval(this.timer);
	}
}
```

- For functional components, if we use `setInterval` then also changing component will not stop the interval.
- We can return a function from `useEffect`

```
useEffect(() => {
	setInterval(() => {
		console.log("Hello World!");
	})
	
	return ()=>{
	}
})
```

- The `return()` function is called when we are unmounting it.
- Thus it will be triggered after we leave our page.