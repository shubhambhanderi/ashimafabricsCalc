import React, { useState, useEffect } from 'react'
import { Select } from 'antd';
import './Code.css';
import axios from 'axios';
const { Option } = Select;

function Code(props) {
  const { data, setData } = props;
  const [codes, setCodes] = useState([]);
  // const [currentCode, setCurrentCode] = useState(null);

  useEffect(() => {
    axios.get('https://script.google.com/macros/s/AKfycbwyKPzFJjmlnZGNly6dYgnKExNIpZnb-qyFOrVsC7k7jlxtq5l8/exec?getCode=true')
      .then(res => {
        console.log(Object.values(res.data.codes))
        setCodes(Object.values(res.data.codes));
      })
    // return () => {
    //   cleanup
    // }
  }, [])

  // const getData = () => {
  // }

  function onChange(value) {
    console.log(`selected ${value}`);
    // setCurrentCode(value);
    axios.get('https://script.google.com/macros/s/AKfycbwyKPzFJjmlnZGNly6dYgnKExNIpZnb-qyFOrVsC7k7jlxtq5l8/exec?code=' + value)
      .then(res => {
        console.log('getting this', res.data);
        setData(res.data);
      })
    // getData();
  }

  function onBlur() {
    // console.log('blur');
  }

  function onFocus() {
    // console.log('focus');
  }

  function onSearch(val) {
    // console.log('search:', val);
  }
  return (
    <div>
      <div >
        <p>
          Code:
        </p>
      </div>
      <div>
        <center>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Select a quality code"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          // filterOption={(input, option) =>
          //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          // }
          >
            {codes && codes.map((key) => (
              <Option value={key} key={key}>{key}</Option>
            ))}
          </Select>
        </center>
      </div>
    </div>
  );
}

export default Code
