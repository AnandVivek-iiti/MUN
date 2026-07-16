import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/navbar";
import Footer from "./components/footer"; 
import Spinner from './components/Spinner';


// Lazy load your page components
const HomePage = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Committees = lazy(() => import("./pages/Committees"));
const Secretariat = lazy(() => import("./pages/Secretariat"));
const Gallery = lazy(() => import("./pages/Gallery"));
const WhyUs = lazy(() => import("./pages/Why-Us"));
const PastEditions = lazy(() => import("./pages/PastEditions"));
const Sponsors = lazy(() => import("./pages/Sponsors"));

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faqs" element={<AboutUs />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/secretariat" element={<Secretariat />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/why-us" element={<WhyUs />} /> */}
            <Route path="/past-editions" element={<PastEditions />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;