"use client";

import React from "react";
import confetti from "canvas-confetti";

const ComponentExample = () => {
  const handleClick = () => {
    confetti();
  };

  return (
    <button className="border rounded-md px-4 py-2" onClick={handleClick}>
      Click me
    </button>
  );
};

export default ComponentExample;
