import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { Input } from 'antd';
import { LIST_SEARCH_PARAM_KEY } from '../constant';

const { Search } = Input;
const ListSearch: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [value, setValue] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';
    setValue(curVal);
  }, [searchParams]);
  const handleSearch = (value: string) => {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    });
  };
  return (
    <Search
      size="large"
      allowClear
      placeholder="Enter key words"
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '260px' }}
    />
  );
};

export default ListSearch;
