import CreatePage from "./pages/CreatePage"
import DashBoardPage from "./pages/DashBoardPage"
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
    {
        path: '/dash',
        Component: DashBoardPage
    },
    
]