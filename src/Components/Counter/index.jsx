import React, { useEffect, useState } from "react";

const Counter = ({ value, setValue }) => {
  const [alert, setAlert] = useState("");

  useEffect(() => {
    if (value < 0) {
      setValue(0);
      return alert("No puedes tener valores negativos");
    }
    if (value > 10) {
      setValue(10);
      return alert("El valor máximo es de 10");
    }
  }, [value]);

  useEffect(() => {
    if (value % 2 === 0) return setAlert('Es numero par')
    return setAlert("Es numero impar")
  }, [value])

  return (
    <div className="w-full text-center">
      <p className="py-6">El valor actual es: {value}</p>
      <div className="flex flex-row justify-center">
        <button onClick={() => setValue(value + 1)}>➕</button>
        <button onClick={() => setValue(value - 1)}>➖</button>
      </div>
      {alert && <div>{alert}</div>}
    </div>
  );
};

export default Counter;
