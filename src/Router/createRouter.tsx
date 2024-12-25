import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import App from "@/App";
import { About } from "@/pages/about";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { SignUp } from "@/pages/sign-up";
import { LogIn } from "@/pages/log-in";
import { Wishlist } from "@/pages/wishlist";
import { Cart } from "@/pages/cart";
import { Account } from "@/pages/account";
import { CheckOut } from "@/pages/checkout";
import { Contact } from "@/pages/contact";
import CommonLoading from "@/components/CommonLoading/CommonLoading";
import { Product } from "@/pages/product";

export default function createRouter(): RouteObject {

    const NotFoundRoute = {
        path: "/*",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <NotFound />
        </Suspense>
    }

    const homeRoute = {
        path: "/",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <Home />
        </Suspense>
    }

    const aboutRoute = {
        path: "/about",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <About />
        </Suspense>
    }

    const signUpRoute = {
        path: "/sign-up",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <SignUp />
        </Suspense>
    }
    
    const logInRoute = {
        path: "/log-in",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <LogIn />
        </Suspense>
    }

    const wishlistRoute = {
        path: "/wishlist",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <Wishlist />
        </Suspense>
    }
    
    const cartRoute = {
        path: "/cart",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <Cart />
        </Suspense>
    }

    const accountRoute = {
        path: "/account",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <Account />
        </Suspense>
    }

    const checkOutRoute = {
        path: "/checkout",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <CheckOut />
        </Suspense>
    }

    const contactRoute = {
        path: "/contact",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <Contact />
        </Suspense>
    }

    const detailRoute = {
        path: "/product",
        element: 
        <Suspense fallback={<CommonLoading />}>
            <Product />
        </Suspense>
    }

    return {
        path: "/",
        element: <App />,
        children: [
            homeRoute,
            contactRoute,
            aboutRoute,
            logInRoute,
            signUpRoute,
            wishlistRoute,
            cartRoute,
            accountRoute,
            checkOutRoute,
            detailRoute,
            NotFoundRoute,
        ]
    }
}