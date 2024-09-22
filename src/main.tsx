import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from "@mui/material";
import App from './App.tsx'
import './index.css'
import ColorModeProvider from './theme';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <CssBaseline />
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);
