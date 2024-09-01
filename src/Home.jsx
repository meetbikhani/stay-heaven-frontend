import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
// import axios from "./utils/axios";

const Landing = () => {
  const navigate = useNavigate();
  const [showAllCities, setShowAllCities] = useState(false);

  const toggleShowAllCities = () => {
    setShowAllCities(!showAllCities);
  };
  const [hotels, setHotels] = useState([]);
  // const gethotels = async ()=>{
  //   try {
  //     const response = await axios('/hotel/hotels');
  //     const data = await response.json();
  //     console.log(data);
  //     setHotels(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(()=>{
  //   gethotels();
  // },[])

  const cities = [
    {
      name: "Mumbai",
      image:
        "https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png",
    },
    {
      name: "Delhi-NCR",
      image: "https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png",
    },
    {
      name: "Bengaluru",
      image: "https://in.bmscdn.com/m6/images/common-modules/regions/bang.png",
    },
    {
      name: "Hyderabad",
      image: "https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png",
    },
    {
      name: "Ahmedabad",
      image: "https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png",
    },
    {
      name: "Chandigarh",
      image: "https://in.bmscdn.com/m6/images/common-modules/regions/chd.png",
    },
    {
      name: "Chennai",
      image: "https://in.bmscdn.com/m6/images/common-modules/regions/chen.png",
    },
    {
      name: "Pune",
      image: "https://in.bmscdn.com/m6/images/common-modules/regions/pune.png",
    },
    {
      name: "Kolkata",
      image: "https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png",
    },
    {
      name: "Kochi",
      image: "https://in.bmscdn.com/m6/images/common-modules/regions/koch.png",
    },
  ];

  const internationalCities = [
    { name: "Nagpur" },
    { name: "Bhopal" },
    { name: "Agartala" },
    { name: "Ludhiana" },
    { name: "Gwalior" },
    { name: "Kanpur" },
    { name: "Lucknow" },
    { name: "Dispur" },
    { name: "Srinagar" },
    { name: "Daman" },
    { name: "Gandhinagar" },
    { name: "Vadorara" },
    { name: "Jaipur" },
    { name: "Jodhpur" },
    // Add more international cities here
  ];

  const allCities = [...cities, ...internationalCities];

  return (
    <>
      <div className="landing">
        <div className="landing__search-container">
          <input
            type="text"
            className="landing__search-input"
            placeholder="Search Destination"
          />
          <button className="landing__search-button">Search</button>
        </div>
        <div className="landing__hero">
          <div className="landing__city-container">
            <button className="landing__detect-location-button">
              <img
                src="https://png.pngtree.com/png-clipart/20230123/original/pngtree-flat-red-location-sign-png-image_8927579.png"
                alt="Location Icon"
              />
              Detect my location
            </button>
            <div className="landing__city-grid">
              {cities.map((city, index) => (
                <div key={index} className="landing__city-item">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="landing__city-image m-auto"
                  />
                  <p className="landing__city-name">{city.name}</p>
                </div>
              ))}
            </div>
            <button
              className="landing__view-all-cities"
              onClick={toggleShowAllCities}
            >
              View All Cities
            </button>
          </div>
        </div>
        <div className="landing__grid-container">
          <div className="landing__grid">
            {hotels.map((property) => (
              <div key={property.id} className="landing__grid-item" onClick={() => navigate("/hotel")}>
                <img
                  src={property.image}
                  alt={property.title}
                  className="landing__grid-item-image"
                />
                <div className="landing__grid-item-content flex flex-col gap-1">
                  <div className="text-lg font-bold">{property.title}</div>
                  <div >{property.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showAllCities && (
        <div className="landing__modal">
          <div className="landing__modal-content">
            <span
              className="landing__modal-close"
              onClick={toggleShowAllCities}
            >
              &times;
            </span>
            <div className="landing__modal-grid">
              {allCities.map((city, index) => (
                <div key={index} className="landing__city-item">
                  <p className="landing__city-name">{city.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;
