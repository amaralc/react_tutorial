import React from 'react';
import { Link } from 'react-router';

const HomeCard = (props) => (

    // retirado style={{ width: '18rem' }}
    <div className="col-12 col-sm-4" style={{ paddingTop: '10px' }}>
        <div className="card" >
            <img
                style={{ paddingTop: '3px', width: '100px', height: '100px' }}
                src="https://cdn.auth0.com/blog/react-js/react.png"
                className="card-img-top rounded mx-auto d-block"
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"> {props.text}</p>
                <Link to={{pathname: props.route}} className="btn btn-primary">{props.title}</Link>                
            </div>
        </div>
    </div>

);

export default HomeCard;