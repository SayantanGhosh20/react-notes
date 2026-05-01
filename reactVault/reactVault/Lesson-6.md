1. [ ] Starting a project
	1. [ ] `npm start`
	2. [ ] `npx run index.html`
2. [ ] Monolith vs Microservice Architecture
	1. [ ] Separation of concerns
	2. [ ] Single responsibility principle
	3. [ ] All the microservices talk to each other
	4. [ ] Each microservice can use different languages as they are independent
	5. [ ] Each microservice runs on their own separate port
3. [ ] There are two ways of fetching data
	1. [ ] Method 1 :
		1. [ ] App/page loads
		2. [ ] We make the API call
		3. [ ] The API sends the data
		4. [ ] UI is rendered
	2. [ ] Method 2
		1. [ ] Page loads
		2. [ ] UI is rendered
		3. [ ] API call is made
		4. [ ] API sends the data
		5. [ ] UI is rendered
4. [ ] Method 2 gives us a better UX since the UI does not wait for the API call and any latency because of it. 

##### `useEffect` hook

1. [ ] `useEffect` hook is used in a component
2. [ ] The component renders first and then the `useEffect` function is run
3. [ ] So any code that we wish to run after the UI is rendered is put inside the `useEffect`.
4. [ ] Syntax :
	1. [ ] `useEffect(()=>{callbackFunction}, [dependencies]);`

##### Shimmer UI

1. [ ] It resembles the pages actual user so that the user understands how the UI looks


#### Code 

`index.html`

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

    <div id="root">

        <h1>Not Rendered</h1>

    </div>

  

    <script type="module" src="./src/app.js"></script>

</body>

</html>
```

`style.css`

```
*{

    margin: 0;

    padding: 0;

    box-sizing: border-box;

}

  

body{

    width: 100vw;

    height: 100vh;

    background-color: red;

}

  

#root{

    width: 100%;

    height: 100%;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    align-items: center;

    background-color: orange;

}

  

.header{

    width: 100%;

    height: 10%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 0px 20px;

    background-color: limegreen;

}

  

.logoContainer{

    height: 100%;

    padding: 10px 0px;

  

}

.logo{

    height: 100%;

}

.nav-items{

    width: 25%;

    padding: 10px 0px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    background-color: palegreen;

}

  

.nav-items ul{

    width: 100%;

    display: flex;

    justify-content: space-between;

    align-items: center;

}

.nav-items ul li {

    list-style: none;

    font-size: 18px;

}

  

.main{

    width: 100%;

    height: 80%;

    display: flex;

    flex-direction: column;

    justify-content: space-evenly;

    align-items: center;

    background-color: green;

}

.filter{

    width: 100%;

    height: 10%;

    display: flex;

    background-color: orange;

}

.profileContainer{

    width: 100%;

    height: 90%;

    display: flex;

    flex-wrap: wrap;

    justify-content: space-evenly;

    align-items: center;

    background-color: red;

}

.cardWrapper{

    width: 200px;

    height: 350px;

    background-color: grey;

    color: yellow;

}

  

.footer{

    width: 100%;

    height: 10%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 0px 20px;

    background-color: limegreen;

}

.shimmer-container{

    width: 100%;

    height: 90%;

    display: flex;

    flex-wrap: wrap;

    justify-content: space-evenly;

    align-items: center;

    background-color: red;

}

.shimmer-card{

    width: 200px;

    height: 350px;

    background-color: gray;

}
```

`./src/app.js`

```
import React from "react";

import ReactDOM from "react-dom/client";

import AppComponent from "./components/AppComponent";

  

const root = ReactDOM.createRoot(document.getElementById("root"));

  

root.render(<AppComponent />);
```

`./src/components/AppComponent.js`

```
// Importing sub-components

import Header from "./Header";

import Main from "./Main";

import Footer from "./Footer";

  

const AppComponent = () =>{

    return(

        <>

            <Header />

            <Main />

            <Footer />

        </>

    )

}

