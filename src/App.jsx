import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { AuthContextProvider } from "./context/AuthContext"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Account from "./pages/Account"
import ProtectecRoute from "./components/ProtectecRoute"



const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/account" 
                 element={<ProtectecRoute>
                            <Account />
                          </ProtectecRoute>}>
            </Route>
        </Routes>
      </AuthContextProvider>
      
    </>
  )
}

export default App