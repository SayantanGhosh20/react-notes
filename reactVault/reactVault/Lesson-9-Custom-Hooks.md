- Create a separate file for a separate custom hook
- Convention is to give the file the same name as the hook
- The name of a hook should start with `use`
- hooks are exported in the same way as components
-  Chunking/Code-splitting : 
-  Difference between hooks and components
- Lazy loading : 
	- When our app loads, it will not load the the lazy loading components (on-demand loading)
	- When we go to that particular page, then only will the page be loaded.
- `lazy()` is a function that is given us by the `react` package as a named export 
- `import {lazy} from "react"`
```
import {lazy, Suspense} from "react";

const GroceryComponent = lazy(()=> import("./components/Grocery"));
```

- 


- `suspense` keyword

```
import {lazy, Suspense} from "react";

%% Inside the app router %%

{
	path : "/grocery",
	element : <Suspense fallback={<ShimmerUI />}> <Grocery /> </Suspense>
}

const GroceryComponent = lazy(()=> import("./components/Grocery"));
```