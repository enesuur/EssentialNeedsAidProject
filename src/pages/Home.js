import { RiBillLine  } from "react-icons/ri";
import {GiClothes } from 'react-icons/gi';
import { PiStudent }from "react-icons/pi";
import React from 'react'
import { memo } from 'react';
import Question from '../components/Question';
import './home.css';

const Home = () => {
  return (
    <div className='home container'>
        <div className='announcement '>
          <p>Sosyal Hizmetlere Hoş geldiniz.</p>
        </div>

        <section className='faq'>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
        </section>

 

        <section className='site-info'>
          <h2>Site Analitiği</h2>
            <div className='site-analytics'>
              <div className='site-likes'>
              <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802A2.009 2.009 0 0 0 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2ZM4 10h2v9H4v-9Zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819Z">
                  </path>
              </svg>
                <p>321 kadar kişi tarafından tavsiye edildi</p>
              </div>

              <div className='site-visiters'>
              <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24"><path d="M11.455 17.74a5.993 5.993 0 0 1-5.71-5.99c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 1 0-4.81 4.81l.63 2.1Zm10.29-5.99c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10Zm-3.77 4.26 3.77-1.26-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26Z">
                </path>
              </svg>
                <p>984 Kişi tarafından ziyaret edildi.</p>
              </div>

              <div className='site-shares'>
              <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.12c-.76 0-1.44.3-1.96.77l-7.13-4.15c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.85c-.54-.5-1.25-.81-2.04-.81-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92Zm0-12.08c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm-12 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z">
                </path>
              </svg>
                <p>213 kişi tarafından paylaşıldı.</p>
              </div>
            </div>
            <div className='usage-info'>
              <div className='clothe-analytics'>
                <GiClothes/>
                <p>563 kadar kıyafet yardımı yapıldı</p>
              </div>

              <div className='bill-analytics'>
                <RiBillLine/>
                <p>243 kadar fatura yardımı yapıldı</p>
                
              </div>
              <div className='scholarship-analytics'>
                <PiStudent/>
                <p>184 Kadar burs yardımı yapıldı</p>
              </div>
            </div>
  
        </section>

    </div>
  )
}

export default Home;