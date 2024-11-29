import { Outlet } from "react-router-dom";
import "./global.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TopHeader from "./components/TopHeader/TopHeader";

export default function App() {
    return (
        <>
            {/* <div style={{height: "100%", width: "2px", background: "red", position: "absolute", left: "50%", transform: "translateX(-50%)"}} /> */}
            <TopHeader />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
