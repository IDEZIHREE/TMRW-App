import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import TinderCardsNew from './TinderCardsNew';
import SwipeButtons from './SwipeButtons';
import Profile from "./Profile";
import Settings from "./Settings";
import Editprofile from './Editprofile';
import Email from "./Email";
import Phonenumber from "./Phonenumber";
import Religion from "./Religion";
import Height from "./Height";
import Signin from "./Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="chat/:person" element={<ChatScreenFunction />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="profile/settings" element={<SettingsPage />} />
        <Route path="profile/settings/email" element={<EmailPage />} />
        <Route path="profile/settings/phonenumber" element={<PhoneNumberPage />} />
        <Route path="profile/editprofile" element={<EditProfilePage />} />
        <Route path="profile/editprofile/religion" element={<ReligionPage />} />
        <Route path="profile/editprofile/height" element={<HeightPage />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
      <main>
        <TinderCardsNew />
        <SwipeButtons />
      </main>
  );
}

function SignInPage () {
  return (
    <main>
      <Signin />
    </main>
  );
}

//ChatPages
function Chat () {
  return (
    <main>
      <Chats />
    </main>
  )
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

//Settings Pages
function SettingsPage () {
  return (
    <main>
      <Settings />
    </main>
  );
}

function EmailPage () {
  return (
    <main>
      <Email />
    </main>
  );
}

function PhoneNumberPage () {
  return (
    <main>
      <Phonenumber />
    </main>
  );
}


//EditProfile Pages
function EditProfilePage () {
  return (
    <main>
      <Editprofile />
    </main>
  );
}

function ReligionPage () {
  return (
    <main>
      <Religion />
    </main>
  );
}

function HeightPage () {
  return (
    <main>
      <Height />
    </main>
  );
}

export default App;
