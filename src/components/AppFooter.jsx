const AppFooter = () => {
  const SOCIALS = [
    { name: "Behance", link: "https://www.behance.net/dunsinbankole" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/bankolejesudunsin/" },
    { name: "Twitter", link: "https://x.com/bvnkole" },
    { name: "Instagram", link: "https://instagram.com/bvnkole" },
    { name: "Dribble", link: "https://dribbble.com/dunsinbankole" },
  ];

  return (
    <footer id="contact" className="px-10 py-12 flex flex-wrap justify-center gap-6">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="border border-black rounded-2xl p-4 text-4xl flex items-center gap-6 cursor-pointer"
        >
          {social.name}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
      ))}
    </footer>
  );
};

export default AppFooter;
