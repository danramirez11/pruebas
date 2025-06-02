
import { createRoot } from 'react-dom/client'
import {RouterProvider} from'react-router-dom'
import routes from './Routes/Navigation.tsx'
import './tailwind.css';

createRoot(document.getElementById('root')!).render(
  
    <RouterProvider router={routes} />
   
)
