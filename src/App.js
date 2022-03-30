import React, { useState } from "react";
import Modal from "./Components/Modal";
import Counter from "./Components/Counter";

const App = () => {
  const [value, setValue] = useState(0)
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-gray-900 min-h-screen text-white text-3xl relative">
      <div className={`${visible ? "blur-md" : ""}`}>
        <Counter value={value} setValue={setValue} />
        <button onClick={() => setVisible(true)} className="p-3 m-4 bg-red-500">
          Activar Modal
        </button>
      </div>
      {visible && (
        <Modal visible={visible} setVisible={setVisible} counter={value} setCounter={setValue}>
          <h1>Titulo del Modal</h1>
          <p>Contenido del Modal 1</p>
          <p>Contenido del Modal 2</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
