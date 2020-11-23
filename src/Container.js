import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Detail from "./Details";

const Container = ({ DataInfo }) => {
  const [detailArr, setDetailArr] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  const clickHandler = (e) => {
    if (e.target.innerText !== undefined) {
      setDetailArr([]);
      setShowDetail(true);
      const result = DataInfo.filter((file) => file.type === "folder")
        .filter((folder) => folder.name === e.target.innerText)
        .map((file) => file.files);
      setDetailArr(result[0]);
    }
  };
  const fileHandler = (e) => {
    if (e.target.innerText !== undefined) {
      setDetailArr([]);
      setShowDetail(true);
      const result = DataInfo.filter(
        (folder) => folder.name === e.target.innerText
      );
      console.log(result);
      setDetailArr(result);
    }
  };
  const hideDetailHandler = () => {
    setShowDetail(false);
  };

  return (
    <div className="Container">
      {DataInfo.map((file) => {
        return (
          <div>
            {file.type === "folder" ? (
              <div className="folder" key={file.name} onClick={clickHandler}>
                {file.name}
                <FontAwesomeIcon
                  className="fileIcon"
                  size="8x"
                  icon={faFolderPlus}
                />
              </div>
            ) : (
              <div className="folder" key={file.name} onClick={fileHandler}>
                {file.name}

                <FontAwesomeIcon
                  className="fileIcon"
                  size="8x"
                  icon={faFileAlt}
                />
              </div>
            )}
          </div>
        );
      })}
      {showDetail ? (
        <Detail
          detailArr={detailArr}
          setDetailArr={setDetailArr}
          hideDetailHandler={hideDetailHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Container;
