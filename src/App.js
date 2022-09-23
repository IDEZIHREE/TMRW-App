import React from 'react';
import { Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import './App.css';
import TinderCardsNew from './TinderCardsNew';
import SwipeButtons from './SwipeButtons';
import Profile from "./Profile";
import Contactus from "./Contact";
import Premium from "./Premium";
import Filters from "./Filters";
//Messages Imports
import ChatPreview from "./Messages/ChatPreview";
import MessagesPage from "./Messages/MessagesPage";
//Settings Imports
import Settings from "./SettingsPage/Settings";
import Email from "./SettingsPage/Email";
import Phonenumber from "./SettingsPage/Phonenumber";
import Location from "./SettingsPage/Location";
import Blocked from "./SettingsPage/Blocked";
    //Legal
import TermsOfService from "./SettingsPage/LegalFolder/TOS";
import License from "./SettingsPage/LegalFolder/License";
import PrivacyPolicy from "./SettingsPage/LegalFolder/PrivacyPolicy";
import Cookies from "./SettingsPage/LegalFolder/Cookies";
//EditProfile Imports
import Editprofile from './EditProfilePage/Editprofile';
import Religion from "./EditProfilePage/Religion";
import Height from "./EditProfilePage/Height";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="chat" element={<CPreview />} />
        <Route path="chat/:person" element={<Messages />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/filters" element={<FiltersPage />} />
        <Route path="profile/settings" element={<SettingsPage />} />
        <Route path="profile/settings/email" element={<EmailPage />} />
        <Route path="profile/settings/phonenumber" element={<PhoneNumberPage />} />
        <Route path="profile/settings/location" element={<LocationPage />} />
        <Route path="profile/settings/TermsOfService" element={<TermsOfServicePage />} />
        <Route path="profile/settings/License" element={<LicensePage />} />
        <Route path="profile/settings/PrivacyPolicy" element={<PrivacyPolicyPage />} />
        <Route path="profile/settings/Cookies" element={<CookiesPage />} />
        <Route path="profile/settings/blocked" element={<BlockedPage />} />
        <Route path="profile/editprofile" element={<EditProfilePage />} />
        <Route path="profile/editprofile/religion" element={<ReligionPage />} />
        <Route path="profile/editprofile/height" element={<HeightPage />} />
        <Route path="profile/contactus" element={<ContactPage />} />
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
function PremiumPage (){
  return (
    <main>
      <Premium />
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
function FiltersPage () {
  return (
    <main>
      <Filters />
    </main>
  );
}
//ChatPages
function CPreview() {
  return (
    <main>
      <ChatPreview />
    </main>
  );
}

function Messages() {
  return (
      <main>
        <MessagesPage />
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

function LocationPage () {
  return (
    <main>
      <Location />
    </main>
  );
}

function BlockedPage () {
  return (
    <main>
      <Blocked />
    </main>
  );
}

function TermsOfServicePage () {
  return (
    <main>
      <TermsOfService />
    </main>
  );
}

function LicensePage () {
  return (
    <main>
      <License />
    </main>
  );
}
function PrivacyPolicyPage () {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}

function CookiesPage () {
  return (
    <main>
      <Cookies />
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

function ContactPage () {
  return (
    <main>
      <Contactus />
    </main>
  );
}


export default App;
