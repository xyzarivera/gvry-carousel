export default function Jumbotron(props) {
    return (
        <div style={{...props.style, padding: "0 1rem 0 0"}}>
            <h1>A space where designs are created</h1>
            <p>
                A space where designs are created with people facing various
                projects.
            </p>
            <p>
                This space was created based on the concept of viewing the
                office as a city and designing the experience of that city.
            </p>
        </div>
    );
}
