import React from "react";

// fuck off mahyar u dont need to edit this
const socialLinks = [
  { name: "Instagram", iconClass: "icofont-instagram", url: "https://instagram.com" },
  { name: "YouTube", iconClass: "icofont-youtube", url: "https://youtube.com" },
  { name: "X (Twitter)", iconClass: "icofont-twitter", url: "https://twitter.com" },
  { name: "LinkedIn", iconClass: "icofont-linkedin", url: "https://linkedin.com" },
  { name: "Facebook", iconClass: "icofont-facebook", url: "https://facebook.com" },
  { name: "Threads", iconClass: "icofont-wechat", url: "https://threads.net" },
  { name: "TikTok", iconClass: "icofont-music-note", url: "https://tiktok.com" },
  { name: "Telegram", iconClass: "icofont-paper-plane", url: "https://telegram.org" },
];

const SocialMediaBanner = () => {
  return (
    <div className="social-media-banner style-4 padding-tb">
      <div className="container text-center">
        <h1
          className="main-title"
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            color: "#000000",
            marginBottom: "1.5rem",
          }}
        >
          Study With Us
        </h1>
        <div
          className="social-icons"
          style={{
            fontSize: "2.5rem",
            gap: "1.5rem",
            display: "inline-flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {socialLinks.map(({ name, iconClass, url }, index) => {
            const color = index % 2 === 0 ? "#f1c40f" : "#3498db"; 
            const hoverColor = index % 2 === 0 ? "#d4ac0d" : "#217dbb"; 

            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                style={{ color, transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = color)}
              >
                <i className={iconClass}></i>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBanner;
