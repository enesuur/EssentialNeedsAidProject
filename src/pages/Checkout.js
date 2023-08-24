import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BillImg from '../img/bill-img.jpg';
import ClotheImg from '../img/clothe-img.jpg';
import './checkout.css';
import { useState } from 'react';
const Checkout = () => {
    const [detailData, setDetailData] = useState({});
    const [dataBool, setDataBool] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        gsm: '',
        address: ''
    });


    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('İsteğiniz Başarılı bir şekilde gönderildi!')
        navigate('/');
    };

    const location = useLocation();

    function handleDetailData() {
        if (location.state) {
            setDetailData(location.state.data);
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    console.log(formData)
    useEffect(() => {
        if (detailData.category === 'bill') {
            setDataBool(true);
        } else if (detailData.category === 'clothe') {
            setDataBool(false);
        }
    }, []);

    useEffect(() => {
        handleDetailData();
    }, []);


    return (
        <section className='checkout container'>

            <div className='review-product'>
                <figure>
                    {dataBool && (<img src={BillImg} alt='Ürün Fotoğrafı' />)}
                    {!dataBool && (<img src={ClotheImg} alt='Ürün Fotoğrafı' />)}
                    <caption>
                        <em>Talep ettiğiniz ürün</em>
                    </caption>
                </figure>
                {dataBool && (
                    <div className='review-info'>
                        <h2>Özellikler</h2>
                        <p>
                            <span>Fatura Çeşiti:</span>
                            <span>{detailData.title}</span>
                        </p>
                        <p>
                            <span>Fatura Çeşiti:</span>
                            <span>{detailData.price}</span>
                        </p>
                        <p>
                            <span>Fatura Çeşiti:</span>
                            <span>{detailData.entryDate}</span>
                        </p>
                        <p>
                            <span>Fatura Çeşiti:</span>
                            <span>{detailData.dueDate}</span>
                        </p>

                    </div>
                )}
                {!dataBool && (
                    <div className='review-info'>
                        <h2>Özellikler</h2>
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
                            <span>{detailData.type}</span>
                        </p>


                    </div>
                )}
            </div>
            <form action='#' onSubmit={handleFormSubmit}>
                <h2>İletişim Bilgileriniz</h2>
                <label>Adınız
                    <input placeholder='Adınız' type='text' name='name' value={formData.name}
                        onChange={handleInputChange} required />
                </label>
                <label>
                    Soyadınız
                    <input placeholder='Soyadınız' type='text' name='surname' value={formData.surname}
                        onChange={handleInputChange} required />
                </label>
                <label htmlFor='GSM'>Telefon Numaranız
                    <input type='number' placeholder='GSM' name ='gsm' value={formData.gsn}
                        onChange={handleInputChange} required />
                </label>
                <label>Adres
                    <textarea type='text' placeholder='Adresiniz' name='address' value={formData.address}
                        onChange={handleInputChange} required />
                </label>
                <button type='submit'> Talep Gönder
                    <svg width="24" height="24" stroke-linecap="round" viewBox="0 0 24 24">
                        <path d="M22 2 11 13"></path><path d="m22 2-7 20-4-9-9-4 20-7z"></path>
                    </svg>
                </button>
            </form>
        </section>
    )
}

export default Checkout