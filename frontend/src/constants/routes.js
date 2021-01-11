import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthPage } from '../components/AuthPage'
import { CreatePage } from '../components/CreatePage'
import { DetailPage } from '../components/DetailPage'
import { LinksPage } from '../components/LinksPage'

export const useRoutes = isAthenticated => {
    if (isAthenticated) {
        return (
            <Switch>
                <Route path="/links" exact><LinksPage /></Route>
                <Route path="/create" exact><CreatePage /></Route>
                <Route path="/detail/:id" exact><DetailPage /></Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact><AuthPage /></Route>
            <Redirect to="/" />
        </Switch>
    )
}






// export const LANDING = '/';
// export const SIGN_UP = '/signup';
// export const SIGN_IN = '/signin';
// export const HOME = '/home';
// export const ACCOUNT = '/account';
// export const USERS = '/users';
// export const PASSWORD_FORGET = '/pw-forget';
// export const CONTACTUS = '/contactus';
// export const CART = '/cart';
// export const SUBPAGE = '/submittedPage';
// export const MESSAGES = '/Messages';
// export const EDIT_INFO = '/Edit-info';
// export const CHECKOUT = '/Checkout';
// export const PRODUCTS = '/products';
// export const PAGE404 = '/Page404';
