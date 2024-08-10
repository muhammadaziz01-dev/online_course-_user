import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const index = () => {
    return (
        <> 
            <Header />
            <main className=" min-h-[76vh] mt-[90px]">
                <Outlet />
            </main>
            <Footer/>
        </>
    );
};

export default index;