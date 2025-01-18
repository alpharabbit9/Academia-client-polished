import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import AuthProvider from './Provider/AuthProivder.jsx'
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router}></RouterProvider>
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
