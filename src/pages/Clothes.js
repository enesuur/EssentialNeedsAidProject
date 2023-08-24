import Breadcrumb from '../components/Breadcrumb';
import ClotheCard from '../components/ClotheCard';
import Pagination from '../components/Pagination';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './clothes.css';
const Clothes = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');
  const dummyData = [
    {
      id: 1,
      title: 'Erkek Kıyafet',
      type: 'Ceket',
      size: 'L',
      gender: 'Erkek',
      category: 'clothe'
    },
    {
      id: 2,
      title: 'Erkek Kıyafet',
      type: 'Ceket',
      size: 'M',
      gender: 'Erkek',
      category: 'clothe'
    },
    {
      id: 3,
      title: 'Çocuk Giyim',
      type: 'Mont',
      size: 'S',
      gender: 'Erkek',
      category: 'clothe'
    },
    {
      id: 4,
      title: 'Spor Giyim',
      type: 'Eşofman',
      size: 'XL',
      gender: 'male',
      category: 'clothe'
    },
    {
      id: 5,
      title: 'Ayakkabı',
      type: 'Sneaker',
      size: '42',
      gender: 'unisex',
      category: 'clothe'
    },
    {
      id: 6,
      title: 'Aksesuar',
      type: 'Şapka',
      size: 'One Size',
      gender: 'unisex',
      category: 'clothe'
    },
    {
      id: 7,
      title: 'Plaj Giyim',
      type: 'Şort',
      size: 'M',
      gender: 'unisex',
      category: 'clothe'
    },
    {
      id: 8,
      title: 'Ofis Giyim',
      type: 'Pantolon',
      size: 'L',
      gender: 'unisex',
      category: 'clothe'
    },
    {
      id: 9,
      title: 'Düğün Kıyafeti',
      type: 'Smokin',
      size: 'XL',
      gender: 'male',
      category: 'clothe'
    },
    {
      id: 10,
      title: 'Ev Giyim',
      type: 'Pijama',
      size: 'S',
      gender: 'female',
      category: 'clothe'
    },
    {
      id: 10,
      title: 'Ev Giyim',
      type: 'Pijama',
      size: 'S',
      gender: 'female',
      category: 'clothe'
    },
    {
      id: 10,
      title: 'Ev Giyim',
      type: 'Pijama',
      size: 'S',
      gender: 'female',
      category: 'clothe'
    },
    {
      id: 10,
      title: 'Ev Giyim',
      type: 'Pijama',
      size: 'S',
      gender: 'female',
      category: 'clothe'
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dummyData.slice(firstPostIndex, lastPostIndex);

  return (
    <section className='clothes container'>
      <h2 className='section-title'>Kıyafetler</h2>
      <Breadcrumb paths={paths} />
      <div className='clothe-cards'>
        {currentPosts.map((data, idx) => (<ClotheCard data={data} key={idx} />))}
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
  )
}

export default Clothes

