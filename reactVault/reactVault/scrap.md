
```
import React from "react";

import ReactDOM from "react-dom/client";

import logo from "./logo-img.png";

  

const root = ReactDOM.createRoot(document.getElementById("root"));

  

const styleVar = {

    backgroundColo : "orange"

};

  

const RestaurantCard = ({imgSrc, resName, cuisine1, cuisine2, cuisine3, avgOrderTime, distance, deliveryTime, starRating}) =>{

    return (

        <div className="res-card">

            <div className="res-card-img-container">

                <img className="res-card-img" src={imgSrc} alt="image" />

            </div>

            <div className="res-card-details-container">

                <div className="card-left-section">

                    <div className="res-name">{resName}</div>

                    <div className="res-cuisine">

                        <div className="cuisine">{cuisine1}</div>

                        <div className="cuisine">{cuisine2}</div>

                        <div className="cuisine">{cuisine3}</div>

                    </div>

                    <div className="res-details">

                        <div className="res-avg-order-time">{avgOrderTime}</div>

                        <div className="res-distance">{distance}</div>

                        <div className="res-delivery-time">{deliveryTime}</div>

                    </div>

                </div>

                <div className="card-right-section" style = {{backgroundColor : "grey"}}>

                    <div className="res-star-rating" style={styleVar}>{starRating}</div>

                </div>

            </div>

        </div>

    )

};

  
  
  

const HeaderComponent = () =>{

    return(

        <div className="header">

            <div className="logoContainer">

                <img

                    className="logo"

                    src="https://t3.ftcdn.net/jpg/03/18/06/54/360_F_318065453_6IYnxkx8xA51PlucgYU8LzdydKUoo2bk.jpg"

                    alt="image"

                />

            </div>

            <div className="nav-items">

                <ul>

                    <li>Home</li>

                    <li>About us</li>

                    <li>Contact us</li>

                    <li>Cart</li>

                </ul>

            </div>

        </div>

    )

};

  

const BodyComponent = () => {

    return(

        <div className="body">

            <div className="searchContainer">

  

            </div>

            <div className="restaurantCardContainer">

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

            </div>

        </div>

    )

}

  

const AppLayout = () => {

    return(

        <div className="app">

            <HeaderComponent />

            <BodyComponent />

        </div>

    )

};

  

root.render(<AppLayout />);
```

---

### React components :

#### State — Data INSIDE Components

- A state is : Data that changes over time

```
import {useState} from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	
	return (
		<button onClick={() => setCount(count +1)}>
		{count}
		</button>
	);
};
```

#### Lifecycle via Hooks

```
import {useEffect} from "react"

useEffect(() =>{
	console.log("Component mounted");
	
	return () => {
		console.log("Component unmounted);
	}
});
```

#### React Project Structure (Industry Standard)

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

#### Types of Components

##### Presentational Components

- Only UI
- No logic
```
  const Button = ({ label }) => <button>{label}</button>;
```

- The above code creates a button with its label extracted from its props

##### Container Component 

- Handles logic, data fetching

```
const UserContainer = () => {
	const [user, setUser] = useState(null);
	return <UserCard user={user} />
};
```

##### Layout Components

- Define page structure (Component composition)

```
const Layout = ({children}) => {
	<div>
		<Navbard />
		{children}
	</div>
}
```
##### Controlled Components (Forms)

```
 const Input = () =. {
	 const [value, setValue] = useState("");
	 
	 return (
		 <input
			 value = {value}
			 onChange={(e) => setValue(e.target.value)}
		 />
	 );
 };
```


#### Advanced Components

- Reconciliation (Virtual DOM)
- React : 
	- Creates a virtual DOM
	- Diffs it with previous version
	- Updates only changed parts
- This is what makes React is fast.

##### Keys in Lists

```
items.map(item => <li key={item.id}>{item.name}</li>)
```

Keys help React : 
- Identify elements
- Optimize updates

##### Custom Hooks

```
const useCounter = () => {
	const [count, setCount] = useState(0);
	return { count, increment : () => setCount(count + 1)};
}
```

