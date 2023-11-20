const AppHeader = () => {
  const LINKS = [
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
    { text: "Hire Me", href: "#hire" },
  ];

  return (
    <header className="bg-white rounded-lg h-16 shadow-lg flex items-center fixed gap-14 top-3 left-4 right-4 text-sm px-4 md:px-9 z-10">
      <h1 className="font-bold">DUNSIN BANKOLE</h1>
      <p className="hidden md:block">PRODUCT DESIGNER CREATING EXPERIENCES THAT ACTUALLY WORK</p>
      <ul className="hidden ml-auto uppercase md:flex gap-6">
        {LINKS.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
      <button className="ml-auto md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
    </header>
  );
};

export default AppHeader;
