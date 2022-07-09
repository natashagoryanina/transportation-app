import RequestFormPage from "../pages/RequestFormPage";
import RequestListPage from "../pages/RequestListPage";

export const mainRoutes = [
    {
        name: 'Create a request',
        path: '/',
        component: RequestFormPage,
    },
    {
        name: 'All requests',
        path: '/request-list',
        component: RequestListPage,
    }
];