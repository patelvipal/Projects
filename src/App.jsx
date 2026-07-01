import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import JobCard from "./components/JobCard";
import JobCategories from "./components/JobCategories";
import FeaturedCourses from "./components/FeaturedCourses";
import CareerCTA from "./components/CareerCTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <JobCard />
      <JobCategories />
      <FeaturedCourses />
      <CareerCTA />
    </>
  );
}

export default App;
