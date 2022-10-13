// Modules
import { Link } from 'react-router-dom';
// Icons
import file from '../assets/icons/file.svg';

const DocumentLink = ({ title }) => {
  return (
    <Link className="document-link" to={'/'}>
      <div className="document-img">
        <img src={file} alt="file" />
      </div>
      <h3 className="document-title">{title}</h3>
    </Link>
  );
};

export default DocumentLink;
