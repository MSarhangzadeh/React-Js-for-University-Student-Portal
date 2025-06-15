import { Link } from "react-router-dom";

// fuck off mahyar u dont need to edit this

const title = "About EduVerse University";
const desc = "EduVerse University is a globally recognized institution committed to excellence in education, research, and innovation. Our campus fosters intellectual curiosity and leadership in every field.";

const ItemTitle = "Academics";
const quickTitle = "Quick Links";
const tweetTitle = "Recent News";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: '123 University Ave, Cambridge, MA',
    },
    {
        iconName: 'icofont-phone',
        text: '+1 (617) 123-4567',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@eduverse.edu',
    },
];

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
];

const ItemList = [
    { text: 'Undergraduate Programs', link: '#' },
    { text: 'Graduate Programs', link: '#' },
    { text: 'Departments', link: '#' },
    { text: 'Research', link: '#' },
    { text: 'Library', link: '#' },
    { text: 'Admissions', link: '#' },
];

const quickList = [
    { text: 'Campus Life', link: '#' },
    { text: 'Events', link: '#' },
    { text: 'Newsroom', link: '#' },
    { text: 'Alumni', link: '#' },
    { text: 'Privacy Policy', link: '#' },
    { text: 'Terms of Use', link: '#' },
];

const tweetList = [
    {
        iconName: 'icofont-news',
        desc: <p><strong>@EduVerse</strong> New AI research center inaugurated. Learn more about our vision for the future. <a href="#">#Research</a></p>,
    },
    {
        iconName: 'icofont-news',
        desc: <p><strong>@EduVerse</strong> Congrats to the Class of 2025! 🎓 Full convocation highlights available now. <a href="#">#Graduation</a></p>,
    },
];

const footerbottomList = [
    { text: 'Faculty', link: '#' },
    { text: 'Staff', link: '#' },
    { text: 'Students', link: '#' },
    { text: 'Alumni', link: '#' },
    { text: 'Research', link: '#' },
];

const Footer = () => {
    return (
        <footer className="style-2">
            <div className="footer-top dark-view padding-tb">
                <div className="container">
                    <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title"><h4>{title}</h4></div>
                                        <div className="content">
                                            <p>{desc}</p>
                                            <ul className="lab-ul office-address">
                                                {addressList.map((val, i) => (
                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                ))}
                                            </ul>
                                            <ul className="lab-ul social-icons">
                                                {socialList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title"><h4>{ItemTitle}</h4></div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {ItemList.map((val, i) => (
                                                    <li key={i}><a href={val.link}>{val.text}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title"><h4>{quickTitle}</h4></div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {quickList.map((val, i) => (
                                                    <li key={i}><a href={val.link}>{val.text}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="footer-item twitter-post">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title"><h4>{tweetTitle}</h4></div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {tweetList.map((val, i) => (
                                                    <li key={i}>
                                                        <i className={val.iconName}></i>
                                                        {val.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <p>&copy; 2025 <Link to="/">EduVerse University</Link> | Designed by <a href="https://github.com/MSarhangzadeh" target="_blank" rel="noreferrer">M Sarhangzadeh</a></p>
                        <div className="footer-bottom-list">
                            {footerbottomList.map((val, i) => (
                                <a href={val.link} key={i}>{val.text}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
