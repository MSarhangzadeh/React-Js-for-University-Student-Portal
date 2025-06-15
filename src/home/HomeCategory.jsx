const subTitle = "Explore Our University";
const title = "Discover Life, Learning, and Opportunities";
const btnText = "Apply Now";


const categoryList = [
  {
    imgUrl: 'src/assets/images/category/univ.jpg', 
    imgAlt: 'Students gathered outdoors on campus',
    iconName: 'icofont-globe-alt',
    title: 'Campus Life',
  },
  {
    imgUrl: 'src/assets/images/category/univ.jpg', 
    imgAlt: 'Students relaxing under a tree with books',
    iconName: 'icofont-book-alt',
    title: 'Courses & Programs',
  },
  {
    imgUrl: 'src/assets/images/category/univ.jpg', 
    imgAlt: 'Students on grassy campus lawn',
    iconName: 'icofont-pen-alt-1',
    title: 'Apply Now',
  },
  {
    imgUrl: 'src/assets/images/category/univ.jpg', 
    imgAlt: 'Group of students sitting in campus setting',
    iconName: 'icofont-flask',
    title: 'Research & Innovation',
  },
  {
    imgUrl: 'src/assets/images/category/univ.jpg',  
    imgAlt: 'Campus student event scene',
    iconName: 'icofont-calendar',
    title: 'Events',
  },
  {
    imgUrl: 'src/assets/images/category/univ.jpg',
    imgAlt: 'Students walking on campus in spring',
    iconName: 'icofont-users-social',
    title: 'Alumni & Community',
  },
];


const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((val, i) => (
              <div className="col" key={i}>
                <div className="category-item">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={val.imgUrl} alt={val.imgAlt} />
                    </div>
                    <div className="category-content">
                      <div className="cate-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <h6>{val.title}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <button className="lab-btn" type="button"><span>{btnText}</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