##### Memorization (Performance) : Prevents unnecessary re-renders

```
import {memo} from "react";

const Button = memo(({label}) => {
	return <button>{label}</button> ;
});
```

#### useCallback & useMemo

```
const memorizeFn = useCall(() => {}, []);
const value = useMemo(() => compute(), [])
```

- Used for :
	- optimize expensive operations
	- Prevent re-renders

#### Component Communication Patterns

##### Props : Parent → Child

##### Child → Parent

```
const Child = ({sendData}) => {
	return <button onClick={() => sendData("Hello")} />
};
```

### Global Communication : 

- Using Communication 
	- Context API
	- Redux
	- Zustand

### Industry-Level Patterns

##### Atomic Design 

- Atoms → Molecules → Organisms → Templates → Pages
- Smart vs Dumb Components
	- Smart → logic
	- Dumb → UI

##### Feature Based Structure (Scalable Apps)

```
features/
  auth/
    components/
    hooks/
    api/
```

#### Common Mistakes
- ❌ Not passing props properly
- ❌ Too many re-renders
- ❌ No keys in lists
- ❌ Mixing UI and logic badly
- ❌ Deep prop drilling

##### Examples of components 
- Components are everywhere in React
- Every UI element = component
- Example : 
	- Button
	- Navbar
	- Modal
	- Entire page

##### Mental model

- Think of React as : A **Tree of components**, where :
	- Data flows down
	- Events flow up
	- State lives where it is needed

---
---
---


```
import React from "react";

import ReactDOM from "react-dom/client";

import logo from "./logo-img.png";

  

const root = ReactDOM.createRoot(document.getElementById("root"));

  

const styleVar = {

    backgroundColo : "orange"

};

  

const RestaurantCard = ({imgSrc, resName, cuisine1, cuisine2, cuisine3, avgOrderTime, distance, deliveryTime, starRating}) =>{

    return (

        <div className="res-card">

            <div className="res-card-img-container">

                <img className="res-card-img" src={imgSrc} alt="image" />

            </div>

            <div className="res-card-details-container">

                <div className="card-left-section">

                    <div className="res-name">{resName}</div>

                    <div className="res-cuisine">

                        <div className="cuisine">{cuisine1}</div>

                        <div className="cuisine">{cuisine2}</div>

                        <div className="cuisine">{cuisine3}</div>

                    </div>

                    <div className="res-details">

                        <div className="res-avg-order-time">{avgOrderTime}</div>

                        <div className="res-distance">{distance}</div>

                        <div className="res-delivery-time">{deliveryTime}</div>

                    </div>

                </div>

                <div className="card-right-section" style = {{backgroundColor : "grey"}}>

                    <div className="res-star-rating" style={styleVar}>{starRating}</div>

                </div>

            </div>

        </div>

    )

};

const HeaderComponent = () =>{

    return(

        <div className="header">

            <div className="logoContainer">

                <img

                    className="logo"

                    src="https://t3.ftcdn.net/jpg/03/18/06/54/360_F_318065453_6IYnxkx8xA51PlucgYU8LzdydKUoo2bk.jpg"

                    alt="image"

                />

            </div>

            <div className="nav-items">

                <ul>

                    <li>Home</li>

                    <li>About us</li>

                    <li>Contact us</li>

                    <li>Cart</li>

                </ul>

            </div>

        </div>

    )

};

  

const BodyComponent = () => {

    return(

        <div className="body">

            <div className="searchContainer">

  

            </div>

            <div className="restaurantCardContainer">

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

                <RestaurantCard

                    imgSrc = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg"

                    resName = "Mithai Mahal"

                    cuisine1 = "Indian"

                    cuisine2 = "Bengali"

                    cuisine3 = "Bhutani"

                    avgOrderTime = "25 mins"

                    distance = "1.2 KM"

                    deliveryTime = "25 mins"

                    starRating = "4.5"

                />

            </div>

        </div>

    )

}

  

const AppLayout = () => {

    return(

        <div className="app">

            <HeaderComponent />

            <BodyComponent />

        </div>

    )

};

  

root.render(<AppLayout />);
```

