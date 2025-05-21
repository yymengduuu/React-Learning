# React-Learning
## What is React?

React is a JavaScript library for building user interfaces, especially for single-page applications. It helps developers build fast, interactive UIs with reusable components and declarative code.

## 🔹 Key Characteristics:

- Component-based

- Declarative rendering

- Virtual DOM

- Unidirectional data flow

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

## useEffect Dependency Array
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

## Auto Focus with useRef
Improves accessibility and user experience:
```
const buttonRef = useRef(null)
useEffect(() => {
  if (gameWon) buttonRef.current.focus()
}, [gameWon])
```

