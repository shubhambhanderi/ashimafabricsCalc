import React, { useState, useEffect } from 'react'
import { Select, Input } from 'antd';
import './UI.css';
import Code from "./Code";
const { Option } = Select;


function UI() {
  const [mode, setMode] = useState(true);//true = online and false = offline
  const [data, setData] = useState({ code: "0", read: "0", pick: "0", width: "0", ends: "0", view: "", warp: "", warpDinier: "0", weft: "", weftDinier: "0" });
  const [read, setRead] = useState();
  const [pick, setPick] = useState();
  const [width, setWidth] = useState();
  const [ends, setEnds] = useState();
  const [warp, setWarp] = useState();
  const [weft, setWeft] = useState();
  const [rateWarp, setRateWarp] = useState();
  const [rateWeft, setRateWeft] = useState();
  const [yarnRate, setYarnRate] = useState();
  const [sellingRate, setSellingRate] = useState();
  const [weight, setWeight] = useState();
  const [warpValue, setWarpValue] = useState();
  const [weftValue, setWeftValue] = useState();
  useEffect(() => {
    return
  }, [mode]);

  useEffect(() => {
    console.log(data);

    //OnLoom Read
    let temp_read = parseFloat(data['read']);
    temp_read = temp_read - 4;
    setRead(temp_read.toString());
    //OnLoom Pick
    let temp_pick = parseFloat(data['pick']);
    temp_pick = temp_pick - 4;
    setPick(temp_pick.toString());
    //OnLoom Width
    let temp_width = parseFloat(data['width']);
    temp_width = temp_width + 2.5;
    setWidth(temp_width.toString());
    //Ends
    if (temp_read >= 0 && temp_width >= 0) {
      let temp_ends = temp_read * temp_width;
      setEnds(temp_ends.toString());
    }
    return
  }, [data])

  function handleSellingRate(e) {
    setSellingRate(e.target.value);
  }

  useEffect(() => {
    // return () => {
    let temp_warp_value = (parseFloat(data['ends']) * parseFloat(data['warpDinier']) * 110) / 9000000;
    let temp_warp = temp_warp_value * rateWarp;
    setWarpValue(temp_warp_value);
    setWeight(temp_warp_value + weftValue)
    // console.log("temp_warp", temp_warp);
    setYarnRate((temp_warp + parseFloat(weft)).toString());
    setWarp(temp_warp);
    // console.log('warpValue', warpValue)
    // }
  })//, [data, rateWarp])

  function handleWarpMethod(e) {
    setRateWarp(e.target.value);
    // console.log('hello wrap', e.target.value)
  }

  useEffect(() => {
    // return () => {
    let temp_weft_value = ((parseFloat(data['weftDinier']) + 5) * pick * (parseFloat(data['width']) + 7)) / 90000;

    let temp_weft = temp_weft_value * rateWeft;
    setWeftValue(temp_weft_value);
    setWeight(temp_weft_value + warpValue);
    // console.log(temp_weft);
    setYarnRate((temp_weft + parseFloat(warp)).toString());
    setWeft(temp_weft);
    console.log('weftValue', temp_weft_value, temp_weft);
    // }
  })//, [rateWeft, data])

  function handleWeftMethod(e) {
    setRateWeft(e.target.value);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
    setMode(value === "true");
  }

  const onReadChange = (e) => {
    let data1 = { ...data };
    data1['read'] = e.target.value;
    setData(data1);
  }
  const onPickChange = (e) => {
    let data1 = { ...data };
    data1['pick'] = e.target.value;
    setData(data1);
  }
  const onWidthChange = (e) => {
    let data1 = { ...data };
    data1['width'] = e.target.value;
    setData(data1);
  }
  const onEndChange = (e) => {
    let data1 = { ...data };
    data1['ends'] = e.target.value;
    setData(data1);
  }
  const onWarpDinierChange = (e) => {
    let data1 = { ...data };
    data1['warpDinier'] = e.target.value;
    setData(data1);
  }
  const onWeftDinierChange = (e) => {
    let data1 = { ...data };
    data1['weftDinier'] = e.target.value;
    setData(data1);
  }

  return (
    <div className="main">
      <div>
        <div>
          <p >
            Select Mode:
          </p>
        </div>
        <div>
          <p>
            <center>
              <Select defaultValue="true" style={{ width: '100%' }} onChange={handleChange}>
                <Option value="true">Online</Option>
                <Option value="false">Offline</Option>
              </Select>
            </center>
          </p>
        </div>
      </div>
      <div>
        {/* {mode} */}
        {mode && <Code data={data} setData={setData} />}
      </div>
      <div className="topMargin">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Read</th>
              <th>Pick</th>
              <th>Width</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "20%" }}>ON Table:</td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#589DD1" }} value={data['read']} onChange={onReadChange} /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#FEE89B" }} value={data['pick']} onChange={onPickChange} /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#F6C8AD" }} value={data['width']} onChange={onWidthChange} /></td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>ON Loom:</td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#589DD1" }} value={read} readOnly /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#FEE89B" }} value={pick} readOnly /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#F6C8AD" }} value={width} readOnly /></td>
            </tr>
            <br />
            <tr>
              <td style={{ width: "20%" }}>ENDS:</td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#FBD0CF" }} value={ends} /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#FBD0CF" }} value={data['ends']} onChange={onEndChange} /></td>
            </tr>
          </tbody>
        </table>
      </div>
      {mode && (<div className="topMargin">
        <table >
          <thead>
            <tr>
              <th>Warp:</th>
              <th>Weft:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input type="text" style={{ width: "100%" }} value={data['warp']} readOnly /></td>
              <td><Input type="text" style={{ width: "100%" }} value={data['weft']} readOnly /></td>
            </tr>
          </tbody>
        </table>
      </div>)}
      <div className="topMargin">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Warp</th>
              <th>Weft</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "20%" }}>YARN:</td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#C7E4CA" }} value={data['warpDinier']} onChange={onWarpDinierChange} /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#C7E4CA" }} value={data['weftDinier']} onChange={onWeftDinierChange} /></td>
            </tr>
            <tr>
              <td style={{ width: "20%" }}>RATE:</td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#BCE1F7" }} onChange={handleWarpMethod} value={rateWarp} /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#BCE1F7" }} onChange={handleWeftMethod} value={rateWeft} /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="topMargin">
        <table>
          <thead>
            <tr>
              <th>Yarn Rate</th>
              <th>Selling Rate</th>
              <th>GST</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#6EB546" }} value={yarnRate} readOnly /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#4A6AB2" }} value={sellingRate} onChange={handleSellingRate} /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#4A6AB2" }} value={parseFloat(sellingRate) * 5 / 100 + parseFloat(sellingRate)} readOnly /></td>
            </tr>
            <tr>
              <td><Input type="number" style={{ width: "100%" }} value={parseFloat(yarnRate) / 100} readOnly /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#6EB546" }} value={(parseFloat(sellingRate) - (parseFloat(yarnRate) / 100))} readOnly /></td>
              <td><Input type="number" style={{ width: "100%", backgroundColor: "#6EB546" }} value={(parseFloat(sellingRate) * 5 / 100 + parseFloat(sellingRate)) - (parseFloat(yarnRate) / 100)} readOnly /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="topMargin">
        <table >
          <thead>
            <tr>
              <th>Weight:</th>
              <th>GSM:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input type="number" style={{ width: "100%" }} value={weight} readOnly /></td>
              <td><Input type="number" style={{ width: "100%" }} value={parseFloat(weight) / 100 / parseFloat(data['width']) * 39.36} readOnly /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UI
