import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Detail = ({ detailArr, hideDetailHandler }) => {
  const clickHandler = () => {
    hideDetailHandler();
  };
  return (
    <div className="detail" onClick={clickHandler}>
      <div className="detailHolder">
        {detailArr.map((file) => {
          return (
            <div className="detailFile" key={file.name}>
              <div>{file.name}</div>
              <div>{file.added}</div>
              <div>{file.type}</div>
              <FontAwesomeIcon
                className="fileIcon"
                size="5x"
                icon={faFileAlt}
              />
            </div>
          );
        })}
      </div>
      <div>Click to Close Box</div>
    </div>
  );
};
export default Detail;
