// Modules
import React from 'react';
import { Link } from 'react-router-dom';
// Icons
import { ReactComponent as File } from '../assets/icons/file.svg';

const DocumentLink = ({ title }) => {
  return (
    <Link className="document-link" to={'/'}>
      <div className="document-img">
        <File />
      </div>
      <h3 className="document-title">{title}</h3>
    </Link>
  );
};

export default DocumentLink;
