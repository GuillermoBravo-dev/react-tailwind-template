import React from "react";

const Modal = ({ children, setVisible, counter, setCounter }) => {
  const handleClick = () => {
    setVisible(false);
  };
  return (
    <div className="flex flex-col absolute top-[35%] left-[35%] bg-black rounded-xl p-8 z-50">
      <button onClick={() => handleClick()} className="ml-auto">❌</button>
      {children}
      <div className="flex flex-row justify-center">
        <button onClick={() => setCounter(counter + 1)}>➕</button>
        <button onClick={() => setCounter(counter - 1)}>➖</button>
      </div>
    </div>
  );
};

export default Modal;
