import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { MantineProvider } from "@mantine/core"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyle: (_theme) => ({
          body: {
            width: "100v",
            height: "100vh",
          },
          "#root": {
            width: "100%",
            height: "100%",
          },
        }),
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
