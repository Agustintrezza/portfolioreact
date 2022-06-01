import "./App.css";
import Slider from "./components/slider/slider";
import { Header } from "./components/header/Header";
import { About } from "./components/about/About.jsx";
// import Certificados from "./components/certificados/Certificados";
import { Logos } from "./components/logos/Logos";
import { createContext, useState } from "react";
import { Buttons } from "./components/buttons/Buttons";
import { Footer } from "./components/footer/Footer";
import Player from "./components/Player/Player.jsx";
import { songsdata } from "./components/Player/audios";
import { useRef, useEffect } from "react";
import { Acordion } from "./components/acordion/Acordion.jsx";
import { Videoss } from "./components/videoss/Videoss";

export const ThemeContext = createContext(null);

function App() {
  // MODO OBSUCOR

  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  //FOOTER

  const [footer, setFooter] = useState(false);

  const toggleFooter = () => {
    console.log(footer);
    footer ? setFooter(false) : setFooter(true);
  };

  //REPRODUCTOR

  const [audio, setAudio] = useState(false);

  const toggleAudio = () => {
    audio ? setAudio(false) : setAudio(true)
  }

  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toogleTheme }}>
        <div className="App" id={theme}>
          <Header theme={theme} toogleTheme={toogleTheme} />
          <Buttons
            theme={theme}
            toogleTheme={toogleTheme}
            toggleFooter={toggleFooter}
            toggleAudio={toggleAudio}
          />
          <Footer footer={footer} toggleFooter={toggleFooter} />
          <About />
          <div className="App">
            <audio
              src={currentSong.url}
              ref={audioElem}
              onTimeUpdate={onPlaying}
            />
            <Videoss/>
            <Player
              songs={songs}
              setSongs={setSongs}
              isplaying={isplaying}
              setisplaying={setisplaying}
              audioElem={audioElem}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              audio={audio}
            />
          </div>
          <Slider />
          
          <Acordion/>
          {/* <Certificados /> */}
          <Logos />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
