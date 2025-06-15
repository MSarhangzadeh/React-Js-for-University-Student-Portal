import React, { useState } from "react";

// fuck off mahyar u dont need to edit this


const title = (
  <h2>
    Explore <span>Thousands</span> of Programs to Shape Your Future
  </h2>
);
const desc = "Best University in California for 5 Consecutive Years.";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "26000 Students",
  },
  {
    iconName: "icofont-notification",
    text: "#1 in California",
  },
  {
    iconName: "icofont-globe",
    text: "#22 in QS Ranking",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <input
              type="text"
              name="search"
              placeholder="Want to know more ???"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {bannerList.map((item, i) => (
              <li key={i}>
                <i className={item.iconName}></i> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
