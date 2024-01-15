import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rismos from '../../assets/work/risingstar.png'
import Bartwebz from '../../assets/work/bartwebz.png'
import Manage from '../../assets/work/eben1.png'
import Nyametease from '../../assets/work/nyametease.png'

const Carousel = () => {
  // Sample carousel settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Rismos} alt="" />
      </div>
      <div>
        <img src={Bartwebz} alt="" />
      </div>
      <div>
        <img src={Nyametease} alt="" />
      </div>
      
    </Slider>
  );
};

export default Carousel;
