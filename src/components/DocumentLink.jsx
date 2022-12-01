// Modules
import React from 'react';
// Icons
import { ReactComponent as File } from '../assets/icons/file.svg';

const DocumentLink = ({ title, link }) => {
  return (
    <a href={link} target={'_blank'} download className="document-link">
      <div className="document-img">
        <File />
      </div>
      <h3 className="document-title">{title}</h3>
    </a>
  );
};

export default DocumentLink;
