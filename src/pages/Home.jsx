import Banner from "../components/Banner";
import HighestRatedReviews from "../components/HighestRatedReviews ";
import NewGames from "../components/NewGames";
import PopularGames from "../components/PopularGames";


const Home = () => {
    return (
        <div className="container mx-auto py-8">
            
            <div>
                <Banner></Banner>
                <HighestRatedReviews></HighestRatedReviews>
                <NewGames></NewGames>
                <PopularGames></PopularGames>
            </div>
        </div>
    );
};

export default Home;