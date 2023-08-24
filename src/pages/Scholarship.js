import { useState } from 'react'
import scholarImg from '../img/scholar-img.jpg';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import './scholarship.css';
const Scholarship = () => {
  const [formStatus, setFormStatus] = useState(true);
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');
  const [formData,setFormData]= useState({
    name:'',
    surname:'',
    gsm:'',
    school:'',
    department:'',
    file:'',
    mail:''
  })
  const handleFormChange = (param) => {
    if (param === 'apply') {
      setFormStatus(true);
      return true;
    } else if (param === 'donate') {
      setFormStatus(false);
      return false;
    }
  }

  function handleInputChange(e){
    const {name,value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:value,
    }));
  }

  console.log(formData);
  return (
    <section className='scholarship container'>

      <div className='scholarship-content'>
        <img src={scholarImg} alt='Hayatta en hakiki mürşit ilimdir.Gazi Mustafa Kemal' />
        <p className='scholarship-foreword'> <em>"Eğitimdir ki, bir milleti ya özgür, bağımsız, şanlı,
          yüksek bir topluluk halinde yaşatır ya da esaret ve sefalete terk eder."</em>
          <span>Gazi Mustafa Kemal Atatürk</span>
        </p>
        <div className='scholarship-info'>
          <div className='apply-scholarship' onClick={() => handleFormChange('apply')}>
            <svg viewBox="0 0 24 24">
              <path d="m12 14 9-5-9-5-9 5 9 5Z"></path>
              <path d="m12 14 6.16-3.422c.81 2.058 1.04 4.3.665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14Z"></path>
              <path d="m12 14 9-5-9-5-9 5 9 5Zm0 0 6.16-3.422c.81 2.058 1.04 4.3.665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14Zm-4 6v-7.5l4-2.222"></path>
            </svg>
            <span>Burs başvurusu yap!</span>
          </div>
          <div className='donate-scholarship' onClick={() => handleFormChange('donate')}>
            <svg viewBox="0 0 24 24">
              <path d="M21 13.255A23.93 23.93 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745"></path>
              <path d="M12 12h.01"></path>
              <path d="M16 4v2H8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"></path>
              <path d="M19 20H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"></path>
            </svg>
            <span>Burs veren ol!</span>
          </div>
        </div>
        <div className='scholarship-form'>
        
          <div className='switch-option'>
            <hr style={{ color: 'black' }} />
            {formStatus && (<h1>Burs Başvurusu yap</h1>)}
            {!formStatus && (<h1>Burs veren ol</h1>)}
          </div>
          <Breadcrumb paths={paths}/>
          <form action='/'>
            <label htmlFor='name'>Adınız
              <input placeholder='Adınız' type='text' name='name' id='name' onChange={handleInputChange} required/>
            </label>
            <label htmlFor='surname'>
              Soyadınız
              <input placeholder='Soyadınız' type='text' name='surname' id='surname' onChange={handleInputChange} required/>
            </label>
            <label htmlFor='gsm'>Telefon Numaranız
              <input type='number' placeholder='gsm' name='gsm' onChange={handleInputChange} required/>
            </label>
            {formStatus && (
              <>
                <label htmlFor='school'>
                  Okulunuz
                  <input placeholder='Okulunuz' type='text' name='school' id='school' onChange={handleInputChange} required/>
                </label>
                <label htmlFor='department'>
                  Bölümünüz
                  <input placeholder='Bölümünüz' type='text' name='department' id='department' onChange={handleInputChange} required />
                </label>
                <label htmlFor='file'>Özgeçmişiniz
                  <input placeholder='CV Yükle' type='file' name='file' id='file' onChange={handleInputChange} required/>
                </label>
              </>
            )}

            {!formStatus && (
              <>
                <label htmlFor='mail'>
                  Mail Adresiniz
                  <input placeholder='Mail' type='mail' name='mail' id='mail' onChange={handleInputChange} required/>
                </label>
              </>
            )}


            <button type='submit'>Gönder</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Scholarship;