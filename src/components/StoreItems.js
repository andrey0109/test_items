import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-paginate';
import md5 from 'md5';
import '../components/Store.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const apiUrl = 'https://api.valantis.store:41000/';
const password = 'Valantis';

const generateAuthHeader = () => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const authString = md5(`${password}_${timestamp}`);
  return {
    'X-Auth': authString,
  };
};

const makeApiRequest = async (action, params) => {
  const authHeader = generateAuthHeader();
  const requestBody = {
    action,
    params,
  };

  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        ...authHeader,
        'Content-Type': 'application/json',
      },
    });

    return response.data.result;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

const StoreItems = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [filterName, setFilterName] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [filterBrand, setFilterBrand] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let queryParams = {};

        if (filterName) queryParams.product = filterName;
        if (filterPrice) queryParams.price = parseFloat(filterPrice);
        if (filterBrand) queryParams.brand = filterBrand;

        const filteredIds = Object.keys(queryParams).length > 0 ? await makeApiRequest('filter', queryParams) : await makeApiRequest('get_ids', {});
        const itemsData = await makeApiRequest('get_items', { ids: filteredIds });
        const uniqueItems = Array.from(new Map(itemsData.map(item => [item.id, item])).values());
        setItems(uniqueItems);
        setPageCount(Math.ceil(uniqueItems.length / 50));
      } catch (error) {
        console.error('Fetch data error:', error);
        if (error.response && error.response.data && error.response.data.error_id) {
          console.error('API Error ID:', error.response.data.error_id);
        }
      }
    };

    fetchData();
  }, [filterName, filterPrice, filterBrand]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const itemsPerPage = 50;
  const offset = currentPage * itemsPerPage;
  const paginatedItems = items.slice(offset, offset + itemsPerPage);

  const applyFilters = () => {
    setCurrentPage(0);
  };

  return (
    <div className="container">
      <div className="filters">
        <input type="text" value={filterName} onChange={(e) => setFilterName(e.target.value)} placeholder="Название" />
        <input type="number" value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} placeholder="Цена" />
        <input type="text" value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)} placeholder="Бренд" />
        <div className="button-container">
  <button onClick={applyFilters}>Фильтровать</button>
  <button onClick={() => {
    setFilterName('');
    setFilterPrice('');
    setFilterBrand('');
  }}>Очистить</button>
</div>
      </div>
      <div className="row m-2">
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card w-100" style={{ minHeight: 225 }}>
                <div className="card-body ">
                  <h4 className="card-title text-center h2">{item.product}</h4>
                  <h6 className="card-subtitle pt-4 text-center ">Id: {item.id}</h6>
                  <h6 className="card-subtitle pt-4 text-center">Цена: ${item.price.toFixed(2)}</h6>
                  <p className="card-text">Бренд: {item.brand}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>Ничего не найдено</h2>
        )}
      </div>

      <Pagination
        previousLabel="Предыдущая"
        nextLabel="Следующая"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

export default StoreItems;
