import AboutUs from "../AboutUs";
import Banner from "../Banner/Banner";
import FamilySection from "../FamilySection";
import FaqSection from "../FaqSection";
import HomeQueries from "../HomeQueries";


const Home = () => {
    return (
        <div className=" bg-base-100">
            <Banner></Banner>
            <HomeQueries></HomeQueries>
            <AboutUs></AboutUs>
            <FamilySection></FamilySection>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;