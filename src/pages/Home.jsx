import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import HighestRatedReviews from "../components/HighestRatedReviews ";
import NewGames from "../components/NewGames";
import PopularGames from "../components/PopularGames";
import ReviewsVideoSection from "../components/ReviewsVideoSection ";


const Home = () => {
    return (
      <div className="container mx-auto py-8">
        <Helmet>
          <title>Home Page || GameScope</title>
        </Helmet>
        <div>
          <Banner></Banner>
          <HighestRatedReviews></HighestRatedReviews>
          {/* <NewGames></NewGames> */}
          <PopularGames></PopularGames>
          <Contact></Contact>
          {/* <ReviewsVideoSection></ReviewsVideoSection> */}
        </div>
      </div>
    );
};

export default Home;