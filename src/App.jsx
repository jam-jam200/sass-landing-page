import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CTA, Subscription, NavBar, Brand } from "./components";
import {
  FAQS,
  Footer,
  Testimonials,
  SocialMedia,
  Arshakir,
  Header,
  Followers,
} from "./container";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
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
