import AboutUs from "../AboutUs";
import Banner from "../Banner/Banner";
import HomeQueries from "../HomeQueries";


const Home = () => {
    return (
        <div className=" bg-base-100">
            <Banner></Banner>
            <HomeQueries></HomeQueries>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;