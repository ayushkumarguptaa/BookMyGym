import { useState, useEffect } from "react";
import homeVideo from "../src/assets/home_video.mp4";

function Identitical() {
  const words = ["Welcome", "To", "Home", "Page"]; // <-- replaced "MySite" with two words
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // change every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100vw] h-[70vh] overflow-hidden relative">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src={homeVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded transition-opacity duration-500">
          {words[index]}
        </h1>
      </div>
    </div>
  );
}

export default Identitical;
