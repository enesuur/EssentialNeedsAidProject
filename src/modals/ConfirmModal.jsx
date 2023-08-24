import React from 'react';
import './confirmmodal.css';
import { useNavigate } from 'react-router-dom';

const ConfirmModal = ({ isModalOpen,setIsModalOpen,detailData}) => {
  const navigate = useNavigate();
  if (!isModalOpen) return null;

  const navigateCheckout = () => {
    setIsModalOpen(false);
    navigate('/checkout',{state:{data:detailData}});
  }
  return (
    <div className='modal-overlay '>
      <div className='modal-content container'>
        <div className='modal-body'>
        İsteği onaylamak istiyor musun?
        </div>
        <div className='modal-footer'>
          <button className='cancel-button'  onClick={() => setIsModalOpen(false)}>Reddet</button>
          <button className='confirm-button' onClick={() => navigateCheckout()}>Onayla</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
