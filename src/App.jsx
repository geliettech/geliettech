import { BrowserRouter, Routes, Route } from "react-router"
import {Home} from "./pages/Home"
import NotFound from "./pages/NotFound"
import { ThemeProvider } from "./context/ThemeProvider"

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
