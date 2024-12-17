import { Outlet } from "react-router-dom";
import "./global.scss";
import { Navbar } from "./modules/Navbar/Navbar";
import { Footer } from "./modules/Footer";

export default function App() {
    return (
        <>
            {/* <div style={{height: "100%", width: "2px", background: "red", position: "absolute", left: "50%", transform: "translateX(-50%)"}} /> */}
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
