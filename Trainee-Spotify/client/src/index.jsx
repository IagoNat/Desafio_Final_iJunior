import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UserProvider } from './context/userContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './routes/home';
import { ArtistsPage } from './routes/artists';
import { PlaylistPage } from './routes/playlist';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/artists',
        element: <ArtistsPage />
      },
      {
        path: '/albums',
        element: <PlaylistPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
)

