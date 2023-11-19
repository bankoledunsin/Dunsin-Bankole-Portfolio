const HeroSection = () => {
  return (
    <section
      className="bg-black h-screen pt-40 relative font-serif bg-contain"
      style={{ backgroundImage: `url(/lines.svg)`, backgroundPositionY: 500 }}
    >
      <div className="overflow-x-hidden text-white overflow-y-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <h2 className="text-[200px] font-black text-black leading-[0.9]" style={{ textShadow: "0 0 3px white" }}>
            DUNSIN BANKOLE &nbsp; DUNSIN BANKOLE
          </h2>
        </div>
        <div className="animate-marquee-reverse whitespace-nowrap">
          <h2 className="text-[200px] font-black leading-[0.8]">DUNSIN BANKOLE &nbsp; DUNSIN BANKOLE</h2>
        </div>
        <div className="animate-marquee whitespace-nowrap">
          <h2 className="text-[200px] font-black text-black leading-[0.9]" style={{ textShadow: "0 0 3px white" }}>
            DUNSIN BANKOLE &nbsp; DUNSIN BANKOLE
          </h2>
        </div>

        <img src="/dunsin.png" className="h-full absolute bottom-0" />
      </div>
    </section>
  );
};

export default HeroSection;
