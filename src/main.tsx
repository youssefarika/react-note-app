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
    path: '/:cardId',
    element: <CardInfoWithData />,
  },
]);

function CardInfoWithData() {
  const { cardId } = useParams<{ cardId: string }>();
  const item = store.getState().data.find((item) => item.title === cardId);
  return <CardInfo item={item} />;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
