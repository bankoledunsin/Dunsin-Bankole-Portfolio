const AboutSection = () => {
  return (
    <section id="about" className="min-h-[600px] py-6 bg-black text-white flex items-center justify-around">
      <div className="w-2/5">
        <h3 className="text-8xl font-medium">About</h3>
        <p className="text-3xl mb-3">
          Bankole is a product designer who loves both art and technology. He is obsessed with creating delightful
          experiences using Figma and Webflow. Hobbies include- Photography, Cocktails, Scrabble, Startups and Football.
        </p>
        <button
          type="button"
          className="bg-[#787DFF] hover:bg-opacity-75 text-white text-xl font-bold py-4 px-8 rounded-2xl transition-all focus:ring-4 focus:ring-indigo-200"
        >
          Hit Me
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
