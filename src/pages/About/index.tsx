import React, {useState} from 'react'
import {Button} from 'antd'
import { useHistory } from "react-router-dom"

const About = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/about/test')
  }
  return (<div>
    <p>ABout</p>
    <Button type="ghost" onClick={handleClick}>去测试</Button>
  </div>)
}
export default About