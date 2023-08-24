import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ConfirmModal from '../modals/ConfirmModal';
import ClotheImg from '../img/clothe-img.jpg';
import BillImg from '../img/bill-img.jpg';

import './detail.css';
const Detail = () => {
    const [detailData, setDetailData] = useState({
    },);

    const [isModalOpen, setIsModalOpen] = useState(false);
    let renderCond = detailData.category === 'clothe' ? true : false;
    const location = useLocation();

    function getRoutingParams() {
        if (location.state) {
            setDetailData(location.state.data);
        }
    }

    useEffect(() => {
        getRoutingParams();
    }, []);

    return (
        <section className='post container'>

            <div className='product-container'>
                <figure >
                    {renderCond && (<img src={ClotheImg} alt="img" />)}
                    {!renderCond && (<img src={BillImg} alt="img" />)}
                </figure>

                <div className='post-description'>
                    <p className='post-title' style={{ textAlign: 'center' }}>
                    </p>
                    <div className='post-info'>
                        {renderCond && (
                            <>
                                <p>
                                    Özellikler
                                </p>
                                <p>
                                    <span>Başlık:</span>
                                    <span>{detailData.title}</span>
                                </p>
                                <p>
                                    <span>Cinsiyet:</span>
                                    <span>{detailData.gender}</span>
                                </p>
                                <p>
                                    <span>Beden:</span>
                                    <span>{detailData.size}</span>
                                </p>
                                <p>
                                    <span>Çeşit:</span>
                                    <span>{detailData.gender}</span>
                                </p>
                            </>
                        )}
                        {!renderCond && (
                            <>
                                <p>
                                    <span>Fatura Çeşiti: {detailData.type}</span>
                                </p>
                                <p>
                                    <span>Ücret: {detailData.price}</span>
                                </p>
                                <p>
                                    <span>Girdi Tarihi: {detailData.entryDate}</span></p>
                                <p>
                                    <span>Son Ödeme Tarihi: {detailData.dueDate}</span>
                                </p>
                            </>
                        )}

                    </div>
                    <button className='detail-button' onClick={() => { setIsModalOpen(true) }}>Talep Et</button>
                    {isModalOpen && (<ConfirmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} detailData={detailData} />)}
                </div>

            </div>

        </section>
    )
}

export default Detail;