import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useRegisteredWebinars } from "../../context/RegisteredWebinarsContext";

import { FaCalendarAlt, FaClock, FaVideo, FaUserFriends } from "react-icons/fa";

import "./MyWebinars.css";

function MyWebinars() {
  const { registeredWebinars } = useRegisteredWebinars();

  return (
    <>
      <Navbar />

      <section className="my-webinars-page">
        <div className="my-webinars-container">
          <h1>My Registered Webinars</h1>

          {registeredWebinars.length === 0 ? (
            <div className="empty-webinars">
              <h2>No Registered Webinars</h2>
              <p>Register for webinars to improve your skills.</p>
            </div>
          ) : (
            <div className="webinars-grid">
              {registeredWebinars.map((webinar) => (
                <div className="my-webinar-card" key={webinar.id}>
                  <img src={webinar.image} alt={webinar.title} />

                  <div className="webinar-info">
                    <h2>{webinar.title}</h2>

                    <p>🎤 {webinar.speaker}</p>

                    <p>🏢 {webinar.company}</p>

                    <div className="webinar-meta">
                      <span>
                        <FaCalendarAlt />
                        {webinar.date}
                      </span>

                      <span>
                        <FaClock />
                        {webinar.time}
                      </span>

                      <span>
                        <FaVideo />
                        {webinar.duration}
                      </span>

                      <span>
                        <FaUserFriends />
                        {webinar.registered}
                      </span>
                    </div>

                    <button className="registered-btn">Registered ✓</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MyWebinars;
