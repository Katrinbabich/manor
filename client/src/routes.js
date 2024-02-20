import {
    ADMIN_ROUTE, BANK_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE, HISTORY_ROUTE,
    LOGIN_ROUTE, RASPISANIE_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    TAXI_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Admin from "./pages/Admin";
import Taxi from "./pages/Taxi";
import Raspisanie from "./pages/Raspisanie";
import Istoria from "./pages/Istoria";
import Bank from "./pages/Bank";

export const authRoutes = [
    {
        path: ADMIN_ROUTE, //НАЗВАНИЯ В utils/consts.js
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop

    },
    {
        path: LOGIN_ROUTE,
        Component: Auth

    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth

    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },


    {
        path: TAXI_ROUTE,
        Component: Taxi
    },
    {
        path: RASPISANIE_ROUTE,
        Component: Raspisanie
    },
    {
        path: HISTORY_ROUTE,
        Component: Istoria
    },
    {
        path: BANK_ROUTE,
        Component: Bank
    },
]