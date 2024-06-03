import { useEffect, useRef, useState } from "react";

const AppHeader = () => {
  const LINKS = [
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
    { text: "Hire Me", href: "#hire" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("hashchange", (e) => setActiveLink("#" + e.newURL.split("#")[1]));

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("hashchange", (e) => setActiveLink("#" + e.newURL.split("#")[1]));
    };
  }, []);

  return (
    <header className="bg-white rounded-lg h-16 shadow-lg flex items-center fixed gap-14 top-3 left-4 right-4 text-sm px-4 md:px-9 z-10">
      <h1 className="font-bold">
        <a href="/">DUNSIN BANKOLE</a>
      </h1>
      <p className="hidden md:block">PRODUCT DESIGNER CREATING EXPERIENCES THAT ACTUALLY WORK</p>
      <ul className="hidden ml-auto uppercase md:flex gap-6">
        {LINKS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`hover:text-accent font-medium ${activeLink === item.href ? "text-accent" : ""}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <div ref={dropdownRef} className="ml-auto md:hidden relative">
        <button className=" text-gray-900 rounded-md focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5">
            {LINKS.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className={`block px-4 py-2 text-gray-900 hover:bg-accent hover:text-white ${
                  activeLink === item.href ? "bg-accent text-white" : ""
                }`}
              >
                {item.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
