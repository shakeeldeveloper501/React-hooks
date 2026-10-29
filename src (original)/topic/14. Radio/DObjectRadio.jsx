import { useState } from "react";

const DObjectRadio = () => {
  const [selectedMode, setSelectedMode] = useState({
    id: "UPI",
    info: "Instant transfer via upi apps",
  });
  const payments = [
    { id: "UPI", info: "Instant transfer via upi apps" },
    { id: "Card", info: "pay using credit or debit card" },
    { id: "COD", info: "pay when the order arrives" },
  ];
  return (
    <div className="select-none">
      {payments.map((item) => {
        return (
          <label key={item.id} htmlFor={item.id}>
            <input
              id={item.id}
              type="radio"
              name="payments"
              value={item.id}
              checked={selectedMode.id === item.id}
              onChange={() => setSelectedMode(item)}
            />
            {item.id}
          </label>
        );
      })}

      <p>Mode of payment : {selectedMode.id}</p>
      <p>Details : {selectedMode.info}</p>
    </div>
  );
};

export default DObjectRadio;
