import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/Navbar";

const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
    
    return(
        <>
            <NavBar />
            <section className="page">
                {isPageLoading ? <div className="loading" /> : <Outlet />}
            </section>
        </>
    );
};

export default HomeLayout;
