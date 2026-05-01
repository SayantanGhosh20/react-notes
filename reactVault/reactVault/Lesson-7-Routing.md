1. [ ] `useEffect`
	1. [ ] Callback function
	2. [ ] Dependency array
2. [ ] `useEffect` is called after every render of the component that it is present inside.
3. [ ] If the `useEffect` is called without a dependency array then it is called on every render,
4. [ ] If there is an empty dependency array `[]` then `useEffect` is called only once and post initial render.
5. [ ] If the dependency array is not empty then `useEffect` is only called when the dependency is called. This dependency could be a `useState` variable such as `profileList`.
6. [ ] NEVER CREATE `useState` hook outside of the components as it is used for creating local state variables within the component
7. [ ] It is good to define the state variables at the beginning of the component.
8. [ ] NEVER CREATE a `useState` variable inside if-else
9. [ ] DON'T CREATE a `useState` variables inside a function
----

### Routes

#### `react-router-dom`

- `npm install react-router-dom`
- When we create routes we will have to create routing configuration
-  Navigate to the `app.js` file
- `import {createBrowserRouter} from "react-router-dom`
- inside the `AppLayout` component write the following
- `createBrowserRouter` takes a list
- a path in the routing configuration is an object

```
const appRouter = createBrowserRouter([
	{
		path : "/"
		element : "<AppComponent />"
	},
	{
		path : "/about",
		element : <About />
	}
])
```

```
import About from "./components/About";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
```

```
root.render(<RouterProvider router={appRouter} />);
```

- Now `localhost:1234` renders the `<AppComponent />` and `localhost:1234/about` renders the `<About /> component

- `react-router-dom` provides different kinds of routers :
	- `Framework Routers`
		- `HydrationRouter`
		- `ServerRouter`
	- `Data Routers`
		- `RouterProvider`
		- `StaticRouterProvider`
		- `createBrowserRouter`
		- `createHashRouter`
		- `createMemoryRouter`
		- `createStaticHandler`
		- `createStaticRouter`
	- Declarative Routers ; 
		- `BrowserRouter`
		- `HashRouter`
		- `HistoryRouter`
		- `MemoryRouter`
		- `Router`
		- `StaticRouter`

- `CreateBrowserRouter` is the recommended router by React for simple router projects
- in VS code if we write `rafce` (reactArrowFunctionExportComponent) then VScode automatically creates a boiler plate component for us based on the file name.

##### Handing Errors for each path 

```
const appRouter = createBrowserRouter([
	{
		path : "/",
		element : "<AppComponent />",
		errorElement : <Error />
	},
	{
		path : "/about",
		element : <About />
	}
])
```

- React Router DOM gives us access to the hook `useRouteError`
- `import {useRouterError} from "react-router-dom"`


```
import {useRouterError} from "react-router-dom";

const Error = () => {
	const err = useRouteError();
	console.log(err);
	return(
		<div>
			<h1>Oops!</h1>
			<h2>Something went wrong!</h2>
			<h3>{err.status}: {err.statusText}</h3>
		</div>
	)
}
```


### Creating children routes

- Our page currently has header, main and footer
- if we navigate to a different page that also has the header component then we wish for the header component to stay as it is, while the body component changes
- To create children routes, we again have to modify our route configuration

```
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppComponent = () => {
	return (
	<div className="app">
		<Header />
		<Outlet />
	</div>
	)
}

const appRouter = createBrowserRouter([
	{
		path : "/",
		element : "<AppComponent />",
		children : [
			{
				path: "/",
				element : <Main />
			},
			{
				path: "/about",
				element : <About />
			},
			{
				path: "/contact",
				element : <Contact />
			}
		],
		errorElement : <Error />
	},
	
])
```

- The `<Outlet />` component will be filled with the children component based on the path
- In react do not use anchor tags to navigate to other pages because, if we do that then the whole page will get refreshed, whereas we only want specific paths to refresh
- Instead of anchor tags we will use the Link component from the react-router-dom

`header.js`

```
import {Link} from "react-router-dom";

const Header = () => {

    return(

        <div className = "header">

            <div className = "logoContainer">

                <img className="logo" src = "url" />

            </div>

            <div className="nav-items">

                <ul>

                    <li>
	                    <Link to="/">Home</Link>
                    </li>

                    <li>
	                    <Link to="/about">About us</Link>
                    </li>

                    <li>
	                    <Link to="/contact">Contact us</Link>
                    </li>

                    <li>Cart</li>

                </ul>

            </div>

        </div>

    )

}

  

export default Header;
```

- This is why React is called a Single page applications, since the components in the page chnage (via client side routing) even when we go to a different route.


### Client Side Routing

- React does Client Side routing
- We have a single page and the components are inter-changed using routes
### Server Side Routing

- Happens in simple (Vanilla) JS applications
- Click on a route
- Network call goes out
- The whole page is reloaded
- The HTML of the route is fetched
- The page is re-rendered


#### Dynamic Paths in routing


```
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppComponent = () => {
	return (
	<div className="app">
		<Header />
		<Outlet />
	</div>
	)
}

const appRouter = createBrowserRouter([
	{
		path : "/",
		element : "<AppComponent />",
		children : [
			{
				path: "/",
				element : <Main />
			},
			{
				path: "/about",
				element : <About />
			},
			{
				path: "/contact",
				element : <Contact />
			},
			{
				path: "/restaurants/:resId",
				element : <RestaurantMenu />
			}
		],
		errorElement : <Error />
	},
	
])
```

- Here `:resId` part of the link is dynamic

```
{itemCard.map(item => 
	<li>{item.card.info.name}</li>
)}
```

#### useParams

- Here we are using the `useParams` hook
- `import {useParams} from "react-router-dom`;
- It is used for extracting parameters from the route `"/restaurants/:resId"`

```
const {profileId} = useParams();
```

