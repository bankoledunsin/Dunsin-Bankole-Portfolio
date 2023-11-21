import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const CategoriesSection = () => {
  const CATEGORIES = [
    {
      name: "Photography",
      color: "#05563E",
      link: "https://www.behance.net/gallery/69193679/EX-MACHINA-Photography-Art-Direction",
    },
    {
      name: "Blog & Features",
      color: "#153465",
      link: [
        {
          text: "Medium",
          href: "https://medium.com/@jesudunsinbankole/the-10-best-album-covers-for-2019-in-nigerian-music-2f5f1e1f5d0e",
        },
        { text: "The Native Mag", href: "https://thenativemag.com/nigerian-album-arts-past-present/" },
      ],
    },
    { name: "Playlists", color: "#590C65", link: "https://streamlink.to/dunsinplaylists" },
  ];

  const isString = (item) => typeof item === "string";

  return (
    <section className="p-3 md:p-5 grid grid-cols-2 gap-3 md:gap-5 text-white">
      {CATEGORIES.map((category, y) =>
        isString(category.link) ? (
          <a
            key={category.name}
            className={`px-8 py-3 ${
              !y ? "col-span-2" : ""
            } rounded-lg h-60 md:h-[316px] flex items-end text-3xl md:text-5xl cursor-pointer`}
            style={{ background: category.color }}
            href={category.link}
            target="_blank"
            rel="noreferrer"
          >
            {category.name}
          </a>
        ) : (
          <Menu key={category.name} as="div" className="relative inline-block text-left">
            <Menu.Button
              as="div"
              className={`px-8 py-3 ${
                !y ? "col-span-2" : ""
              } rounded-lg h-60 md:h-[316px] flex items-end text-3xl md:text-5xl cursor-pointer`}
              style={{ background: category.color }}
            >
              {category.name}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 z-[5] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black/5 focus:outline-none">
                {category.link.map((item) => (
                  <Menu.Item key={item.text} as="div" className="px-1 py-1">
                    {({ active }) => (
                      <a
                        className={`${
                          active ? "bg-accent text-white" : "text-gray-900 font-medium"
                        } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.text}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        )
      )}
    </section>
  );
};

export default CategoriesSection;
