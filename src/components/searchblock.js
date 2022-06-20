import React, { useState, Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import options from './data';
import { Form } from "react-bootstrap";
import { browserHistory } from "react-router";
import axios from 'axios';
class searchblock extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      checked: true,
      data: []
    };
    this.style = {
      height: "50px",
      fontSize: "18px"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let status = true;
    var alisyeri = e.target.alisyeri.value;
    var donusyeri = e.target.donusyeri.value;
    var alistarih = e.target.alistarih.value;
    var donustarih = e.target.donustarih.value;
    var alissaat = document.getElementById("alissaat");
    var donussaat = document.getElementById("donussaat");
    if (alisyeri === "") {
      alert("Lütfen Alış Yerini Boş Bırakmayın!");
      status = false;
      return false;
    }
    if (donusyeri === "") {
      alert("Lütfen Dönüş Yerini Boş Bırakmayın!");
      status = false;
      return false;
    }
    if (alistarih === "") {
      alert("Lütfen Alış Tarihini Boş Bırakmayın!");
      status = false;
      return false;
    }
    if (donustarih === "") {
      alert("Lütfen Dönüş Tarihini Boş Bırakmayın!");
      status = false;
      return false;
    }
    if (status) {
      const stralissaat = alissaat.value.split(':');
      const strdonussaat = donussaat.value.split(':');
      this.props.history.push('/reservation?alisyeri=' + alisyeri + '&donusyeri=' + donusyeri + '&alistarih=' + alistarih +'&donustarih=' + donustarih + '&alissaat=' + stralissaat[0] + "&alisdakika=" + stralissaat[1] + "&donussaat=" + strdonussaat[0] + "&donusdakika=" + strdonussaat[1]+'&price=low');
    }
  }
  componentDidMount() {
    axios.get('https://blueapi.cf/Home/AllLocations')
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      window.onload = function() {
        window.alisFunc();
        window.teslimFunc();
        window.selectpicker();
    }
  }
  componentDidUpdate() {

      window.alisFunc();
      window.teslimFunc();
      window.selectpicker();
  }

  btnOtherLocation = () => {
    this.setState({ checked: !this.state.checked });
    const alisdiv = document.getElementById('alisdiv');
    const donusdiv = document.getElementById('donusdiv');
    if (this.state.checked == true) {
      alisdiv.style.width = '50%';
      donusdiv.style.display = 'block';
    }
    else {
      alisdiv.style.width = '100%';
      donusdiv.style.display = 'none';
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" id="inputdonusyeri"></input>
        <div className="home-search-block-wrapper">
          <div className="main-page-bg-wrapper"><img src="https://d30dxdpelzgyb4.cloudfront.net/_next/static/img/mainpage-theme-large-bg-22a66d1b8520d989f9ec5f7bbee092a2.jpg" alt="road" className="main-page-bg" /></div>
          <div className="home-search-block-cover">
            <div className="heading">
              <h1><b>BlueCar</b>Yüzlerce araç seçeneği ile kolayca kirala.</h1>
              <div className="heading-description">
              </div>
            </div>
            <div className="search-form-wrapper">
              <div className="bcrm-search-tabs">
                <h2><span>Araç Kiralama</span></h2>
              </div>
              <div className="bcrm-search-block-wrapper">
                <div className="bcrm-search-block">
                  <div className="ant-row-flex ant-row-flex-start">
                    <div className="ant-col gutter-row bcrm-pickup-locationsDropdown">
                      <div>
                        <div id='alisdiv' style={{ display: "block", width: "100%", float: "left", paddingRight: "3px" }}>
                          <span className="bcrm-search-description" style={{ paddingLeft: "0px" }}>Teslim Alınacak Konum</span>
                          <div className="ant-select ant-select-enabled ant-select-allow-clear ant-select-no-arrow">
                            <select className="js-example-basic-single" name="alisyeri" id="alisyeri" style={{ with: '100%' }}>
                              <option value=""></option>
                              {
                                this.state.data
                                  .map(location =>
                                    <option value={location.locationId} key={location.locationId}>{location.branch}</option>
                                  )
                              }
                            </select>
                          </div>
                        </div>
                        <div id='donusdiv' style={{ display: "none", width: "50%", float: "left" }}>
                          <div><span className="bcrm-search-description">İade Edilecek Konum</span>
                            <div className="ant-select ant-select-enabled ant-select-allow-clear ant-select-no-arrow">
                              <select className="js-example-basic-single" name="donusyeri" id="donusyeri" style={{ with: '50%' }}>
                              <option value=""></option>
                              {
                                this.state.data
                                  .map(location =>
                                    <option value={location.locationId} key={location.locationId}>{location.branch}</option>
                                  )
                              }
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col gutter-row pickup-date">
                      <div><span className="bcrm-search-description">Teslim alma tarihi</span>
                        <div className="InputFrom months-2" style={{ marginRight: "2px" }}><i className="icon-cigar-wall-calendar" />
                          <div className="DayPickerInput"><input id="alistarih" placeholder="Alış Tarihi" readOnly defaultValue="" /></div><span className="day"></span></div>
                      </div>
                    </div>
                    <div className="ant-col gutter-row pickup-time">
                      <div>
                        <div className="ant-select ant-select-enabled">
                          <Form.Select style={this.style} id="alissaat">
                            <option value="10:30" defaultValue>10:30</option>
                            <option value="11:00">11:00</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col gutter-row return-date">
                      <div className=" ">
                        <span className="bcrm-search-description">Teslim etme tarihi</span>
                        <div className="InputTo months-2" style={{ marginRight: "2px" }}>
                          <i className="icon-cigar-wall-calendar" />
                          <div className="DayPickerInput"><input id="donustarih" placeholder="Teslim Tarihi" readOnly defaultValue="" /></div>
                          <span className="day"></span>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col gutter-row return-time">
                      <div>
                        <div className="ant-select ant-select-enabled">
                          <Form.Select style={this.style} id="donussaat">
                            <option value="10:30" defaultValue>10:30</option>
                            <option value="11:00">11:00</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col bcrm-return-location gutter-row" style={{ marginTop: "12px" }}>
                      <label className="ant-checkbox-wrapper">
                        <input type="checkbox" style={{ cursor: "pointer" }} onChange={this.btnOtherLocation} />
                      </label>
                      <span style={{ paddingLeft: "20px" }}>Araba farklı bir yerde teslim edilecek</span>
                    </div>
                    <div className="ant-col bcrm-show-price gutter-row" style={{ marginTop: "-13px" }}>
                      <div>
                        <button type="submit" className="show-price-btn bg-button" ><span>Ara</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bcrm-all-brands-wrapper">
              <div className="bcrm-all-brands">
                <h3>Ünlü, güvenilir markalar.</h3>
                <span className="supplier hertz" /><span className="supplier dollar" /><span className="supplier europcar" /><span className="supplier thrifty" /><span className="supplier national" />
                <span className="supplier alamo" /><span className="supplier enterprise" /><span className="supplier sixt" />
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
export default searchblock
