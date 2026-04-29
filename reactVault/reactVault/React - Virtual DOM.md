1. [ ] In Traditional Document Object Models (DOM), updating the UI is expensive because :
	1. [ ] The real DOM is slow to manipulate
	2. [ ] Every change can trigger
	3. [ ] Layout recalculation
	4. [ ] Repaints
	5. [ ] Reflow
2. [ ] Frequent updates (like typing, animations) become inefficient
3. [ ] Even a small change like inner text of an HTML element can cause the browser to recalculate layout.
4. [ ] React minimizes direct interaction with the Real DOM.
5. [ ] The **Virtual DOM** is a lightweight JavaScript based representation of the real DOM.
6. [ ] Instead of directly modifying the browser DOM, React : 
	1. [ ] Creates a virtual copy of the UI in memory
	2. [ ] Updates the virtual version
	3. [ ] Syncs only the necessary changes to the real DOM

React DOM vs Virtual DOM : 

|Feature|Real DOM|Virtual DOM|
|---|---|---|
|Type|Browser API|JS Object|
|Speed|Slow|Fast|
|Updates|Immediate|Batched|
|Re-render|Expensive|Optimized|

### Step by Step

#### Step 1: Initial render

- When we write : `const element = <h1>Hello World</h1>;`
- React coverts it into a JS object : 
```
{
  type: "h1",
  props: {
    children: "Hello World"
  }
}
```

- This is a **Virtual DOM** node
#### Step 2: Build Virtual DOM Tree

```
App
 └── h1
      └── "Hello World"
```

#### Step 3 : Render to Real DOM

- React converts this into actual DOM elements and mounts them

#### Step 4 : State/Props Change

- Suppose the state changes : 
	- `<h1>Hello React</h1>`
- React creates a **new Virtual DOM** tree

#### Step 5 : Drifting (Reconciliation)

- React compares : 
	- Old virtual DOM 
	- New virtual DOM
- The process is called : **Reconciliation**

#### Step 6 : Identifying Minimal Changes

- React detect : 
	- `- Hello World`
	- `+ Hello React`
- Thus, only the text changed → not the entire `<h1>`

#### Step 7 : Update Real DOM Efficiently

- React updates only : 
	- `node.textContent = "Hello React"`
- Thus, there is no full re-render

### The Diffing Algorithm (Reconciliation Deep Drive)

- React uses a **heuristic O(n) algorithm** instead of O(n³) tree comparison.

#### Rule 1 : Different Type → Replace Entire Node

1. [ ] `<div></div>` → `<span />`
2. [ ] React destroys old node and creates a new one

#### Rule 2 : Same Type → Update Attributes

1. [ ] `<div class="a" />` → `<div class="b" />`
2. [ ] Only the class attribute is updated

#### Rule 3 : Children Comparison

- React compares children **sequentially**
```
<ul>
  <li>A</li>
  <li>B</li>
</ul>
```

vs
```
<ul>
  <li>A</li>
  <li>C</li>
</ul>
```

- Only the second `<li>` element changes

##### Problem without keys

old 
```
<li>A</li>  
<li>B</li>
```

new
```
<li>X</li>
<li>A</li>
<li>B</li>
```

- `<li>X</li>` is inserted at the end
- React may re-render everything

##### Solution : Keys

```
<li key="A">A</li>
<li key="B">B</li>
```

- React tracks identity that makes updates efficient

#### Why Virtual DOM is fat 

##### 1. Batch updates 

- React groups multiple updates into one DOM operation

##### 2. Minimal DOM Manipulation

- Only changed nodes are updated

##### 3. In-Memory Computation

- Diffing happens in JS (fast), not in browser engine (slow)

##### Predicable Updates 

- Declarative model : 
	- `UI = f(state)`

#### Important Clarification (Common Misconception)

- Virtual DOM is not always faster than real DOM
- Virtual DOM adds overhead
- But reduces expensive DOM operations
- It's **efficient**, not magically faster in all cases

#### Virtual DOM vs Direct DOM Libraries

##### Vanilla JS
- Manual DOM updates
- Hard to scale

##### jQuery
- Direct manipulation
- Imperative

##### React 
- Declarative
- Diffing + batching

#### React Fiber (Modern Virtual DOM Engine)

- Since Reach 16, reconciliation uses : 
	- **React Fiber**
- It improves : 
	- Interruptible rendering
	- Prioritizing of updates
	- Smooth UI (no blocking)
- Fiber Adds : 
	- Incremental renders : breaks work into chunks
	- Priority scheduling : Important updates first
	- Async rendering : Better UX

### Virtual DOM in Functional Components

- What we write : 
```
function App() {
  return <h1>Hello</h1>;
}
```

Every render : 
- Function runs
- New Virtual DOM created
- Diffing happens
- Not Direct DOM work

### Virtual DOM can be inefficient
- Huge lists without keys
- Frequent unnecessary re-renders
- Heavy component trees

### optimizing techniques

- Using `React.memo`
- `usememo`
- `useCallback`
- Proper key usage

### Real world analogy

- Think of Virtual DOM like : 
	- Draft vs Final Document : 
		- We edit a draft (Virtual DOM)
		- Compare with previous version
		- Apply only the differences to final document


### Example Flow : 

