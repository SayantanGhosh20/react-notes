
1. [ ] `useState` is the fundamental state management hook in React. It lets a function component store data that persists across renders and triggers UI updates (component level) when that data changes.
2. [ ] This hook is provided to us by React.
3. [ ] It adds state to function components
4. [ ] It has 2 components : 
	1. [ ] One that contains the current state value
	2. [ ] A function to update the current state

- Basic Syntax 

```
import {useState} from "react";
```

```
const [state, setState] = useState(initialValue);
```

- `useState` returns an array `[]`
- React stores the state outside of the component where the state variable is, inside its internal system (Fiber)
- Each render : 
	- React calls our component function again
	- But `useState` retrieves the current stored value (current state)

- Hook **order must not change**
- Hooks must be called **at the top level**

#### Basic Example : 

```
import {useState} from "react";

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<>
			<p>{count}</p>
			<button onClick={()=> setCount(count+1)}> Increment by 1 (+1) </button>
		</>
	)
}
```

- Explanation : 
	- First we have imported the `useState` hook from "react".
	- Then we declare our functional component
	- Inside the component we have created a state variable with two parameters `count` and `setCount`.
	- We have set `useState(0)`, which sets the initial value as 0.
	- Inside the `return()` statement we have a react fragment inside which we have a paragraph element and a button element.
	- Inside the paragraph element, we are using the `count` variable which stores the current state i.e. 0.
	- In the button element we have a `onClick` attribute. In this attribute, we have an arrow function. In this arrow function, we are updating the state of the state variable, using the `setCount` parameter. In the `setCount` we are passing the value `(count + 1)` i.e. the current value of the state variable with `+1` to it, on every click.
	- On Every click we get :
		- On first click : `(count + 1)` : 0 + 1 : 1
		- On second click : `(count + 1)` : 1 + 1 : 2
		- On third click : `(count + 1)` : 2 + 1 : 3
- What happens when **setCount** is called?
	- React updates the internal state
	- React schedules a re-render
	- Component function runs again
	- New `count value is returnd`
#### initial state - lazy initialization (using functions)

- Passing a function : 
	- `const [value, setValue] = useState(() => expensiveComputation());`
	- In this case function only runs once
	- Prevents expensive recalculation on every render

#### ❌ Never update state directly

❌ `setCount(count+1)`; This can cause problems

#### ✅ Perform functional updates (arrow functions)

✅ `setCount(count => count +1)`

! So do we use onClick={()=> setCount(count+1)}  OR onClick={()=> setCount(count => count +1)}

---

#### React Batches Updates (Why Functional updates matter)

The following, results in only +1 : 

```
setCount(count + 1);
setCount(count + 1);
```

The following, results in +2

