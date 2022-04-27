import logo from '../images/taipeilogo.png';
import React, {useState} from 'react';
import {
  StyledWrapper,
  StyledLogoBar,
  StyledGraph,
  StyledBar
} from '../style/appStyled.js';
import axios from 'axios';
import ReactECharts from 'echarts-for-react'




function App() {
  const [datas, setDatas] = useState([]);
    axios.get('https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-049')
    .then((res) => {
      console.log(res);
      const data = res.data.result.records;
      setDatas(data);
    })
    .catch((err) => {
      console.log(err);
    })
  const [ordinary_m, setOrdinary_m] = useState()
  const [ordinary_f, setOrdinary_f] = useState()
  const [single_m, setSingle_m] = useState()
  const [single_f, setSingle_f] = useState()

  function changeSelect(event) {
    const idx = event.target.value;
    const ordinary_m_value = datas[idx].household_ordinary_m;
    const ordinary_f_value = datas[idx].household_ordinary_f;
    const single_m_value = datas[idx].household_single_m;
    const single_f_value = datas[idx].household_single_f;
    setOrdinary_m(ordinary_m_value)
    setOrdinary_f(ordinary_f_value)
    setSingle_m(single_m_value)
    setSingle_f(single_f_value)

    console.log(ordinary_m_value, ordinary_f_value, single_m_value, single_f_value)
    // console.log(datas[code].household_ordinary_m, datas[code].household_ordinary_f)
    // datas[code]
    // {
    //   datas.map((codes) => {
    //     return (
    //       console.log(datas.code)

    //     );
    //   })
    // }
  }
  
  var getOption = (ordinary_m, ordinary_f, single_m, single_f) => {
    return {
      tooltip:{
          trigger: 'axis'
      },
      legend: {
        bottom: "4%",
        data: ['男', '女']
      },
      xAxis: {
          data: ['共同生活戶','獨立生活戶',]
      },
      yAxis: {
          type: 'value'
      },
      series : [
        {
          name:'男',
          type:'bar',
          barWidth: '25%',
          data:[ordinary_m, single_m]
        },
        {
          name: '女',
          type: 'bar',
          barWidth: '25%',
          data: [ordinary_f, single_m]
        }
      ]
    }
  }
  
    return (
    <StyledWrapper>
      <StyledLogoBar>
        <img src={logo}></img>
        <div className="logo_title">110年人口戶數及性別</div>
      </StyledLogoBar>
      <StyledGraph>
        <div className="region_title">地區</div>    
        {/* <button onClick={() => { getDatas() }}>check</button> */}
        <select name="region" id="region" onChange={changeSelect}>
            {
              
              datas.map((data, index) => {
                return (
                    <option value={index} key={data.district_code}>{data.site_id} {data.village}</option>
                    );
                  })
            
            }
          </select> 
      </StyledGraph>
      <StyledBar>
          <ReactECharts
            option={getOption(ordinary_m, ordinary_f, single_m, single_f)}
            className={'echarts -for-react'}
            style={{ width: '100%', height: '500px', textAlign: 'center', padding: '0px 5%'}}
          />
      </StyledBar>
    </StyledWrapper>
  );
}
export default App;