```
import React from "react";

import ReactDOM from "react-dom/client";

  

const root = ReactDOM.createRoot(document.getElementById("root"));

  

// Data Object

  

const val1 = {

    name : "Christopher Hainz",

    age : 22,

    gender : "Male",

    heightInCM : 168,

    weightInKG : 67.4,

    idType : "Passport"

};

  

const val2 = {

    name : "Christopher Hainz",

    age : 22,

    gender : "Male",

    heightInCM : 168,

    weightInKG : 67.4,

    idType : "Passport"

};

  
  

// Components

  

const Card1Component = (props) => {

 return(

    <div className="cardWrapper">

        <div className="cardParameter">{props.name}</div>

        <div className="cardParameter">{props.age}</div>

        <div className="cardParameter">{props.gender}</div>

        <div className="cardParameter">{props.heightInCM} cm</div>

        <div className="cardParameter">{props.weightInKG} KG</div>

        <div className="cardParameter">{props.idType}</div>

    </div>

 )  

};

  

const Card2Component = ({name, age, gender, heightInCM, weightInKG, idType}) => {

 return(

    <div className="cardWrapper">

        <div className="cardParameter">{name}</div>

        <div className="cardParameter">{age}</div>

        <div className="cardParameter">{gender}</div>

        <div className="cardParameter">{heightInCM} cm</div>

        <div className="cardParameter">{weightInKG} KG</div>

        <div className="cardParameter">{idType}</div>

    </div>

 )  

};

  
  

const Card3Component = (props) => {

    return(

    <div className="cardWrapper">

        <div className="cardParameter">{props.name}</div>

        <div className="cardParameter">{props.age}</div>

        <div className="cardParameter">{props.gender}</div>

        <div className="cardParameter">{props.heightInCM} cm</div>

        <div className="cardParameter">{props.weightInKG} KG</div>

        <div className="cardParameter">{props.idType}</div>

    </div>

 )

}

  

const Composition = () =>{

    <div>

        {/* Hardcoded */}

        <Card1Component

            name = "Christopher Hainz"

            age =  {22}

            gender = "Male"

            heightInCM = {168}

            weightInKG = {67.4}

            idType = "Passport"

        />

        {/* Dynamic - Explicit */}

        <Card2Component

            name = {val1.name}

            age =  {val1.age}

            gender = {val1.gender}

            heightInCM = {val1.heightInCM}

            weightInKG = {val1.weightInKG}

            idType = {val1.idType}

        />

        {/* Spread Object */}

        <Card2Component {...val1}/>

  

        <Card3Component {...val1} {...val2}/>

  
  

        {/* Single Encapsulated Object */}

        <Card1Component data1={val1} data2={val2}/>

    </div>

}
```


---
---
---
---
---
---
---
---
---

### ✅ Core

- useState
- useEffect
- useContext
- useRef
- useMemo
- useCallback

### ⚙️ Additional

- useReducer
- useLayoutEffect
- useImperativeHandle
- useDebugValue

### ⚡ Concurrent / Advanced

- useTransition
- useDeferredValue
- useId
- useSyncExternalStore
- useInsertionEffect

### 🧪 Experimental / New

- use
- useOptimistic
- useFormStatus
- useActionState

### Real Industry Usage Mapping :

1. [ ] Form input → `useState`
2. [ ] API call → `useEffect`
3. [ ] Global auth → `useContext`
4. [ ] Complex logic → `useReducer`
5. [ ] Performance → `useMemo`, `useCallback`
6. [ ] Animation/layout → `useLayoutEffect`
7. [ ] Async UI → `useTransition`

### Mental Model

Think of hooks as ways to plug into reacts internal system
- State system → `useState`
- Lifecycle → `useEffect`
- Rendering control → `useMemo`
- Scheduling → `useTransition`


### Rules:

1. Only call hooks at top level
2. Only call hooks inside React functions
3. Never inside loops/conditions

### Rules of Hooks (CRITICAL)

- React enforces strict rules : 

The following is not allowed : 

