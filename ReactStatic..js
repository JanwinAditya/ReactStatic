import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <main>
        <img src="react-logo.png" width="40px" />
        <h1>Fun Facts about React</h1>
            <ul>
                <li>Was released in 2013</li>
                <li>Was orignally created by Jordan Walke</li>
                <li>Has over 100k stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousnads of apps ,including mobile apps</li>
            </ul>
    </main>
)