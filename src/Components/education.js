import React from 'react';
import '../Css/education.css';

const AcademicJourney = () => {
  return (
    <div className="container">
      <h1>My Academic Journey</h1>
      <div className="card-container">
        <div className="card">
          <div className="icon">
            <span className="graduation-cap" />
          </div>
          <div className="details">
            <h3>2021 - 2025</h3>
            <h2>Bachelor of Technology in IT</h2>
            <p>
              <span className="location-icon" /> Sri Krishna College of Engineering and Technology
            </p>
            <p>
              Maintained a CGPA of 7.01 up to the completion of the Sixth semester.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <span className="school-building" />
          </div>
          <div className="details">
            <h3>2020 - 2021</h3>
            <h2>HSC</h2>
            <p>
              <span className="location-icon" /> PAAVAI VIDHYASHRAM CBSE SCHOOL
            </p>
            <p>
              Obtained a Higher Secondary Certification with a score of 76.3%.
            </p>
          </div>
        </div>

        {/* SSLC Card Centered */}
        <div className="ssl-card sslc-card">
          <div className="card">
            <div className="icon">
              <span className="school-building" />
            </div>
            <div className="details">
              <h3>2019 - 2020</h3>
              <h2>SSLC</h2>
              <p>
                <span className="location-icon" /> PAAVAI VIDHYASHRAM CBSE SCHOOL
              </p>
              <p>
                Successfully completed Secondary School Leaving Certification
                with a score of 73.2%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicJourney;
