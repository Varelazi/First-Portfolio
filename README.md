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
- Make sure that in the App.js the navigations should include
```js
import { Routes, Route } from "react-router-dom"

function App() {
  return(
    <>
      <Routes>
        <Route path="/pathName" element={<Component />}>
      </Routes>
    <>
  )
}
```

## Navbar
- Have a logo of my initials, main IV
- Work, About, and Contact me sections for the user to navigate my work, who I am, and a contact me page so others can send me an email. 

## Footer
- All pages will include a footer of the project title (Portfolio) with my name to show that I created it. 
- Also include links to LinkedIn and Github

## Work/Landing Page
- Includes small intro to who I am as a person in tech and image.
- Includes my projects 

## About Me Page
- Section to showcase my background and testimonies

## Contaact Page
- A page where the user can send me an email from a form on the page. 
- Followed this video to help setup emailjs
https://www.youtube.com/watch?v=NgWGllOjkbs
- Install emailjs
```bash
$ npm install @emailjs/browser --save
```
- Setting up emailjs. 
```js
// Setup this:
const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
// Inside the function but before the return. Like this:
import React from "react"

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <>
            <div className="contact-container">

            </div>
        </>
    )
}

export default ContactMe
// Replace these:
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
// With the correct information from the website. Ex:
  emailjs.sendForm('service_zd7mdnj', 'template_4nh7zb4', form.current, 'DKRr8FnTUU6nMOtkQ')
// Add this:
  e.target.reset()
// To the end of the .then statement
```
