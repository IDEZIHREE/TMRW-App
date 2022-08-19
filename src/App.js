import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import './App.css';
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import TinderCardsNew from './TinderCardsNew';
import SwipeButtons from './SwipeButtons';
import Profile from "./Profile";
import Settings from "./Settings";
import Editprofile from './Editprofile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="chat/:person" element={<ChatScreenFunction />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="profile/settings" element={<SettingsPage />} />
        <Route path="profile/editprofile" element={<EditProfilePage />} />
      </Routes>
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
        <TinderCardsNew />
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

function ProfilePage () {
  return (
    <main>
        <Profile />
    </main>
  );
}
///Settings Pages

function SettingsPage () {
  return (
    <main>
      <Settings />
    </main>
  );
}



function EditProfilePage () {
  return (
    <main>
      <Editprofile />
    </main>
  );
}




export default App;
