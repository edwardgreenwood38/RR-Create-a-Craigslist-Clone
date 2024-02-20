import React from "react";
import Posting from './Posting'


function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
            <div className="posting">
                <Posting />
            </div>
            <div className="posting">
                <Posting />
            </div>
            <div className="posting">
                <Posting />
            </div>
            <div className="posting">
                <Posting />
            </div>
        </div>
    )
};


export default Gallery;