import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom';
import { OrganizationProvider } from './Components/OrganizationContext';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.render(
  <OrganizationProvider>
    <App />
  </OrganizationProvider>,
  document.getElementById('root')
);