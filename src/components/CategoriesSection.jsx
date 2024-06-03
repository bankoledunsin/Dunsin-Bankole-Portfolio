import { useEffect, useRef, useState } from "react";

const CategoriesSection = () => {
  const CATEGORIES = [
    {
      name: "Photography",
      color: "#822e81",
      link: "http://link-www.behance.net/dunsinbankole",
    },
    {
      name: "Blog & Features",
      color: "#aa6373",
      link: [
        {
          text: "Medium",
          href: "https://medium.com/@jesudunsinbankole/the-10-best-album-covers-for-2019-in-nigerian-music-2f5f1e1f5d0e",
        },
        { text: "The Native Mag", href: "https://thenativemag.com/nigerian-album-arts-past-present/" },
      ],
    },
    { name: "Playlists", color: "#392061", link: "https://streamlink.to/dunsinplaylists" },
  ];

  const isString = (item) => typeof item === "string";

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="p-3 md:p-5 grid grid-cols-2 gap-3 md:gap-5 text-white relative">
      {CATEGORIES.map((category, y) =>
        isString(category.link) ? (
          <a
            key={category.name}
            className={`px-8 py-3 ${
              !y ? "col-span-2" : ""
            } rounded-lg h-60 md:h-[316px] flex items-end text-3xl md:text-5xl cursor-pointer relative`}
            style={{ background: category.color }}
            href={category.link}
            target="_blank"
            rel="noreferrer"
          >
            {category.name}
          </a>
        ) : (
          <div key={category.name} ref={dropdownRef} className="relative">
            <div
              style={{ background: category.color }}
              onClick={toggleMenu}
              className={`px-8 py-3 ${
                !y ? "col-span-2" : ""
              } rounded-lg h-60 md:h-[316px] flex items-end text-3xl md:text-5xl cursor-pointer`}
            >
              {category.name}
            </div>
            {isOpen && (
              <div className="absolute right-0 top-[75%] z-[5] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black/5 focus:outline-none">
                {category.link.map((item) => (
                  <div key={item} className="px-1 py-1">
                    <a
                      key={item.text}
                      className="hover:bg-accent hover:text-white text-gray-900 font-medium group flex w-full items-center rounded-md px-4 py-4 text-xl sm:text-2xl sm:px-8 md:text-3xl"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </section>
  );
};

export default CategoriesSection;
