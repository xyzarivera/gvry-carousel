export default function Gallery({ images, index, setIndex }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 0",
                flexWrap: "wrap",

            }}
        >
            {images.map((image, i) => {
                return (
                    <div
                        key={i}
                        className="o-carousel--thumbnail"
                        onClick={() => setIndex(i)}
                    >
                        <img
                            src={image.imgSrc}
                            alt={image.caption}
                            style={{
                                width: i === index ? "18vh" : "20vh",
                                height: i === index ? "90%" : "100%",
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
