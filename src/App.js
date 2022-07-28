import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Home() {
  return (
      <main>
        <TinderCards />
      </main>
  );
}

function Chat() {
  return (
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
  );
}

export default App;
