import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mode from './pages/Mode';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Interest from './pages/Interest';
import TravelDistance from './pages/TravelDistance';
import GlobalStyles from './styles/GlobalStyles';

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
