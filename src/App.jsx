import React from "react";
import { CTA, Subscription, NavBar } from "./components";
import {
  FAQS,
  Footer,
  Testimonials,
  SocialMedia,
  Arshakir,
  Header,
  Followers,
  Brand,
} from "./container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <Arshakir />
      <Followers />
      <SocialMedia />
      <Testimonials />
      <FAQS />
      <Subscription />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
