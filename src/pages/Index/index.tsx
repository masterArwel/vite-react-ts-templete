import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { getCityList } from '@/api/test-price';

const Index: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/about');
  };
  useEffect(() => {
    async function init() {
      const actions = await getCityList();
      console.log('testetssts', actions);
    }
    init();
  }, []);
  return (<div>
    <p>123232</p>
    <Button type="primary" onClick={handleClick}>点击到about</Button>
    
  </div>);
};
export default Index;
