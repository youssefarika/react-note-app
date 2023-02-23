import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Create from './components/Create';
import { store } from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new",
    element: <Create />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    
      <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>,
      </React.StrictMode>,
)
