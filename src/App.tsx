import { Routes, Route } from "react-router";
import Login from './components/Login'
import Register from './components/Register'
import Todolist from './components/Todo'
import ProtectedRoutes from "./common/ProtectedRoutes";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/todolist"
          element={
            <ProtectedRoutes>
              <Todolist />
            </ProtectedRoutes>
          }
        />
    </Routes>
    </>
  )
}

export default App
