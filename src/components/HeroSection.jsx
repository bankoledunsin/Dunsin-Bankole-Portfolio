const HeroSection = () => {
  return (
    <section
      className="bg-black h-auto md:h-screen pt-40 relative font-serif bg-contain"
      style={{ backgroundImage: `url(/lines.svg)`, backgroundPositionY: 500 }}
    >
      <div className="overflow-x-hidden text-white overflow-y-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <h2
            className="text-9xl md:text-[200px] font-black text-raisan-black leading-[0.9]"
            style={{ textShadow: "0 0 3px white" }}
          >
            DUNSIN BANKOLE &nbsp; DUNSIN BANKOLE
          </h2>
        </div>
        <div className="animate-marquee-reverse whitespace-nowrap">
          <h2 className="text-9xl md:text-[200px] font-black leading-[0.8]">
            DUNSIN BANKOLE &nbsp; DUNSIN BANKOLE
          </h2>
        </div>
        <div className="animate-marquee whitespace-nowrap">
          <h2
            className="text-9xl md:text-[200px] font-black text-raisan-black leading-[0.9]"
            style={{ textShadow: "0 0 3px white" }}
          >
            DUNSIN BANKOLE &nbsp; DUNSIN BANKOLE
          </h2>
        </div>

        <img
          src="/db.png"
          className="md:h-full w-4/5 md:w-auto absolute bottom-0 right-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;
