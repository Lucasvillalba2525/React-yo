import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useLocation, Link } from "react-router-dom";
import RickAndMortyService from '../../service/RickAndMortyService';

const Detail = () => {
    const [ mascotas, setMascotas ] = useState({});
    const { id } = useParams();
    const { pathname } = useLocation();

    useEffect(() => {
        RickAndMortyService.getCharacterById(id)
            .then((data) => setMascotas(data));
    }, []);

    return (
        <div className='row m-3'>
            <div className='col-md-12'>
                <div className='card flex-md-row mb-4 box-shadow h-md-250'>
                    <div className='card-body d-flex flex-column align-items-start'>
                        <strong className='d-inline-block mb-2 text-success'>
                            {mascotas.species}
                        </strong>
                        <h3 className='mb-0 text-dark'>{mascotas.name}</h3>
                        <div className='mb-1 text-muted'>
                            {new Date(mascotas.created).toLocaleDateString()}
                        </div>
                        <div className='mb-1 text-muted'></div>

                        <Link to={"/"} className='mt-3 btn btn-primary btn-lg'>Volver</Link>
                    </div>

                    <img 
                        className='h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4'
                        height="auto"
                        src={mascotas.image}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Detail;