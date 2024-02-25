import CreatePage from "./pages/CreatePage"
import { TablePage } from "./pages/TablePage"

export const publicRoutes = [
    {
        path: '/main',
        Component: CreatePage
    },
    {
        path: '/table',
        Component: TablePage
    },
    
    
]