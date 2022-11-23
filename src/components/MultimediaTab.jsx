import React from 'react';

const MultimediaTab = ({ title, onClick, active }) => {
  return (
    <h2 className={`multimedia-tab ${active ? 'm-tab-active' : null}`} onClick={onClick}>
      {title}
    </h2>
  );
};

export default MultimediaTab;
