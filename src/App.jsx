// Modules
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Styles
import "./assets/styles/style.scss";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Gtsbt from "./pages/Gtsbt";
import Finance from "./pages/Finance";
import Normative from "./pages/Normative";
import Trade from "./pages/Trade";
import Register from "./pages/Register";
import Ticker from "./components/Ticker";
import Contacts from "./pages/Contacts";
import NewsPage from "./pages/NewsPage";
import NewsPostPage from "./pages/NewsPostPage";
import Tarif from "./pages/Tarif";
import Multimedia from "./pages/Multimedia";

const App = () => {
  const [lang, setLang] = useState("ru");
  const [postId, setPostId] = useState();
  const [postsData, setPostsData] = useState();

  return (
    <div className="App">
      <Ticker />
      <Header lang={lang} setLang={setLang} />
      <Routes>
        <Route index element={<Home lang={lang} setPostId={setPostId} />} />
        <Route path="/gtsbt" element={<Gtsbt lang={lang} />} />
        <Route path="/norm" element={<Normative lang={lang} />} />
        <Route
          path="/news"
          element={
            <NewsPage
              lang={lang}
              setPostId={setPostId}
              postId={postId}
              postsData={postsData}
              setPostsData={setPostsData}
            />
          }
        />
        <Route path="/multimedia" element={<Multimedia lang={lang} />} />
        <Route path="/contacts" element={<Contacts lang={lang} />} />
        <Route path="/trade" element={<Trade lang={lang} />} />
        <Route path="/fin" element={<Finance lang={lang} />} />
        <Route path="/register" element={<Register lang={lang} />} />
        <Route path="/tarif" element={<Tarif lang={lang} />} />
        <Route
          path="/post/:id"
          element={
            <NewsPostPage
              lang={lang}
              setPostId={setPostId}
              postsData={postsData}
              setPostsData={setPostsData}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
