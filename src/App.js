import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Channel from "./Pages/Channel";
import Explore from "./Pages/Explore";
import ExploreVideo from "./Pages/ExploreVideo";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Watch from "./Pages/Watch";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/explore" element={<Explore />} />
        <Route path='/explore/:name' element={<ExploreVideo />} />
        <Route path='/c/:channelName' element={<Channel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
