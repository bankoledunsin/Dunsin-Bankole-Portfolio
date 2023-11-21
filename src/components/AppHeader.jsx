import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AppHeader = () => {
  const LINKS = [
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
    { text: "Hire Me", href: "#hire" },
  ];

  return (
    <header className="bg-white rounded-lg h-16 shadow-lg flex items-center fixed gap-14 top-3 left-4 right-4 text-sm px-4 md:px-9 z-10">
      <h1 className="font-bold"><a href="/">DUNSIN BANKOLE</a></h1>
      <p className="hidden md:block">PRODUCT DESIGNER CREATING EXPERIENCES THAT ACTUALLY WORK</p>
      <ul className="hidden ml-auto uppercase md:flex gap-6">
        {LINKS.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
      <Menu as="div" className="relative inline-block text-left ml-auto md:hidden">
        <Menu.Button className="inline-flex w-full justify-center rounded-md font-medium text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {LINKS.map((item) => (
                <Menu.Item key={item.text}>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-accent text-white" : "text-gray-900 font-medium"
                      } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
};

export default AppHeader;
