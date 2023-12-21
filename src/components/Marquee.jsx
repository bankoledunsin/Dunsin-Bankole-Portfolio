/* eslint-disable react/prop-types */

const Marquee = ({ text, textClassName, textStyle }) => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {[1, 2, 3, 4, 5].map((x) => (
          <span key={x} className={textClassName} style={textStyle}>
            {text}
          </span>
        ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        {[1, 2, 3, 4, 5].map((x) => (
          <span key={x} className={textClassName}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
