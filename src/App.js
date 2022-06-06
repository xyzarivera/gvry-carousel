import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Gallery from "./components/Gallery";
import Jumbotron from "./components/Jumbotron";

function App() {
    const images = [
        { imgSrc: "https://i.imgur.com/R4HUAOG.jpg", caption: "image 1" },
        { imgSrc: "https://i.imgur.com/9TgoRWD.jpg", caption: "image 2" },
        { imgSrc: "https://i.imgur.com/ujZRv5G.jpg", caption: "image 3" },
        { imgSrc: "https://i.imgur.com/dWH1QiY.jpg", caption: "image 4" },
        { imgSrc: "https://i.imgur.com/Lp7J7YK.jpg", caption: "image 5" },
        { imgSrc: "https://i.imgur.com/3V3WVvH.jpg", caption: "image 6" },
    ];
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    function setActiveImage(newImageIndex) {
        if (newImageIndex > images.length - 1) {
            setActiveImageIndex(0);
        } else if (newImageIndex < 0) {
            setActiveImageIndex(images.length - 1);
        } else {
            setActiveImageIndex(newImageIndex);
        }
    }

    return (
        <div className="App" style={{ padding: "5rem 10rem" }}>
            <div
                style={{
                    zIndex: "-1",
                    position: "fixed",
                    top: "2rem",
                    left: "5rem",
                    backgroundColor: " #f9f9f9",
                    width: "70vh",
                    height: "100vh",
                    color: "transparent",
                }}
            >
                bg
            </div>

            <div style={{ display: "flex" }}>
                <Jumbotron style={{ width: "33%" }} />
                <Carousel
                    images={images}
                    index={activeImageIndex}
                    setIndex={setActiveImage}
                    style={{ flexGrow: "1" }}
                />
            </div>

            <Gallery
                images={images}
                index={activeImageIndex}
                setIndex={setActiveImage}
            />
        </div>
    );
}

export default App;
