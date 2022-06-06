export default function Carousel(props) {
    const { images, index, setIndex } = props;

    return (
        <div className="o-carousel" style={props.style}>
            {images.map((image, i) => {
                return (
                    <div
                        className="o-carousel--item"
                        style={{
                            display: i === index ? "block" : "none",
                            position: "relative",
                        }}
                    >
                        <img
                            src={image.imgSrc}
                            style={{
                                width: "100%",
                            }}
                            alt={image.caption}
                        />
                        <span
                            style={{
                                position: "absolute",
                                bottom: "0",
                                right: "1rem",
                                backgroundColor: "#fff",
                                opacity: "0.7",
                                fontSize: "medium",
                                padding: "1rem 0",
                                width: "2rem",
                                textAlign: "center"
                            }}
                        >
                            {index+1}/{images.length}
                        </span>
                    </div>
                );
            })}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="o-carousel--caption">
                    {images.map((image, i) => {
                        return (
                            <span
                                className="o-carousel--caption-text"
                                style={{
                                    fontSize: "small",
                                    display: i === index ? "block" : "none",
                                }}
                            >
                                {image.caption}
                            </span>
                        );
                    })}
                </div>

                <div>
                    <button
                        className="o-carousel--prev"
                        onClick={() => setIndex(index - 1)}
                        style={{
                            background: "none",
                            color: "inherit",
                            border: "none",
                            font: "inherit",
                            cursor: "pointer",
                            outline: "inherit",
                            fontSize: "medium",
                        }}
                    >
                        Prev
                    </button>
                    <button
                        className="o-carousel--next"
                        onClick={() => setIndex(index + 1)}
                        style={{
                            background: "none",
                            color: "inherit",
                            border: "none",
                            font: "inherit",
                            cursor: "pointer",
                            outline: "inherit",
                            fontSize: "medium",
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
