import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const index = () => {
    return (
        <> 
            <Header />
            <main className=" min-h-[80vh]">
                <Outlet />
            </main>
            <Footer/>
        </>
    );
};

export default index;