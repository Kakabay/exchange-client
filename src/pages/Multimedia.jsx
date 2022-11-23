// Modules
import React from 'react';
import { useState } from 'react';
// Components
import SectionTitle from '../components/SectionTitle';
import MultimediaTab from '../components/MultimediaTab';
import Gallery from '../components/Gallery';
import Videos from '../components/Videos';

const Multimedia = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Мультимедия" />
          <div className="multimedia-wrapper">
            <nav className="multimedia-nav">
              <div className="multimedia-top-gallery">
                <MultimediaTab
                  title="Nebit-himiýa önümleri"
                  active={activeTab === 1 ? true : false}
                  onClick={() => setActiveTab(1)}
                />
                <MultimediaTab
                  title="Ýeňil senagat önümleri"
                  active={activeTab === 2 ? true : false}
                  onClick={() => setActiveTab(2)}
                />
              </div>
              <div className="multimedia-top-video">
                <MultimediaTab
                  title="Videolar"
                  active={activeTab === 3 ? true : false}
                  onClick={() => setActiveTab(3)}
                />
              </div>
            </nav>

            {activeTab === 3 ? <Videos /> : <Gallery activeTab={activeTab} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Multimedia;
