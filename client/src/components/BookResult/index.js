import React from "react";
import "./style.css";

function BookResult(props) {
    return (
        <div className="container">

            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <p className="img-center"><img className="card-img" src={props.image} /></p>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{props.title}</h4>
                            <h5 className="card-author">{props.author}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.info} className="btn btn-primary info">More Information</a>
                            {props.handleSave ? (<button className="btn btn-outline-secondary" type="button" id={props.id} onClick={() => props.handleSave(props.id)}>Save</button>): (<></>)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BookResult;




