import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({mascota}) => {
    return (
        <div className="col-lg-4">
            <img
                src={mascota.image}
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                alt='imagen'
            >
                {/* <title>Placeholder</title> */}
            </img>

            <h2>{mascota.name}</h2>
            <p>
                Status: {mascota.status}<br></br>
                Species: {mascota.species}
            </p>
            <p>
                {/* <a className="btn btn-secondary" href="#">
                    View details &raquo;
                </a> */}
                <Link to={`/detail/${mascota.id}`} className=" btn btn-secondary">View details</Link>
            </p>
        </div>
    )
}

export default Card
