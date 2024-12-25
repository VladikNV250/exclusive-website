import { Outlet } from "react-router-dom";
import "./global.scss";
import { Navbar } from "./modules/Navbar/Navbar";
import { Footer } from "./modules/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
    return (
        <Provider store={store}>
            {/* <div style={{height: "100%", width: "2px", background: "red", position: "absolute", left: "50%", transform: "translateX(-50%)"}} /> */}
            <Navbar />
            <Outlet />
            <Footer />
        </Provider>
    )
}
