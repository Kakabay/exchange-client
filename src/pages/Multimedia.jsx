// Modules
import React from "react";
import { useState, useEffect } from "react";
import { Api } from "../helpers/api";
// Components
import SectionTitle from "../components/SectionTitle";
import MultimediaTab from "../components/MultimediaTab";
import Gallery from "../components/Gallery";
import Videos from "../components/Videos";

const Multimedia = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [multimediaData, setMultimediaData] = useState();

  useEffect(() => {
    const MultimediaApi = new Api(
      "http://tmex.gov.tm:8765/api/media/categories",
      multimediaData,
      setMultimediaData
    );
    MultimediaApi.get({ "X-Localization": "ru" });
  }, []);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Мультимедия" />
          <div className="multimedia-wrapper">
            <nav className="multimedia-nav">
              <div className="multimedia-top-gallery">
                {multimediaData
                  ? multimediaData.data.map((tab) => {
                      return tab.type === "image" ? (
                        <MultimediaTab
                          key={tab.id}
                          title={tab.title}
                          active={activeTab === 1 ? true : false}
                          onClick={() => setActiveTab(1)}
                        />
                      ) : null;
                    })
                  : null}
                {/* <MultimediaTab
                  // key={tab.id}
                  title={"Nebit-himiýa önümleri"}
                  active={activeTab === 1 ? true : false}
                  onClick={() => setActiveTab(1)}
                />
                <MultimediaTab
                  // key={tab.id}
                  title={"Ýeňil senagat önümleri"}
                  active={activeTab === 2 ? true : false}
                  onClick={() => setActiveTab(2)}
                /> */}
              </div>
              <div className="multimedia-top-video">
                {/* {multimediaData
                  ? multimediaData.data.map((tab) => {
                      tab.type === 'video' ? (
                        <MultimediaTab
                          key={tab.id}
                          title={tab.title}
                          active={activeTab === 1 ? true : false}
                          onClick={() => setActiveTab(1)}
                        />
                      ) : null;
                    })
                  : null} */}
                <MultimediaTab
                  // key={tab.id}
                  title={"Videolar"}
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
