import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        }
      })
        .then((res) => {
          if (res.status === 200) { return res.json() }
          else {
            setUser(null)
            throw new Error("authenticate has been failed")
          }
        })
        .then((responseObj) => {
          setUser(responseObj.user)
        })
        .catch((err) => {
          setUser(null)
          console.log(err)
        })
    }
    loadUser()
  }, [])
  console.log("user", user)
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
