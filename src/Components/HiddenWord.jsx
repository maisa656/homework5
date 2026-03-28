import { useEffect, useState } from "react";

export default function HiddenWord() {
  const hiddenWord = "hello";
  const [typedText, setTypedText] = useState("");
  const [found, setFound] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      setTypedText((prev) => {
        const newText = (prev + e.key).slice(-20);

        if (newText.includes(hiddenWord)) {
          setFound(true);
        }

        return newText;
      });
    };

    window.addEventListener("keypress", handleKeyPress);

    
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h2>Type something...</h2>
      {found && <h1>{hiddenWord}</h1>}
    </div>
  );
}