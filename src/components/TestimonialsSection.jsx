import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const SLIDES = [
    {
      text: "He is a designer who is obsessed with details and the balance of form and function. His exceptional  creativity, and deep understanding of the principles of design has transformed several projects we worked on over the years.",
      name: "Dolapo Amusat",
      work: "Founder, WeTalkSound",
    },
    {
      text: "Dunsin is an exceptional designer/artist, he gives uncut attention to details on all projects. He is one of the very few designers I know for being passionately consistent and always improving their designs. He has a good working personality and he is definitely the man you need for your project(s).",
      name: "Folarin Akinloye",
      work: "FrontEnd Developer",
    },
    {
      text: "Probably the best Graphics designer I know. He is terrific at what he does. His ability to implement a client's thoughts into graphics is mind-blowing. Great work ethics too.",
      name: "Olumide Aderinwale",
      work: "Programme Manager",
    },
  ];

  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="testimonials" className="my-16 max-w-screen-xl mx-auto px-8 md:px-16">
      <h3 className="text-5xl font-bold mb-6 text-center">Testimonials</h3>
      <Slider ref={sliderRef} {...settings}>
        {SLIDES.map((item, index) => (
          <div key={index} className={`border-2 border-black p-8 rounded-[32px]`}>
            <p className="text-xl md:text-3xl mb-3">&ldquo;{item.text}&rdquo;</p>
            <h6 className="text-lg font-bold">{item.name}</h6>
            <p>{item.work}</p>
          </div>
        ))}
      </Slider>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          className={`border-4 border-black rounded-full h-12 w-12 inline-flex items-center justify-center`}
          onClick={goToPrevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
            <path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" />
          </svg>
        </button>
        <button
          className={`border-4 border-black rounded-full h-12 w-12 inline-flex items-center justify-center`}
          onClick={goToNextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
            <path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
