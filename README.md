port # React-Learning

## Small difference compare to JS

- Component Name using PascalCase;
- className instad of class in JS;

## JSX Basic Knowledge 
- Fragment: <>...</>
e.g.
```return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
)
```
- export default: The export JavaScript keyword makes this function accessible outside of this file.
e.g.
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

