import Banner from "../components/Banner";
import HighestRatedReviews from "../components/HighestRatedReviews ";


const Home = () => {
    return (
        <div className="container mx-auto py-8">
            
            <div>
                <Banner></Banner>
                <HighestRatedReviews></HighestRatedReviews>
            </div>
        </div>
    );
};

export default Home;