import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import RootLayout from '../Pages/RootLayout';

const AllRoutes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [{index: true, element: <HomePage />}],
        },
    ]);
    return <RouterProvider router={routes}></RouterProvider>;
};

export default AllRoutes;
