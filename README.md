# React-Learning
## What is React?

React is a JavaScript library for building user interfaces, especially for single-page applications. It helps developers build fast, interactive UIs with reusable components and declarative code.

### 🔹 Key Characteristics:

- Component-based

- Declarative rendering

- Virtual DOM

- Unidirectional data flow

### React Component Categories
#### 1. Stateless / Presentational Components
-	Do not contain internal state
-	Receive props and render UI
-	Often small, focused, and highly reusable
-	Also known as “presentational components” or “UI components”

#### 2. Stateful Components
-	Use useState (or other hooks) to manage internal state
-	Control their own behavior or user input
-	Can still be reusable and composable

#### 3. Structural Components
-	Define layout, pages, or overall structure
-	Often composed of many smaller components
-	Not always large, but they provide structure
-	More common in larger applications

## React Project Setup
### 1. Open Terminal 

macOS/Linux**: Use Terminal (`terminal`)

### 2. Navigate to the folder where you want to create your project

```bash
# Example: move to the Desktop
cd ~/Desktop
```

### 3. Check the current folder contents

macOS/Linux
```
ls
```

### 4. Create a React App 
```
npx create-react-app@5 {your-project-name}
```

### 5. Start the Development Server
Once inside the project folder:
```
npm run start
```

## What is JSX?

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
```
const element = <h1>Hello, world!</h1>
```
JSX gets compiled into React.createElement() calls under the hood.

## State & Props

### ✅ state
State is local, internal data that a component maintains. It is mutable and managed using useState.
```
const [count, setCount] = useState(0)
```
- state triggers re-render when changed
- Lives inside the component

### ✅ props
Props are read-only values passed from parent to child components.
```
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>
}
```
- Used to configure and pass data between components
- Immutable from the child’s perspective

### Hooks
Hooks are special functions that let you use React features in functional components.
```
const [count, setCount] = useState(0)

useEffect(() => {
  const timer = setInterval(() => setCount(c => c + 1), 1000)
  return () => clearInterval(timer)
}, [])
```

## Small difference compare to JS

- Component Name using PascalCase;
- className instad of class in JS;

## JSX Basic Knowledge 
- JSX is a syntax extension for JavaScript that lets you write UI elements that look like HTML.
- All tags must be properly closed.
- Attributes use camelCase naming, like className and onClick.
- Can insert variables, expressions, or function results inside curly braces {}.

 ## React Components Basics
- Component names must be capitalized (PascalCase, e.g., Header, App).
- A component is simply a function that returns JSX.
- To use a component inside JSX: <MyComponent />
- Components receive data through props.

## React Component Composition
### What Is Component Composition?
Component composition is a core principle in React. It allows us to build flexible and reusable components by combining them in a modular way. Composition in React means nesting components inside each other using children props or explicitly passing components as props.
```
<Modal>
  <SuccessMessage />
</Modal>
```
Instead of hardcoding <SuccessMessage /> inside the Modal component, we pass it as a child. This allows us to reuse <Modal /> with different content.
### Why Is Composition Useful?
- Makes Components Reusable
```
function Modal({ children }) {
  return <div className="modal">{children}</div>;
}
```
- Solves Prop Drilling
Composition allows us to inject nested content without passing props through every intermediate layer.



## Props (Passing Data)
- Parent components pass data to child components via props.
- Child components access props through `{props}` or destructuring.
- Example:

