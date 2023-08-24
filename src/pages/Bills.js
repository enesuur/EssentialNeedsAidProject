import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import BillCard from '../components/BillCard';
import Breadcrumb from '../components/Breadcrumb';
import Pagination from '../components/Pagination';
import './bills.css';

const Bill = () => {
  const [route, setRoute] = useState(null);
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');
  const navigate = useNavigate();
  const navigateToManageBills = (route) => {
    if(route) {
      navigate('/bills/manage',{state:{route:'requestBill'}});
    }else{
      navigate('/bills/manage',{state:{route:'donateBill'}});
    }
  }
  

  const dummyData = [
    {
      id: 1,
      title: 'Su Faturası',
      type: 'Su',
      price: 24,
      entryDate: '10.12.2023',
      dueDate: '15.12.2023',
      category:'bill',
      bool: true,
    },
    {
      id: 2,
      title: 'Elektrik Faturası',
      type: 'Elektrik',
      price: 120,
      entryDate: '11.12.2023',
      dueDate: '20.12.2023',
      category:'bill',
      bool: false,
    },
    {
      id: 3,
      title: 'Doğalgaz Faturası',
      type: 'Doğalgaz',
      price: 75,
      entryDate: '12.12.2023',
      dueDate: '10.12.2023',
      category:'bill',
      bool: true,
    },
    {
      id: 4,
      title: 'İnternet Faturası',
      type: 'İnternet',
      price: 50,
      entryDate: '13.12.2023',
      dueDate: '25.12.2023',
      category:'bill',
      bool: true,
    },
    {
      id: 5,
      title: 'Telefon Faturası',
      type: 'Telefon',
      price: 40,
      entryDate: '14.12.2023',
      dueDate: '18.12.2023',
      category:'bill',
      bool: false,
    },
    {
      id: 6,
      title: 'Kira Faturası',
      type: 'Kira',
      price: 800,
      entryDate: '15.12.2023',
      dueDate: '01.01.2024',
      category:'bill',
      bool: true,
    },
    {
      id: 7,
      title: 'Elektrik Faturası',
      type: 'Elektrik',
      price: 110,
      entryDate: '16.12.2023',
      dueDate: '23.12.2023',
      category:'bill',
      bool: false,
    },
    {
      id: 8,
      title: 'Su Faturası',
      type: 'Su',
      price: 30,
      entryDate: '17.12.2023',
      dueDate: '18.12.2023',
      category:'bill',
      bool: true,
    },
    {
      id: 9,
      title: 'Gaz Faturası',
      type: 'Gaz',
      price: 60,
      entryDate: '18.12.2023',
      dueDate: '25.12.2023',
      category:'bill',
      bool: true,
    },
    {
      id: 10,
      title: 'İnternet Faturası',
      type: 'İnternet',
      price: 55,
      entryDate: '19.12.2023',
      dueDate: '28.12.2023',
      category:'bill',
      bool: false,
    },
    {
      id: 11,
      title: 'İnternet Faturası',
      type: 'İnternet',
      price: 55,
      entryDate: '19.12.2023',
      dueDate: '28.12.2023',
      category:'bill',
      bool: false,
    },
    {
      id: 12,
      title: 'İnternet Faturası',
      type: 'İnternet',
      price: 55,
      entryDate: '19.12.2023',
      dueDate: '28.12.2023',
      category:'bill',
      bool: false,
    },
    {
      id: 13,
      title: 'İnternet Faturası',
      type: 'İnternet',
      price: 55,
      entryDate: '19.12.2023',
      dueDate: '28.12.2023',
      category:'bill',
      bool: false,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dummyData.slice(firstPostIndex, lastPostIndex);

  return (
    <section className='bills container'>
      <h1>Faturaları Yönet</h1>
      <Breadcrumb paths={paths}/>
      <div className='bill-option' >
        <div className='apply-bill' onClick={() => navigateToManageBills(true)} >
          <svg width='24' height='24'  viewBox="0 0 24 24">
            <path d="M20 16.572V5.142a2.286 2.286 0 0 0-2.286-2.285H8.571a2.286 2.286 0 0 0-2.285 2.286V16.57a2.286 2.286 0 0 0 2.285 2.286h9.143A2.286 2.286 0 0 0 20 16.572Z" clipRule="evenodd">
            </path>
            <path d="m6.063 5.64-2.29.833a2.286 2.286 0 0 0-1.366 2.93l3.909 10.74a2.286 2.286 0 0 0 2.93 1.366l6.363-2.513">
            </path>
            <path d="M9.714 8.571h5.715">
            </path>
            <path d="M9.714 10.857h6.857">
            </path><path d="M9.714 13.143h3.429">
            </path>
          </svg>

          <p>Fatura Başvurusu Yap</p>
        </div>

        <div className='donate-bill' onClick={() => navigateToManageBills(false)}>
          <svg width='24' height='24'  viewBox="0 0 24 24">
            <rect width="22" height="16" x="1" y="4" rx="2" ry="2"></rect>
            <path d="M1 10h22"></path>
          </svg>
          <p>Fatura Ödeme Başvurusu Yap</p>
        </div>
      </div>
      <div className='bill-cards'>
        {currentPosts.map((data, idx) =>
          <BillCard data={data} key={idx} />
        )}
      </div>
      <div className='pagination-content'>
        <Pagination
          totalPosts={dummyData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default Bill;
