import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import Detail from './Details';

const Container = ({ DataInfo }) => {
	//add state to allow detail display to be toggled
	const [detailArr, setDetailArr] = useState([]);
	const [showDetail, setShowDetail] = useState(false);

	const clickHandler = (fileName) => {
		setDetailArr([]);
		setShowDetail(true);
		const result = DataInfo.filter((file) => file.type === 'folder')
			.filter((folder) => folder.name === fileName)
			.map((file) => file.files);
		setDetailArr(result[0]);
	};
	const fileHandler = (fileName) => {
		setDetailArr([]);
		setShowDetail(true);
		const result = DataInfo.filter((folder) => folder.name === fileName);
		console.log(result);
		setDetailArr(result);
	};
	//toggle detail display back to false
	const hideDetailHandler = () => {
		setShowDetail(false);
	};

	return (
		<div className="Container">
			{DataInfo.map((file) => {
				return (
					<div>
						{file.type === 'folder' ? (
							<div className="folder" key={file.name} onClick={() => clickHandler(file.name)}>
								{file.name}
								<FontAwesomeIcon className="fileIcon" size="8x" icon={faFolderPlus} />
							</div>
						) : (
							<div className="folder" key={file.name} onClick={() => fileHandler(file.name)}>
								{file.name}

								<FontAwesomeIcon className="fileIcon" size="8x" icon={faFileAlt} />
							</div>
						)}
					</div>
				);
			})}
			{showDetail ? (
				<Detail detailArr={detailArr} setDetailArr={setDetailArr} hideDetailHandler={hideDetailHandler} />
			) : (
				''
			)}
		</div>
	);
};
export default Container;
