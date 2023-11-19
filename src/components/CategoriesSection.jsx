const CategoriesSection = () => {
  const CATEGORIES = [
    { name: "Photography", color: "#05563E" },
    { name: "Blog & Features", color: "#153465" },
    { name: "Playlists", color: "#590C65" },
  ];

  return (
    <section className="p-5 grid grid-cols-2 gap-5 text-white">
      {CATEGORIES.map((category, y) => (
        <div
          key={category.name}
          className={`px-8 py-3 ${!y ? "col-span-2" : ""} rounded-lg h-[316px] flex items-end text-5xl cursor-pointer`}
          style={{ background: category.color }}
        >
          {category.name}
        </div>
      ))}
    </section>
  );
};

export default CategoriesSection;
