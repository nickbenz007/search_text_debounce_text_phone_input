import { useState, useEffect } from "react";

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);
  return debounce;
};

export const SearchDebounce = () => {
  const [text, setText] = useState("");
  const debounceText = useDebounce(text, 1000);
  return (
    <>
      <div className="card">
        <h2>Phone Input</h2>
        <div className="info_text_container">
          <p className="info_text">
            <code>Best Practices:</code> is when you enter any text in the input
            it will show the result after 1000 mili seconds
          </p>
        </div>
        <label htmlFor="search-text">Search debounce</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search debounce text..."
          className="search_input"
        />
        <p className="debounce_text_value">
          Debounce text value is: <strong>{debounceText}</strong>
        </p>
      </div>
    </>
  );
};
