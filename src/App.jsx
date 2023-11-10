import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mode from './pages/mode';
import AppLayout from './ui/app-layout';
import Home from './pages/home';
import Interest from './pages/interest';
import TravelDistance from './pages/travel-distance';
import GlobalStyles from './styles/GlobalStyles';
import Result from './pages/result';

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/mode',
        element: <Mode />,
      },
      {
        path: '/interest',
        element: <Interest />,
      },
      {
        path: '/travel-distance',
        element: <TravelDistance />,
      },
      {
        path: 'result',
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
