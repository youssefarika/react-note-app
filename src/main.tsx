import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from 'react-router-dom';
import Create from './components/Create';
import { store } from './store/store';
import { Provider } from 'react-redux';
import CardInfo from './components/CardInfo';
import CardEdit from './components/CardEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/new',
    element: <Create />,
  },
  {
    path: '/:title',
    element: <CardInfoWithData />,
  },
  {
    path: '/:title/edit',
    element: <CardEditData />,
  },
]);

function CardInfoWithData() {
  const { title } = useParams<{ title: string }>();
  const item = store.getState().data.find((item) => item.title === title);
  return <CardInfo item={item} />;
}

function CardEditData() {
  const { title } = useParams<{ title: string }>();
  const item = store.getState().data.find((item) => item.title === title);
  return <CardEdit item={item} />;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
