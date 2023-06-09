import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import ChooseTemplate from './components/ChooseTemplate';
import AdPrompt from './components/AdPrompt';
import AdPromptSelected from './components/AdPromptSelected';
import reportWebVitals from './reportWebVitals';
import RunAds from './components/RunAds';
import AnalyticsPage from './components/AnalyticsPage';
import GetStarted from './components/GetStarted';
import FinishedAd from './components/FinishedAd';

export default function App() {

  const [selectedAdTemplate, setSelectedAdTemplate] = useState({});
  const [adImgSrc, setAdImgSrc] = useState(process.env.REACT_APP_DEFAULT_AD_IMG);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />}></Route>
        <Route path="/choose-template" element={<ChooseTemplate />}></Route>
        <Route path="/ad-prompt" element={<AdPrompt adImgSrc={adImgSrc!} setAdImgSrc={setAdImgSrc} />}></Route>
        <Route path="/customize-ad" element={<AdPromptSelected adImgSrc={adImgSrc!} setAdImgSrc={setAdImgSrc} selectedAdTemplate={selectedAdTemplate} setSelectedAdTemplate={setSelectedAdTemplate} />}></Route>
        <Route path="/finished-ad" element={<FinishedAd selectedAdTemplate={selectedAdTemplate} />}></Route>
        {/* <Route path="/analytics" element={<AnalyticsPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
