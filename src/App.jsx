import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import bgImage from "./assets/pattern-bg.png";
import GlobalStyles from "./components/styles/Global";
import Form from "./components/Form";
import Info from "./components/Info";
import MapWrapper from "./components/MapWrapper";

function App() {
  const [geoAPI, setGeoAPI] = useState(null);
  const [input, setInput] = useState("");
  const [lat, setLat] = useState(41.697892);
  const [lng, setLng] = useState(44.827095);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_dqJrOqznvItqaBPKBPQOIYZyxICsO&domain=${input}`
      );

      setGeoAPI(data);
      setLat(data.location.lat);
      setLng(data.location.lng);
    };
    getData();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    getData();
  };

  const theme = {
    colors: {
      veryDarkGrey: "hsl(0,0%,17%)",
      darkGray: "hsl(0, 0%, 59%)",
    },
    background: {
      img: bgImage,
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <header>
          <h1>IP Address Tracker</h1>
          <Form
            input={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Info geoAPI={geoAPI} />
        </header>
        <MapWrapper lat={lat} lng={lng} />
      </ThemeProvider>
    </>
  );
}

export default App;