```
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

- On Click : 
	- State updates
	- New Virtual DOM created
	- Diff with old tree
	- Only text inside button changes
	- DOM updated minimally

#### Key Takeaways

- Virtual DOM = JS representation of UI
- React uses diffing + reconciliation
- Updates are batched and minimal
- Keys are critical for list performance

### Scheduling in React

#### The core problem : Why scheduling is needed

- Before Fiber (React ≤15) : 
	- Rendering was synchronous
	- Once React started rendering → it **blocked the main thread**
	- Large UI updates = frozen UI
- Problem : 
	- User Interactions (clicks, typing) could make the UI lag


#### The big idea : split work into units

- React fiber introduces : 
	- Break rendering work into small chunks (units of work) and process them incrementally.
	- Instead of : `Render whole app → block → finish`
	- React now does : `Work → pause → resume → pause → resume → commit`

#### What is a "Work Unit"?

- A work unit = processing a single Fiber node (component)
- Each component becomes a **Fiber node** for forming a tree

```
App
 ├── Header
 ├── Sidebar
 └── Content
      ├── Post
      └── Comments
```
- Each node = one unit of work

### The two phases of React Work : 

#### 1. Render phase (interruptible)
- Builds new Virtual DOM (Fiber tree)
- Can be paused, resumed, aborted

#### 2. Commit Phase (Non-interruptible)

- Applies changes to real DOM
- Must finish immediately

### How scheduling actually works : 

#### Step 1 : Update is triggered

- Example : `setState(...)`
- React : 
	- Creates an update object
	- Assigns it a **priority (lane)**

#### State 2 : Assign Priority (Lanes System)

- React uses **lanes** (Priority buckets) :
	- High priority : User input (click, typing)
	- Medium priority : Animations
	- Low priority : Data fetching UI updates
- Urgent updates don't wait behind slow ones

#### Step 3 : Work Loop Begins :

- React enters a work loop :
```
while (workRemaining && timeRemaining) {
  performUnitOfWork();
}
```


#### Step 4 : Perform one unit of work

- For each Fiber : 
	- Call component function
	- Generate children
	- Link fibers
	- Return next unit

#### Step 5 : Yield to Browser (key magic)

- React uses a scheduler to check : `shouldYield()`
- If : 
	- Time slice is over
	- Browser needs control
- React pauses work

#### Step 6 : Resume Later

- React continues from where it left off
- No wasted work


### The scheduler behind the scenes

- React uses an internal scheduler package that works with : 
	- `MessageChannel`
	- `setTimeout` fallback
	- Browser idle time
- Conceptually similar to : 
```
requestIdleCallback(() => {
  doWork();
});
```

- More advanced and controlled

### Time Slicing (Critical Concept)

- React divides work into small time slices (~5ms)
- Instead of blocking for 100ms : 
	- `Work 5ms → pause → browser handles input → resume`
- Result : 
	- Smooth UI
	- Responsible interactions

### Fiber node structure (why scheduling works)

- Each Fiber node has pointers : 
```
{
  type: Component,
  child: firstChild,
  sibling: nextSibling,
  return: parent,
}
```

- This allows : 
	- Traversal without recursion
	- Pause/resume at any node

### Work Traversal Algorithm

- React uses a **depth-first traversal**
- Begin Phase : 
	- Process current node
	- Go to child
- Complete phase : 
	- If no child → go to sibling
	- If no sibling → go to parent
- Flow : `App → Header → Sidebar → Content → Post → Comments`

### Interruptibility (Game-Changer)

- During render phase : 
- React can : 
	- Pause
	- Resume
	- Restart
	- Drop low-priority work
- Example : 
	- Low priority render running...
	- User clicks button → HIGH priority update arrives → React pauses low work → handles high priority immediately

### Batching Updates 

- React groups updates : 
- `setCount(1)`
- `setCount(2)`
- Instead of 2 renders → 1 render

### Commit Phase (Final Step)

- Once render phase is done 
- React enters commit phase : 
	- React Enters commit  phase :
		- Apply DOM updates
		- Run lifecycle hooks
		- Trigger effects
- Cannot be interrupted

### Real Example Timeline : 

#### Without scheduling : 

`Click → Render entire tree → UI freezes → Update shown`

##### Without scheduling : 

```
Click → Start render
→ Pause for input
→ Resume
→ Commit
→ Smooth UI
```

#### Concurrent Features (Built on Scheduling)

- React exposes this system via : 
	- `useTransition`
	- `startTransition`
	- Suspense
- Example :
```
startTransition(() => {
  setSearchResults(data);
});
```

- marks update as low priority

### Why this matters : 

- React scheduling enables : 
	- Non-blocking rendering
	- Priority based updates
	- Smooth UX even in large applications

#### Mental Model : 

- Think of react like a **task manager**
	- Tasks = components
	- Priorities = lanes
	- CPU time = main thread
	- Scheduler = decides execution order

### Key Take aways

- React breaks rendering into units of work (fibers)
- Uses time slicing to avoid blocking
- Assigns priorities using lanes
- Can pause, resume, interrupt rendering
- Commit phase is always synchronous


#### Final Insight 

- React doesn’t just “render UI” : It **orchestrates work intelligently over time**, ensuring: “User interactions always feel instant—even when the app is doing heavy work.”