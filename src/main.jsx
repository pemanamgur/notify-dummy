// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// // import { ClerkProvider } from '@clerk/clerk-react';
// import RootLayout from './layouts/Root-Layout.jsx';
// // import IndexPage from './routes/index.jsx';
// import ContactPage from './routes/contact.jsx';
// import DashboardLayout from './layouts/dashboard-layout.jsx';
// import DashboardPage from './routes/dashboard.jsx';
// import App from './App.jsx'
// import SignInPage from './routes/sign-in.jsx'
// import SignUpPage from './routes/sign-up.jsx'
// import Navbar from './component/Navbar.jsx';

// Import your publishable key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// const AppWrapper = () => {
//   const router = createBrowserRouter([
//     {
//       element: <RootLayout />,
//       children: [
//         { path: "/", element: <Navbar/> },
//         { path: "/sign-in", element: <SignInPage /> },
//         { path: "/sign-up", element: <SignUpPage /> },
//         { path: "/contact", element : <ContactPage /> },
//         {
//           element: <DashboardLayout />,
//           children: [{ path: "/dashboard", element: <DashboardPage /> }],
//         },
//       ],
//     },
//   ]);

//   if (!PUBLISHABLE_KEY) {
//     throw new Error("Missing Publishable Key");
//   }

//   return (

//       <RouterProvider router={router}>
//         {/* Your entire application components go here */}
//         {/* For example: */}
//         <App />
//       </RouterProvider>

//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<AppWrapper />);
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/Root-Layout.jsx';
import Navbar from './component/Navbar.jsx';
import DashboardLayout from './layouts/dashboard-layout.jsx';
import DashboardPage from './routes/Dashboard.jsx';
import SignInPage from './routes/sign-in.jsx';
import SignUpPage from './routes/sign-up.jsx';
import ContactPage from './routes/Contact.jsx';
import AboutPage from './routes/About.jsx'; // Import the new component


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const AppWrapper = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <Navbar /> },
        { path: "/sign-in", element: <SignInPage /> },
        { path: "/sign-up", element: <SignUpPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/dashboard", element: <DashboardLayout /> },
        { path: "/dashboard", element: <DashboardPage /> },
        { path: "/about", element: <AboutPage /> }, // Add the new route for About page
      ],
    },
  ]);

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <RouterProvider router={router}>
      {/* Your entire application components go here */}
      {/* For example: */}
      <App />
    </RouterProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppWrapper />);
