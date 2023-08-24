import React, { useState } from 'react'; // Removed unnecessary import of useState
import './billcard.css';
import BillImg from '../img/bill-img.jpg';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
const BillCard = React.memo(({ data }) => {
  const navigate = useNavigate();
   
  const navigateToBill = () => {
    navigate(`/bills/${data.id}`,{state:{data:data}}); 
  };

  return (
    <div className='card-container'>
      <div className='card-content'>
        <div className='card-header'>
          <img src={BillImg} alt='Clothe' />
        </div>
        <div className='card-body'>
          <h2 className='card-title'>{data.title}</h2>
          <div className='card-info'>
            <div className='card-snippet'>
              <p>
                <span>Fatura Çeşiti: {data.type}</span>
                <span>Ücret: {data.price}</span>
                <span>Girdi Tarihi: {data.entryDate}</span>
                <span>Son Ödeme Tarihi: {data.dueDate}</span>
              </p>
            </div>
          </div>
          <button className='card-button' onClick={navigateToBill}>
            Faturayı öde
          </button>
        </div>
      </div>
    </div>
  );
});

export default BillCard;
