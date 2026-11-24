import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WhiteLabelSolution from "./pages/WhiteLabelSolution";
import MT5GreyLabelSolution from "./pages/MT5GreyLabelSolution";
import "./App.css";
import ForexBrokerCRM from "./pages/ForexBrokerCRM";
import PropTradingTechnology from "./pages/PropTradingTechnology";
import ForexBrokerWebsiteDevelopment from "./pages/ForexBrokerWebsiteDevelopment";
import LiquidityTradingInfrastructure from "./pages/LiquidityTradingInfrastructure";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GlobalContactButtons from "./components/GlobalContactButtons";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/white-label-solution/"
            element={<WhiteLabelSolution />}
          />
          <Route
  path="/mt5-grey-label-solution/"
  element={<MT5GreyLabelSolution />}
/>

<Route
  path="/forex-broker-crm/"
  element={<ForexBrokerCRM />}
/>

<Route
  path="/prop-trading-technology/"
  element={<PropTradingTechnology />}
/>

<Route
  path="/forex-broker-website-development/"
  element={<ForexBrokerWebsiteDevelopment />}
/>

<Route
  path="/liquidity-trading-infrastructure/"
  element={<LiquidityTradingInfrastructure />}
/>
<Route path="/about" element={<About />} />

<Route path="/blog" element={<Blog />} />
<Route path="/contact/" element={<Contact />} />

        </Routes>
      </main>

      <Footer />
      <GlobalContactButtons />
    </BrowserRouter>
  );
}

export default App;