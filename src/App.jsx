import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CTA, Subscription, NavBar, Brand, Copyright } from "./components";
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
      <Copyright />
    </div>
  );
}

export default App;
