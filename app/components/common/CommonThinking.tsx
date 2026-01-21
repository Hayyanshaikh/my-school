import React, { useEffect, useState } from "react";

const CommonThinking = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start gap-3">
      <div className="text-sm text-gray-500 leading-relaxed font-medium whitespace-pre-line">
        Thinking{dots}
      </div>
    </div>
  );
};

export default CommonThinking;
