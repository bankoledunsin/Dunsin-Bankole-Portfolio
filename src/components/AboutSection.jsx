const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-[500px] md:min-h-[600px] py-6 bg-black text-white flex items-center justify-around"
    >
      <div className="w-4/5 md:w-2/5">
        <h3 className="text-5xl md:text-8xl font-bold mb-2">About</h3>
        <p className="text-xl md:text-3xl mb-6">
          Bankole is a product designer who loves both art and technology. He is obsessed with creating delightful
          experiences using Figma and Webflow. Hobbies include- Photography, Cocktails, Scrabble, Startups and Football.
        </p>
        <a
          href="mailto:jesudunsinbankole@gmail.com"
          className="bg-accent hover:bg-opacity-75 text-white text-base md:text-xl font-bold py-4 px-8 rounded-2xl transition-all focus:ring-4 focus:ring-indigo-200"
        >
          Hit Me
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
