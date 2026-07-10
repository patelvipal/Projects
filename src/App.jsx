import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import JobCard from "./components/JobCard/JobCard";
import JobCategories from "./components/JobCategories/JobCategories";
import FeaturedCourses from "./components/FeaturedCourses/FeaturedCourses";
import TopCompanies from "./components/TopCompanies/TopCompanies";
import LiveWebinars from "./components/LiveWebinar/LiveWebinars";
import Testimonials from "./components/Testimonials/Testimonials";
import CareerCTA from "./components/CareerCTA/CareerCTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <JobCard />
      <JobCategories />
      <FeaturedCourses />
      <TopCompanies />
      <LiveWebinars />
      <Testimonials />
      <CareerCTA />
      <Footer />
    </>
  );
}

export default App;
