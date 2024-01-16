import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import DasboardApp from "./pages/AdminDashboard/App"
import LoginLandingPage from "./pages/LoginLandingPage/LoginLandingPage"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin/*' element={<DasboardApp />} />
        <Route path='/logdin' element={<LoginLandingPage />} />
        <Route path='/login' element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App
