const text= "NEW is NEW"

const FallingText = () => {
  return (
    <h1 className="falling-text">
      {text.split("").map((char, i) => (
        i<3?(
          <span
          key={i}
          style={{ animationDelay: `${i * 0.2}s` }} // stagger letters
        >
          <b>{char === " " ? "\u00A0" : char}</b>
        </span>
        ):(
                    <span
          key={i}
          style={{ animationDelay: `${i * 0.2}s` }} // stagger letters
        >
          {char === " " ? "\u00A0" : char}
        </span>
        )
        
      ))}
    </h1>
  );
};

export default FallingText;
