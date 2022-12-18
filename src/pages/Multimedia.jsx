// Modules
import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import SectionTitle from '../components/SectionTitle';
import MultimediaTab from '../components/MultimediaTab';
import Gallery from '../components/Gallery';
import Videos from '../components/Videos';

const Multimedia = ({ lang }) => {
  const [imageTab, setImageTab] = useState(0);
  const [imageTabIndex, setImageTabIndex] = useState();

  const [videoTab, setVideoTab] = useState(0);
  const [videoTabIndex, setVideoTabIndex] = useState();

  const [multimediaData, setMultimediaData] = useState();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const MultimediaApi = new Api(
      'http://tmex.gov.tm:8765/api/media/categories',
      multimediaData,
      setMultimediaData,
    ).get({ 'X-Localization': lang });
  }, [lang]);

  useEffect(() => {
    if (multimediaData) {
      setImageTabIndex(multimediaData.data[0].id);
    }
  }, [multimediaData]);

  const imageTabSwitch = (imageIndex, imageTabId) => {
    setImageTab(imageIndex);
    setImageTabIndex(imageTabId);
    setVideoTab(null);
  };

  const videoTabSwitch = (videoIndex, videoTabId) => {
    setVideoTab(videoIndex);
    setVideoTabIndex(videoTabId);
    setImageTab(null);
  };

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper sub-page-full">
          <SectionTitle
            title={`${
              lang === 'ru'
                ? 'Мультимедиа'
                : lang === 'tm'
                ? 'Multimediýa'
                : lang === 'en'
                ? 'Multimedia'
                : null
            }`}
          />
          <div className="multimedia-wrapper">
            <nav className="multimedia-nav">
              <div className="multimedia-top-gallery">
                {multimediaData
                  ? multimediaData.data.map((tab, index) => {
                      return tab.type === 'image' ? (
                        <MultimediaTab
                          key={tab.id}
                          title={tab.title}
                          active={imageTab === index ? true : false}
                          onClick={() => imageTabSwitch(index, tab.id)}
                        />
                      ) : null;
                    })
                  : null}
              </div>
              <div className="multimedia-top-video">
                {multimediaData
                  ? multimediaData.data.map((tab, index) => {
                      return tab.type === 'video' ? (
                        <MultimediaTab
                          key={tab.id}
                          title={tab.title}
                          active={videoTab === index ? true : false}
                          onClick={() => videoTabSwitch(index, tab.id)}
                        />
                      ) : null;
                    })
                  : null}
              </div>
            </nav>

            {videoTab ? (
              <Videos videoTabIndex={videoTabIndex} />
            ) : (
              <Gallery imageTabIndex={imageTabIndex} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Multimedia;
