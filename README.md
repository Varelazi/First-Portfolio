# Ilene's Web Portfolio Renaissance Theme 

## React Router Dom
- Install React Router Dom
- Index.js should look like this:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

## Navbar
- Included job title in the navbar to showcase to user what I do
- Keeping the opacity background because it helps the user read more clearly

## Landing Page
- Created landing page to showcase my name and me.
- Includes WHO I am as a person

## About Me
- About me has information about who I am as a software developer. 
- Includes my skills
- My job for software development
- Another photo of me

## Projects