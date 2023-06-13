import { useState } from "react";

function Uni(props) {
    const [moreInfo, setMoreInfo] = useState(false);

    function handleShowMore(event) {
        event.preventDefault();
        setMoreInfo(true);
    }

    function handleShowLess(event) {
        event.preventDefault();
        setMoreInfo(false);
    }

    if(moreInfo) {
        return (
            <div>
                {props.name}
                <ul>
                    <li>{props.country}</li>
                    <li><a href={props.webPage} target="_blank" rel="noreferrer">{props.webPage}</a></li>
                </ul>
                <button onClick={handleShowLess}>Less Info</button>
                <hr></hr>
            </div>
        )
    } else {
        return (
            <div>
                {props.name}
                <br></br>
                <button onClick={handleShowMore}>More Info</button>
                <hr></hr>
            </div>
        )
    }
}

export default Uni;