```
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

#### State is immutable (very important)

- React detects changes using **reference comparison**

##### Wrong (mutating)

```
stateObj.name = "John";
setState(stateObj);
```

##### Right method (immutable update)

```
setState({
  ...stateObj,
  name: "John"
});
```

#### Storing Different Types ; 

##### Primitive : 

`const [count, setCount] = useState(0);`

##### Object : 

`const [user, setUser] = useState({ name:"", age:0})`

##### Array 

`const [list, setList] = useState([]);`

##### Updating arrays : 

`setList(prev=> [...prev, newItem]`


### Batching behavior : 

- React groups multiple updates into one render : 
```
setCount(c => c + 1);
setCount(c => c + 1);
```
- In one render, the count increases by 2

### Asynchronous nature (common confusion)

- `setState` is **not immediately** reflected
```
setCount(5);
console.log(count);
```
- Because re-render hasn't happened yet

### multiple `useState` vs single object

#### Option 1 (recommended)

```
const [name, setname] = useState("");
const [age, setAge] = useState(0);
```

#### Option 2

```
const [user, setUser] = useState({name:"", age:0});
```

### Best practice
- Use multiple states unless values are tightly related

### Rules of Hooks (critical)

- We must :
	- Call hooks at the **top level**
	- Not inside : 
		- Loops
		- Conditions
		- Nested functions

### ❌ Wrong

- If-condition
```
if (condition) {
  useState(0);
}
```

### ✅ Correct

```
const [value, setValue] = useState(0);
if (condition) {
  // use value
}
```


### Regular variables vs useState

#### ❌ Regular variable

- Changes variable value but does not update UI

```
let count = 0;
count++;
```

#### ✅ useState

- Changes variable value and also updates UI

### Re-render behavior

- When state updates:
	- Entire component function runs again
	- React diffs Virtual DOM
	- Only changed parts update is real DOM


#### Stale Closure (advanced)

In the following code, the code may log old value.

```
function handleClick() {
  setTimeout(() => {
    console.log(count);
  }, 1000);
}
```

Fix :

```
setTimeout(() => {
  setCount(prev => prev + 1);
}, 1000);
```

### Relationship with React Fiber

- Each `useState` : 
	- Is stored a **linked list of hooks**
	- Attached to a **Fiber node**
	- Indexed by call order

### When NOT to use `useState`

- Complex logic : `useReducer`
- Global state : Context / Redux
- Server data : React Query : SWR
- Derived data : Compute directly

### Real-world patterns : 

#### Toggle

```
const [isOpen, setIsOpen] = useState(false);
setIsOpen(prev => !prev);
```

#### Form input

```
const [value, setValue] = useState("");

<input onChange={e => setValue(e.target.value)} />
```

#### React state

```
setCount(0);
```


---

## Batching

- Batching refers to the concept of **grouping multiple state updates into a single render**
- Instead of : `update → render → update → render`
- React does : `update → update → update → ONE render`

## ❌ Old behavior (pre React 18)


- In the following, React renders once, not twice : 
```
setCount(c => c + 1);
setFlag(f => !f);
```

##### batching only happens inside react event handlers such as `onClick`

```
onClick={() => {
  setA(1);
  setB(2);
}}
```

The code above batches the updates and renders once.

##### Outside react event handlers

```
setTimeout(() => {
  setA(1);
  setB(2);
});
```

in the code above, the updates are not batches, resulting in multiple renders


## ✅ Concurrent React (React 18+)

##### Automatic batching everywhere

- Timeouts
- promises
- async/await
- native events

- Now:

```
setTimeout(() => {
  setA(1);
  setB(2);
});
```

The code above is a single render


### The core idea : react delays work

- React does not immediately render after `useState`
- Instead : 
	- Queue updates
	- Assign priority
	- Decide when to render
	- Render once with all updates
- Batching is powered by : 
	- Fiber tree
	- Update queues
	- Lanes (priority system)
- React assigns each update a lane (priority bucket)
- Batching happens when updates share compatible lanes

#### How batching actually works step-by-step

##### Step 1 : We call `setState`

- `setCount(c=> c+1)`
- React : 
	- Creates an **update object**
	- Pushes it into a queue

##### Step 2 : multiple updates accumulate

```
setCount(c => c + 1);
setCount(c => c + 1);
```

Now queue looks like : `[update1, update2]`

##### Step 3 : Scheduler decides when to render

- React 
	- Groups updates
	- Assigns lanes
	- schedules a render

##### Step 4 : Render phase : 

- React processes all updates together : `final state = apply(update1 → update2)`

##### Step 5 : Commit phase : 

- DOM updates once

##### Concurrent Rendering : 

- In react concurrent mode, React can ; 
	- Pause rendering
	- Resume rendering
	- Throw away work
	- Re-run renders

### Automatic batching across async boundaries :

Example : 

```
async function handleClick() {
  setCount(c => c + 1);
  await fetch("/api");
  setFlag(true);
}
```

- In React 18+
	- Both updates are batched
	- One render 

### When Batching does NOT happen

- React may break batching when needed : 

- When the updates are in different lanes

```
setCount(1); // urgent
startTransition(() => {
  setList(data);
});
```

- Here the updates are not batches together since priorities differ

### `flushsync` (force immediate render)

```
import { flushSync } from "react-dom";

flushSync(() => {
  setCount(1);
});
```

- The code above forces render immediately

### Interaction with `useTransition`

- This is where batching gets interesting

```
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setList(data);
});
```

- What happens : 
	- Update gets low-priority lane
	- React may delay it
	- Urgent updates renders first

- Batching is lane aware
- React batches : 
	- Same priority → together
	- Different priority → separately

```
setCount(count + 1);
setCount(count + 1);
```

- Both use same **stale value**

# Common misconceptions

### ❌ “setState is async”

Not exactly.

✔ It’s **scheduled**, not immediately applied

---

### ❌ “React always batches everything”

No.

✔ Only when priorities allow


---
---