export default AppComponent;
```

`./src/components/Header.js`

```
const Header = () => {

    return(

        <div className = "header">

            <div className = "logoContainer">

                <img className="logo" src = "url" />

            </div>

            <div className="nav-items">

                <ul>

                    <li>Home</li>

                    <li>About Us</li>

                    <li>Contact Us</li>

                    <li>Cart</li>

                </ul>

            </div>

        </div>

    )

}

  

export default Header;
```

`./src/components/Main.js`

```
// Importing Hooks

import { useState, useEffect } from "react";

// Importing sub-components

import CardComponent from "./CardComponent";

import Shimmer from "./Shimmer";

// Importing data

import dataObj from "../utils/mockData";

  
  
  

const testData = dataObj;

const newDataObj = [

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

]

  
  

const Main = () =>{

  

    const [profileList, setProfileList] = useState(dataObj);

    const filterObj = () => {

        const filteredObj = profileList.filter(

            (res) => res.age > 26

        );

        console.log(filteredObj);

        setProfileList (filteredObj);

    }

  

    const fetchData = async () => {      

        setTimeout(() => {

            console.log(newDataObj);

            setProfileList(newDataObj);

        }, 2000);

    }

  

    useEffect(()=>{fetchData()}, []);

  

    if(profileList.length == 0){

        return <Shimmer />

    }

  

    return(

        <div className="main">

            <div className="filter">

                <button className="filter-btn" onClick={()=>filterObj()}>

                    Filter Data

                </button>

            </div>

  

            <div className="profileContainer">

                {

                    profileList.map(profile => <CardComponent key={profile.id} data={profile} />)

                }

            </div>

        </div>

    );

}

  

export default Main;
```

`./src/components/Footer.js`

```
const Footer = () =>{

    return(

        <div className="footer">

  

        </div>

    )

}

  

export default Footer;
```

`./src/components/CardComponent.js`

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

  

export default CardComponent;
```

`./src/components/Shimmer.js`

```
const Shimmer = () => {

    return (

        <div className="shimmer-container">

            <div className="shimmer-card">Cards</div>

            <div className="shimmer-card">Cards</div>

            <div className="shimmer-card">Cards</div>

        </div>

    )

}

  

export default Shimmer;
```

`./src/utils/mockData.js`

```
const dataObj = [

    // {

    //     id : 1,

    //     name : "Christopher Hainz",

    //     age : 24,

    //     gender : "Male"

    // },

    // {  

    //     id : 2,

    //     name : "Robert macy",

    //     age : 26,

    //     gender : "Male"

    // },

    // {

    //     id : 3,

    //     name : "Darcy Green",

    //     age : 23,

    //     gender : "Female"

    // },

    // {

    //     id : 4,

    //     name : "Victoria Sanchez",

    //     age : 25,

    //     gender : "Female"

    // },

    // {

    //     id : 5,

    //     name : "Christine Williams",

    //     age : 28,

    //     gender : "Feale"

    // }

];

  

export default dataObj;
```



- This is conditional rendering
	- under this we are rendering based on a condition
	- In this case the condition is that 

- Modifying using a ternary operator
- Instead of having 2 separate returns like we do above we can club them together with a ternary operator.

```
return profileList.length == 0 ? (
	<Shimmer />
) : (
	<div className="main"></div>
)
```


#### Input fields

- To tract the value of a input box we have to bind its value to a local state (`useState`) variable in react
```
[searchText, setSearchText] = useState("");

<input type="text" className = "search-bar" value={searchText} 
	onChange={(e)=>{
		setSearchText(e.target.value);
	}}
/>
<button 
	onClick={() => {
		console.log(searchText);
		const filteredData = profileList.filter(
			(res) => res.name.toLowerCase()includes(searchText.toLowerCase())
		);
		setProfileList(filteredData);
	}}
>
	Search
</button>

```

- Whenever a state variable is updated, react triggers reconciliation cycle (re-renders) 