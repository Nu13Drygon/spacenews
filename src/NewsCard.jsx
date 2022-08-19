import React from "react";

const NewsCard = ({title, image, summary, source}) => {
    return (
        <div className="w-100 p-5 text-center border border-warning d-flex flex-column" style={{maxWidth:'500px'}}>
            <h4 className="fw-bold">{title}</h4>
            <div>
                <img style={{width: '100%'}} className="p-4" src={image} alt={title} />
            </div>
            <div>
                <p className="fs-6">{summary}</p>
                <a href={source}>Source</a>
            </div>
        </div>
    )
}

export default NewsCard