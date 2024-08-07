import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { SearchProvider } from './services/SearchProvider.jsx';
Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
)
