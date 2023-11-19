const AppHeader = () => {
  const LINKS = [
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
    { text: "Hire Me", href: "#hire" },
  ];

  return (
    <header className="bg-white rounded-lg h-16 shadow-lg flex items-center fixed gap-14 top-3 left-4 right-4 text-sm px-9 z-10">
      <h1 className="font-bold">DUNSIN BANKOLE</h1>
      <p>PRODUCT DESIGNER CREATING EXPERIENCES THAT ACTUALLY WORK</p>
      <ul className="ml-auto uppercase flex gap-6">
        {LINKS.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default AppHeader;
