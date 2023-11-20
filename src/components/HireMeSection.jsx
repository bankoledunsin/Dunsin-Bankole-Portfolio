const HireMeSection = () => {
  return (
    <section
      id="hire"
      className="min-h-[400px] md:min-h-[600px] p-6 bg-black text-white flex items-center justify-center md:justify-around"
    >
      <div className="w-full md:w-2/5">
        <p className="text-4xl md:text-5xl mb-4">Let’s design something meaningful for your product & brand</p>
        <button
          type="button"
          className="bg-[#787DFF] hover:bg-opacity-75 text-white text-lg md:text-xl font-bold py-4 px-8 rounded-2xl transition-all focus:ring-4 focus:ring-indigo-200"
        >
          Hit Me
        </button>
      </div>
      <div className="hidden md:block w-1/5" />
    </section>
  );
};

export default HireMeSection;
