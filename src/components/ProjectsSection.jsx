const ProjectsSection = () => {
  const PROJECTS = [
    { name: "Dada Fitness - Branding, UX & UI Design", link: "" },
    { name: "Owo - Branding, UX & UI Design", link: "" },
    { name: "Afro Garage - Branding, Website", link: "" },
    { name: "Metavrsd - Website", link: "" },
    { name: "printx - Website", link: "" },
    { name: "Carte Cloud Delivery App - UX & UI Design", link: "" },
    { name: "Siti Pass - UX & UI Design", link: "" },
    { name: "Wetalksound - Website Design", link: "" },
  ];

  const TOOLS = ["Figma", "Webflow", "After Effects", "Adobe Photoshop", "Adobe Illustrator"];
  const INDUSTRIES = ["Fintech", "Crypto", "Fitness", "Saas", "Logistics"];
  const FIELDS = ["UI Design", "UX Research", "Branding", "Art Direction"];

  return (
    <section id="projects" className="py-10">
      <div className="overflow-x-hidden text-white overflow-y-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <h2 className="text-4xl md:text-6xl font-black text-black">
            PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS
          </h2>
        </div>
      </div>
      <div className="border-b-2 border-black mt-5 mb-2" />
      <div className="flex justify-end">
        <div className="w-4/5 md:w-1/3 grid grid-cols-3 py-9 text-xs">
          <div>
            <h4 className="text-sm mb-2">TOOLS</h4>
            {TOOLS.map((tool) => (
              <p key={tool}>{tool}</p>
            ))}
          </div>
          <div>
            <h4 className="text-sm mb-2">INDUSTRIES</h4>
            {INDUSTRIES.map((industry) => (
              <p key={industry}>{industry}</p>
            ))}
          </div>
          <div>
            <h4 className="text-sm mb-2">FIELDS</h4>
            {FIELDS.map((field) => (
              <p key={field}>{field}</p>
            ))}
          </div>
        </div>
      </div>
      <ul>
        {PROJECTS.map((project) => (
          <li
            key={project.name}
            className="border-bottom border-b border-black px-8 md:px-24 py-6 flex items-center justify-between gap-8 text-xl md:text-3xl font-light cursor-pointer"
          >
            {project.name}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 md:h-10 md:w-10 flex-shrink-0">
              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