```
if (condition) {
  useEffect(() => {});
}
```

BUT the following IS ALLOWED : 

```
useEffect(() => {
  if (condition) {
    // logic
  }
});
```


### Rules for custom hooks 

1. [ ] must start with the word `use`
2. [ ] custom hooks CAN use other hooks inside
3. [ ] Example : 

```
const useAuth = () => {  
	const [user, setUser] = useState(null);  
	return { user };  
};
```

#### useState : Manages local component state

```
const [count, setCount] = useState(0);
```

#### useEffect : Handles side effects (API calls, subscriptions, timers)

```
useEffect(() => {
  console.log("Mounted");

  return () => console.log("Cleanup");
}, []);
```


#### useContext : Access global data without prop drilling

```
const value = useContext(MyContext);
```

#### useRef : Stores mutable values without re-render

```
const inputRef = useRef(null);
```

- Used for :
	- DOM access
	- Persistent values

#### useMemo : Memorize computed values

```
const result = useMemo(() => expensiveFn(), [deps]);
```


#### useCallback : Memorize functions

```
const fn = useCallback(() => {}, [deps]);
```

#### useReducer : Advanced state management (Redux-like)

```
const [state, dispatch] = useReducer(reducer, initialState);
```

- Used when : 
	- Complex state logic
	- Multiple state transitions

#### useLayoutEffect : Like useEffect but runs before paint

```
useLayoutEffect(() => {
  // DOM measurement
}, []);
```

- Used for : 
	- Layout calculations
	- Avoiding flicker

#### useImperativeHandle : Controls what parent can access via ref

```
useImperativeHandle(ref, () => ({
  focus: () => {}
}));
```

#### useDebugValue : used in custom hooks for debugging

```
useDebugValue(value);
```

#### useTransition : Handles non-urgent updates

```
const [isPending, startTransition] = useTransition();
```

- Used for : 
	- Smooth UI
	- Avoid blocking renders

#### useDeferredValue : Defers a value update

```
const deferredValue = useDeferredValue(value);
```

#### useId : Generates unique IDs

```
const id = useId();
```

- Useful for accessibility

#### useSyncExternalStore : For external state libraries

```
const state = useSyncExternalStore(subscribe, getSnapshot);
```

- Used in : 
	- Redux internals
	- Zustand like libraries

#### useInsertionEffect : Runs before DOM mutations (CSS-in-JS libraries)

```
useInsertionEffect(() => {
  // inject styles
}, []);
```


- Rarely used but used by libraries like styled-components

#### use (very advanced)

- Used for : 
	- Suspense
	- Async data fetching
```
const data = use(fetchPromise);
```

#### useOptimistic : Optimistic UI updates

```
const [state, setOptimistic] = useOptimistic(initialState);
```

#### useFormStatus : Used in form actions (React Server Components)

#### useActionState : Handles async from actions

 
---
---
### Project 

#### Goal : Build a restaurant card for a food website

#### Planning :

1. [ ] Header / Nav-bar
2. [ ] Main
	1. [ ] Search component
		1. [ ] Search bar
		2. [ ] Search button
	2. [ ] Restaurant cards
		1. [ ] Restaurant details
3. [ ] Footer
	1. [ ] Copyright
	2. [ ] Sitemap
	3. [ ] Social Media Links

#### Structure : 

1. [ ] Header
	1. [ ] Logo
	2. [ ] Nav-items
2. [ ] Main
	1. [ ] Main Header
		1. [ ] Search component
			1. [ ] Search Bar
			2. [ ] Search Button
		2. [ ] Veg/Non-veg toggle button
	2. [ ] Main Body 
		1. [ ] Restaurant container
			1. [ ] Individual Restaurant cards
				1. [ ] Restaurant name
				2. [ ] Cuisine type(s)
				3. [ ] Average order time
				4. [ ] Distance
				5. [ ] Delivery Time
				6. [ ] Star Rating
	3. [ ] Footer
		1. [ ] Copyright
		2. [ ] Contact
		3. [ ] Address
		4. [ ] Sitemap links
		5. [ ] Social media