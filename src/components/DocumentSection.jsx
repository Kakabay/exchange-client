import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DocumentLink from '../components/DocumentLink';
import { Api } from '../helpers/api';

const DocumentSection = ({ lang, id, title }) => {
  const [docsFileData, setDocsFileData] = useState();

  useEffect(() => {
    // Documents fetch
    const DocumentsFileApi = new Api(
      `https://tmex.gov.tm:8765/api/documents?category=${id}`,
      docsFileData,
      setDocsFileData,
    ).get({ 'X-Localization': lang });

    // Scroll to top
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div className="documents-wrapper">
      <h2 className="sub-page-file-title">{title}</h2>
      <div className="documents-links-wrapper">
        {
          docsFileData
            ? docsFileData.data.map((doc) => {
                return doc.page === 'Нормативная база' && doc.title != '-' ? (
                  <DocumentLink key={uuidv4()} title={doc.title} link={doc.file} />
                ) : null;
              })
            : '' //loader
        }
      </div>
    </div>
  );
};

export default DocumentSection;
