import { useState, useEffect, useRef } from "react";

const PhoneInput = ({ maxLength = 10 }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const carretPositionRef = useRef(0);

  const inputChange = (e) => {
    const target = e.target;
    const currentValue = target.value;
    const selectionStart = target.selectionStart;
    const number = currentValue.replace(/[^0-9]/g, "");
    const size = number.length;

    if (size > maxLength) return;

    const formattedValue = [];
    for (let i = 0; i < size; i++) {
      if (size > 3 && i === 0) {
        formattedValue.push("(");
      }
      formattedValue.push(number[i]);

      if (size > 6 && i === 5) {
        formattedValue.push("-");
      }

      if (size > 3 && i === 2) {
        formattedValue.push(")");
      }
    }
    const diff = formattedValue.length - currentValue.length;
    if (selectionStart) {
      carretPositionRef.current = selectionStart + diff;
    }
    setInput(formattedValue.join(""));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(
        carretPositionRef.current,
        carretPositionRef.current
      );
    }
  }, [input]);

  return (
    <div className="container">
      <div className="card">
        <h2>Phone Input</h2>
        <div className="info_text_container">
          <p className="info_text">
            <code>Best Practices:</code> When you enter phone number it should
            add the bracket and a dash so that it fairly look the
            <strong> Phone Input</strong>
          </p>
        </div>
        <label htmlFor="search-text">Phone number</label>
        <input
          value={input}
          ref={inputRef}
          placeholder="Enter a phone number"
          onChange={inputChange}
          data-testid={"phone-number-input"}
        />
      </div>
    </div>
  );
};

export const FinalPhoneInput = () => {
  return (
    <div>
      <PhoneInput maxLength={10} />
    </div>
  );
};
