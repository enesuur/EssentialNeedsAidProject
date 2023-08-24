import React, { useState,  } from 'react';
import './clothecard.css';
import  ClotheImg  from '../img/clothe-img.jpg';
import { useNavigate} from 'react-router-dom';
const ClotheCard = React.memo(({data}) => {
    const navigate = useNavigate();
    const navigateToDetail = () => {
        navigate(`/clothes/${data.id}`,{state:{data:data}})
    };
    return (
        <div className='card-container'>
            <div className='card-content'>
                <div className='card-header'>
                    <img src={ClotheImg} alt='Random' />
                </div>
                <div className='card-body'>
                    <h2 className='card-title'>{data.title}</h2>
                    <div className='card-info'>
                        <div className='card-snippet'>
                            <p>
                                  <span>Tür: {data.type}</span>
                                  <span>Beden : {data.size}</span>
                                  <span>Cinsiyet : {data.gender}</span>
                            </p>
                        </div>
                    </div>
                    <button className='card-button' onClick={navigateToDetail }>Talep Et</button>
                </div>
            </div>

        </div>
    );
});

export default ClotheCard;
