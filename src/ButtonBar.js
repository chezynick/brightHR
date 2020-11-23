import React from "react";

const ButtonBar = ({ DataInfo, sortedArr }) => {
  //function to sort by date added
  const dateHandler = () => {
    const sorted = DataInfo.sort((a, b) => (a.added > b.added ? 1 : -1), 0);
    sortedArr(sorted);
  };
  //function to sort by alphapbetic order
  const alphaHandler = () => {
    const sorted = DataInfo.sort((a, b) => (a.name > b.name ? 1 : -1), 0);
    sortedArr(sorted);
  };

  return (
    <div>
      <div className="Buttons">
        <div className="button" onClick={dateHandler}>
          Sort by Date Added
        </div>
        <div className="button" onClick={alphaHandler}>
          Sort by Name
        </div>
      </div>
    </div>
  );
};
export default ButtonBar;
