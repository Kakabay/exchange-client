import React from 'react';

const Tab = ({ text, active, onClick }) => {
  return (
    <div className={`tab-dark ${active ? 'active-tab' : null}`} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};

export default Tab;
