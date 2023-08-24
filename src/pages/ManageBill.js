import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import BreadCrumb from '../components/Breadcrumb';
import './managebill.css';


const ManageBill = () => {
    const [route, setRoute] = useState(null);
    const [isPayBill, setIsPayBill] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const paths = location.pathname.split('/').filter((path) => path !== '');
    useEffect(() => {
      handleLocation();
      console.log(location.state)
    }, [location.state]);
  
    useEffect(() => {
      handleIsPayBill();
      console.log(route)
    }, [route]);
  
    function handleLocation() {
      if (!location.state) {
        setRoute('requestBill');
      } else {
        setRoute(location.state.route); // Assuming location.state.route holds 'requestBill' or 'donateBill'
      }
    }
  
    function handleIsPayBill() {
      if (route === 'requestBill') {
        setIsPayBill(false);
      } else if (route === 'donateBill') {
        setIsPayBill(true);
      }
    }
    


    const options = [
        { value: 'Elektrik', label: 'Elektrik Faturası' },
        { value: 'Su', label: 'Su Faturası' },
        { value: 'Doğalgaz', label: 'Doğalgaz Faturası' },
    ];

    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const handleFormSubmit = (e) => {
        alert('İşleminizi başarıyla gerçekleştirdiniz.')
        navigate('/');
        e.preventDefault();
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }
    return (
     
        <section className='manage-bill container'>
            <form action='' onSubmit={handleFormSubmit}>
                <h2>Fatura Yönetim</h2>
                <BreadCrumb paths={paths}/>
                <label>
                    Adınız
                    <input type='text' placeholder='Adınız' required />
                </label>
                <label>
                    Soyadınız
                    <input type='text' placeholder='Soyadınız' required />
                </label>
                <label>
                    GSM
                    <input type='text' placeholder='0535...' required />
                </label>
                {!isPayBill && (
                    <>
                    <label>
                        Fatura Türü
                        <select value={selectedOption} onChange={handleOptionChange}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>Fatura Tutarı
                        <input type='number' placeholder='Fatura Tutarı' required/>
                        </label>
                    </>
                    
                )}
                <label>Fatura Dosyası
                    <input type='file' required />
                </label>

                {!isPayBill && (<button >Faturayı Yüklemeyi Tamamla</button>)}
                {isPayBill && (<button >Fatura bağışı yap</button>)}
                <Link onClick={() => { setIsPayBill(!isPayBill) }}>{!isPayBill && (<span>Başka birisinin faturasına yardım mı etmek istiyorsunuz ? </span>)}</Link>
                <Link onClick={() => { setIsPayBill(!isPayBill) }}>{isPayBill && (<span>Başka birisinin faturasına yardım mı etmek istiyorsunuz ? </span>)}</Link>

            </form>
        </section>

    )
}

export default ManageBill;