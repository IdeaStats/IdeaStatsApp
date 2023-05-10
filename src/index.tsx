import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Homepage from './components/Homepage';
import ChooseTemplate from './components/ChooseTemplate';
import AdPrompt from './components/AdPrompt';
import AdPromptSelected from './components/AdPromptSelected';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/choose-template" element={<ChooseTemplate />}></Route>
        <Route path="/ad-prompt" element={<AdPrompt />}></Route>
        <Route path="/ad-prompt-2" element={<AdPromptSelected />}></Route>
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
