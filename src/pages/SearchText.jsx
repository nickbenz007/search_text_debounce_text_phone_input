import { useState } from "react";

const SearchText = () => {
  const fruites = [
    "Apple",
    "Appricot",
    "Mango",
    "Banana",
    "Pineapple",
    "Graps",
    "Melon",
    "Watermelon",
    "Plums",
    "Pameogranet",
    "Redberry",
    "Blueberry",
    "Rasberry",
  ];

  const [fruitesData, setFruitesData] = useState(fruites);
  const [searchText, setSearchText] = useState("");

  const filterFruites = fruitesData.filter((fruites) =>
    fruites.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h2>Search Fruites</h2>
          <div className="info_text_container">
            <p className="info_text">
              <code>Best Practices:</code> Search the fruites alphabatically
              such as example: <strong>Apple</strong> so it contains A and it
              would find out the result as respectively
            </p>
          </div>
          <label htmlFor="search-text">Fruite name</label>
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search fruites..."
            className="search_input"
          />
          {searchText.length > 0 &&
            filterFruites.map((fruite, index) => (
              <div key={index} className="fruites_container">
                <p className="fruites_names">{fruite}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchText;