```
javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

## useState (Managing State)
- useState() is used to store dynamic values inside components.
- Syntax:
```
const [state, setState] = React.useState(initialValue)
```
- Interactions like button clicks or text input will update the state via setState, causing a re-render.
- Functional updates (recommended for depending on previous state):
```
setState(prev => prev + 1)
```

## Conditional Rendering
- Use logical AND && to render something only if a condition is true:
```
{isShown && <p>Punchline</p>}
```
- Use ternary operator ? : to render different content based on a condition:
```
{isShown ? "Hide" : "Show"}
```

## Rendering Lists
- Use .map() to generate multiple elements from an array:
```
const listItems = data.map(item => <li key={item.id}>{item.name}</li>)
```
- Each element rendered in a list should have a unique key prop.

## Fragment: 
- Use <>...</> to wrap multiple elements without adding an extra DOM node.
```
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
)
```

## export default: 
- The export JavaScript keyword makes this function accessible outside of this file:
```
export default function Header() {
    return (
        <header className="header">
            <img src="react-logo.png" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
```
---
```
import { createRoot } from "react-dom/client"
import Header from "./Header"
const root = createRoot(document.getElementById("root"))
root.render(
    <Header />
)
```

## Handling Events
- Event handlers use camelCase (e.g., onClick, onChange).
- The event handler should be a function, not a boolean or string.
 ```
<button onClick={handleClick}>Click me</button>
```
- Can directly use an arrow function for inline event handlers:
 ```
<button onClick={() => setIsShown(prev => !prev)}>Toggle</button>
```

## Handling Forms
- When submitting a form, can use the action={function}.
- Use FormData to access form field values.
```
function handleSubmit(formData) {
  const newIngredient = formData.get("ingredient");
}
```

## Pure Functions
- Given the same props or state, the component will always return
  the same content, or UI
- Rendering and re-rendering a component will never have any kind
  of side effect on an outside system

## "(out)side effect" in React
- Any code that affects or interacts with an outside system
- local storage, API, websockets, DOM manipulation

## useRef Hook
- Provides a way to reference DOM nodes directly.

- Does not cause re-renders.

- Common uses:

1. Focus control

2. Scrolling

3. Holding mutable values
```
const inputRef = useRef(null)
useEffect(() => {
    inputRef.current.focus()
}, [])
```

## useEffect Hook
- []: Runs once after the initial render

- [count]: Runs every time count changes

Used for:

- API calls

- DOM interactions

- Adding/removing event listeners

- Side-effects cleanup
```
useEffect(() => {
    // effect code
}, [//dependency])
```

**Auto Focus with useRef**
Improves accessibility and user experience:
```
const buttonRef = useRef(null)
useEffect(() => {
  if (gameWon) buttonRef.current.focus()
}, [gameWon])
```

## useReducer Hook
useReducer 类似于 useState，但它使用 reducer 函数 来处理状态变化，而不是直接调用 setState。
tsx
```
const [state, dispatch] = useReducer(reducer, initialState);
```
- state：就像 useState 的状态值
- dispatch(action)：你发出的命令
- reducer(state, action)：一个纯函数，返回新的 state
- initialState：初始状态



## Updating Object Arrays in State
Use .map() and return updated or unchanged objects:
```
setDice(oldDice =>
  oldDice.map(die =>
    die.id === id ? { ...die, isHeld: !die.isHeld } : die
  )
)
```

## Generating Arrays of Objects
```
function generateAllNewDice() {
  return new Array(10).fill().map(() => ({
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid()
  }))
}
```

## Race Condition
A race condition occurs when two or more operations access shared data and try to change it at the same time, but the final result depends on the timing of their execution. This can lead to unpredictable behavior or bugs, especially in asynchronous environments like JavaScript or multithreaded systems.

**How AbortController Helps**

AbortController is a browser API that lets you cancel a fetch request before it completes, helping you prevent race conditions caused by outdated or overlapping requests. When users type quickly in a search box, you might send multiple API requests. If earlier (outdated) requests return later than newer ones, your UI will show incorrect results. AbortController can cancel the previous request before starting a new one.
```
let controller;

const fetchData = async (query) => {
  // Cancel previous request
  if (controller) controller.abort();

  controller = new AbortController();
  const signal = controller.signal;

  try {
    const res = await fetch(`https://api.com/search?q=${query}`, { signal });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Previous request aborted");
    } else {
      console.error("Fetch error:", err);
    }
  }
};
```

# Redux-Learning

## Hooks

### useSelector: 它用来 读取 Redux store 中的状态。
- 从 Redux 中 读取状态
- UI 渲染部分

### useDispatch: 它用来 派发（dispatch）action，修改 Redux 中的状态。
- 向 Redux 发送 action 改状态
- 用户交互回调中

## API in Redux: Thunk
	1.	处理 API 请求（比如登录、加载数据）
	2.	根据 state 条件 dispatch 不同的 action
	3.	延迟执行 / 执行副作用操作
 
 ```
dispatch(async (dispatch, getState) => {
  const res = await fetch(...);
  const data = await res.json();
  dispatch({ type: "account/deposit", payload: data });
});
```
