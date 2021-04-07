import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { getCityList, ICityItem } from '@/api/getCity';

const Index: React.FC = () => {
const [cityList, setCityList] = useState([] as ICityItem[])

  const history = useHistory();
  const handleClick = () => {
    history.push('/about');
  };
  useEffect(() => {
    async function init() {
      const actions = await getCityList();
      setCityList(actions.cityList)
    }
    init();
  }, []);
  return (<div>
    <Button type="primary" onClick={handleClick}>点击到about</Button>
    {cityList.map(item => <p key={item.value}>{item.value}</p>)}
  </div>);
};
export default Index;
