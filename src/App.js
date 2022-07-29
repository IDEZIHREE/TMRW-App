import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Profile from "./Profile";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="chat/:person" element={<ChatScreenFunction />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Chat () {
  return (
    <main>
      <Chats />
    </main>
  )
}

function Home() {
  return (
      <main>
        <TinderCards />
        <SwipeButtons />
      </main>
  );
}


function ChatScreenFunction() {
  return (
      <main>
        <ChatScreen />
      </main>
  );
}

function Profile () {
  return (
    <main>

    </main>
  );
}


export default App;
