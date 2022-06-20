import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery'; 
class RezervasyonDetay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            alisyeri: this.props.location.state.alisyeri,
            donusyeri: this.props.location.state.donusyeri,
            alistarih: this.props.location.state.alistarih,
            donustarih: this.props.location.state.donustarih,
            alissaat: this.props.location.state.alissaat,
            alisdakika: this.props.location.state.alisdakika,
            donussaat: this.props.location.state.donussaat,
            donusdakika: this.props.location.state.donusdakika,
            aracmarka: this.props.location.state.aracmarka,
            aracmodel: this.props.location.state.aracmodel,
            segment: this.props.location.state.segment,
            aracresim: this.props.location.state.aracresim,
            yolcu: this.props.location.state.yolcu,
            kapi: this.props.location.state.kapi,
            bagaj: this.props.location.state.bagaj,
            carCount: 0,
            price : this.props.location.state.price,
            paymentBaseUrl: "https://blueapi.cf/Payment/payment3d",
            url : window.location.host
        };
        this.style = {
            height: "35px",
            fontSize: "14px",
            width: "200px"
        };
        this.btnClose = this.btnClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post(this.state.paymentBaseUrl +'?url=' + this.state.url +'&ad='+e.target.ad.value+'&soyad='+e.target.soyad.value+'&cardNumber='+e.target.kartno.value+'&cvv='+e.target.cvv.value+'&ay='+e.target.sktay.value+'&yil='+e.target.sktyil.value+'&tutar='+this.state.price)
        .then(res => {
            $("#iyzico").html(res.data);
        });
    }

    btnClose() {
        this.setState({ payment: false });
    }
    componentDidMount() { 

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="car-details-page-wrapper">
                    <div className="car-details-container payment">
                        <aside className="car-results-sidebar">
                            <div className="desktop">
                                <div className="carlist-search-block-wrapper">
                                    <div className="edit-search-wrapper">
                                        <h3>Arama Bilgileri</h3><button className="edit-button bg-button" /></div>
                                    <div className="search-preferences-wrapper visible">
                                        <div className="pickup-data">
                                            <h3>Alış Yeri</h3>
                                            <p className="location">{this.state.alisyeri}</p>
                                            <p className="time">{this.state.alistarih} {this.state.alissaat}:{this.state.alisdakika}</p>
                                        </div>
                                        <div className="dropoff-data">
                                            <h3>Dönüş Yeri</h3>
                                            <p className="location">{this.state.donusyeri}</p>
                                            <p className="time">{this.state.donustarih} {this.state.donussaat}:{this.state.donusdakika}</p>
                                        </div>
                                        <div className="modify-wrapper"><Link to="/"><button type="button" className="bg-button"><span>Değiştir</span></button></Link></div>
                                    </div>
                                    <div className="search-block-wrapper hidden">
                                        <div className="bcrm-search-block-wrapper">
                                            <div className="bcrm-search-block">
                                                <div className="ant-row-flex ant-row-flex-start">
                                                    <div className="ant-col gutter-row bcrm-pickup-locationsDropdown">
                                                        <div><span className="bcrm-search-description">Teslim Alınacak Konum</span>
                                                            <div className="ant-select ant-select-enabled ant-select-allow-clear ant-select-no-arrow">
                                                                <div className="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="a988a878-1cb5-444b-d373-49960575ad88" aria-expanded="false" tabIndex={0}>
                                                                    <div className="ant-select-selection__rendered">
                                                                        <div className="ant-select-selection-selected-value" title="Istanbul New Grand Airport, İstanbul, Türkiye" style={{ display: 'block', opacity: 1 }}>Istanbul New Grand Airport, İstanbul, Türkiye</div>
                                                                        <div className="ant-select-search ant-select-search--inline" style={{ display: 'none' }}>
                                                                            <div className="ant-select-search__field__wrap"><input autoComplete="off" className="ant-select-search__field" defaultValue="true" /><span className="ant-select-search__field__mirror">&nbsp;</span></div>
                                                                        </div>
                                                                    </div><span className="ant-select-selection__clear" unselectable="on" style={{ userSelect: 'none' }}><i aria-label="icon: close-circle" className="anticon anticon-close-circle ant-select-clear-icon" /></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col gutter-row pickup-date">
                                                        <div><span className="bcrm-search-description">Teslim alma tarihi</span>
                                                            <div className="InputFrom months-1"><i className="icon-cigar-wall-calendar" />
                                                                <div className="DayPickerInput"><input placeholder="12 Tem" readOnly defaultValue="12 Tem" /></div><span className="day">Salı</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col gutter-row pickup-time">
                                                        <div>
                                                            <div className="ant-select ant-select-enabled">
                                                                <div className="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="71eaf68c-a771-4880-bbf7-c0be378eee1a" aria-expanded="false" aria-label="search-form-time"
                                                                    tabIndex={0}>
                                                                    <div className="ant-select-selection__rendered">
                                                                        <div className="ant-select-selection-selected-value" title="10:00" style={{ display: 'block', opacity: 1 }}>10:00</div>
                                                                    </div><span className="ant-select-arrow" unselectable="on" style={{ userSelect: 'none' }}><i aria-label="icon: down" className="anticon anticon-down ant-select-arrow-icon"><svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></i></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col gutter-row return-date">
                                                        <div className=" "><span className="bcrm-search-description">Teslim etme tarihi</span>
                                                            <div className="InputTo months-1"><i className="icon-cigar-wall-calendar" />
                                                                <div className="DayPickerInput"><input placeholder="20 Tem" readOnly defaultValue="20 Tem" /></div><span className="day">Çarşamba</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col gutter-row return-time">
                                                        <div>
                                                            <div className="ant-select ant-select-enabled">
                                                                <div className="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="bb9ea784-f372-4c83-ae03-f58379e1e4b1" aria-expanded="false" aria-label="search-form-time"
                                                                    tabIndex={0}>
                                                                    <div className="ant-select-selection__rendered">
                                                                        <div className="ant-select-selection-selected-value" title="10:00" style={{ display: 'block', opacity: 1 }}>10:00</div>
                                                                    </div><span className="ant-select-arrow" unselectable="on" style={{ userSelect: 'none' }}><i aria-label="icon: down" className="anticon anticon-down ant-select-arrow-icon"><svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" /></svg></i></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col bcrm-show-price gutter-row">
                                                        <div><button type="button" className="show-price-btn bg-button"><span>Ara</span></button></div>
                                                    </div>
                                                    <div className="ant-col bcrm-return-location gutter-row"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="true" /><span className="ant-checkbox-inner" /></span></label><span>Araba farklı bir yerde teslim edilecek</span></div>
                                                    <div
                                                        className="ant-col bcrm-driver-age gutter-row"><label className="ant-checkbox-wrapper ant-checkbox-wrapper-checked"><span className="ant-checkbox ant-checkbox-checked"><input type="checkbox" className="ant-checkbox-input" defaultValue="true" defaultChecked /><span className="ant-checkbox-inner" /></span></label><span>Sürücü 25-70 yaş arası mı</span></div>
                                                    <div
                                                        className="ant-col bcrm-promo gutter-row"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="true" /><span className="ant-checkbox-inner" /></span></label><span>Promosyon kodu</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                    </aside>
                        <article className="car-results-content">
                            <div className="car about payment-details-car-block">
                                <div className="main">
                                    <div className="ant-row-flex">
                                        <div className="ant-col car-details ant-col-xs-24 ant-col-md-8">
                                            <div className="about">
                                                <p className="model">{this.state.aracmarka} {this.state.aracmodel}</p>
                                                <span className="similar">veya benzeri</span><span className="car-type">Segment: {this.state.segment}</span>
                                                <div className="pic">
                                                    <div className="preview">
                                                        <span className="select-car"><img src={this.state.aracresim} alt={this.state.aracmarka} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ant-col extras ant-col-xs-24 ant-col-md-16">
                                            <div className="extra-block">
                                                <div className="search-block">
                                                    <div className="ant-row">
                                                        <div className="ant-col ant-col-11 pickup">
                                                            <h3>Alış Yeri</h3>
                                                            <p className="location">{this.state.alisyeri}</p>
                                                            <p className="time">{this.state.alistarih} {this.state.alissaat}:{this.state.alisdakika}</p>
                                                        </div>
                                                        <div className="ant-col ant-col-11 dropoff">
                                                            <h3>Dönüş Yeri</h3>
                                                            <p className="location">{this.state.donusyeri}</p>
                                                            <p className="time">{this.state.donustarih} {this.state.donussaat}:{this.state.donusdakika}</p>
                                                        </div>
                                                        <div className="ant-col ant-col-2">
                                                            <Link style={{ paddingTop: "3px", paddingLeft: "7px" }} className="edit-button" to="/"><i className="icon-pen" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="extra-block">
                                                <div className="overall">
                                                    <div className="bottom-car-info">
                                                        <div className="mobile-block">
                                                            <div className="price">
                                                                <span className="quick-confirm">
                                                                    <span className="quick"><i className="icon-flash" />Hızlı Onay</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="included-block">
                                                            <div className="extended-car-rental-free">
                                                                <div className="ant-row">
                                                                    <div className="ant-col ant-col-xs-24 ant-col-lg-16" style={{ width: "100%" }}>
                                                                        <div className="included">
                                                                            <label className="title">Kiralamaya Dahildir:</label>
                                                                            <ul>
                                                                                <li>KM: Sınırsız</li>
                                                                                <li>Mini Hasar Sigortası: Evet</li>
                                                                                <li>Full Kasko: Evet</li>
                                                                                <li>Hırsızlık koruması: Evet</li>
                                                                                <li>Yol yardımı: Evet</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <article className="card-block" style={{ marginBottom: "-50px" }}>
                                <div className="credit-card-details">

                                    <div className="ant-spin-nested-loading">
                                        <div className="ant-spin-container">
                                            <div className="ant-form ant-form-horizontal">
                                                <div className="car" style={{ marginBottom: "70px" }}>
                                                    <div className="main">
                                                        <div className="header">
                                                            <h3>Kullanıcı Bilgileri</h3>
                                                        </div>
                                                        <div className="top-line" />
                                                        <div className="form">
                                                            <div />
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-7 ant-form-item-label">
                                                                    <label htmlFor="creditCardDetails_number" className="ant-form-item-required ant-form-item-no-colon" title="Ad">Ad</label>
                                                                </div>
                                                                <div className="ant-col ant-col-11 ant-form-item-control-wrapper">
                                                                    <div className="ant-form-item-control">
                                                                        <input type="text" className='form-control' name='ad' defaultValue='Ercem'></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-7 ant-form-item-label">
                                                                    <label htmlFor="creditCardDetails_number" className="ant-form-item-required ant-form-item-no-colon" title="Soyad">Soyad</label>
                                                                </div>
                                                                <div className="ant-col ant-col-11 ant-form-item-control-wrapper">
                                                                    <div className="ant-form-item-control">
                                                                        <input type="text" className='form-control' name='soyad' defaultValue='Avcı'></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-7 ant-form-item-label">
                                                                    <label htmlFor="creditCardDetails_number" className="ant-form-item-required ant-form-item-no-colon" title="Telefon">Telefon</label>
                                                                </div>
                                                                <div className="ant-col ant-col-11 ant-form-item-control-wrapper">
                                                                    <input type="text" className='form-control' name='telefon' defaultValue='5381111111'></input>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-7 ant-form-item-label">
                                                                    <label htmlFor="creditCardDetails_number" className="ant-form-item-required ant-form-item-no-colon" title="Mail">Mail</label>
                                                                </div>
                                                                <div className="ant-col ant-col-11 ant-form-item-control-wrapper">
                                                                    <input type="text" className='form-control' name='mail' defaultValue='sererprogram@gmail.com'></input>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-7 ant-form-item-label">
                                                                    <label htmlFor="creditCardDetails_number" className="ant-form-item-required ant-form-item-no-colon" title="TC">TC</label>
                                                                </div>
                                                                <div className="ant-col ant-col-11 ant-form-item-control-wrapper">
                                                                    <input type="text" className='form-control' name='tc' defaultValue='11111111111'></input>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="card-block" style={{ marginBottom: "-160px" }}>
                                <div className="credit-card-details">
                                    <div className="car">
                                        <div className="main">
                                            <div className="header"><h3>Karti Tipini Seçiniz:</h3></div>
                                            <div className="form">
                                                <div className="ant-row" style={{ marginLeft: '-8px', marginRight: '-8px' }}>
                                                    <div className="ant-col ant-col-8" style={{ paddingLeft: '8px', paddingRight: '8px' }}>
                                                        <div className="option active">
                                                            <span className="cc cc-visa" />
                                                            <p>Kredi Kartı</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ant-spin-nested-loading">
                                        <div className="ant-spin-container">
                                            <div className="ant-form ant-form-horizontal">
                                                <div className="car">
                                                    <div className="main">
                                                        <div className="header">
                                                            <h3>Kart Bilgileri</h3>
                                                        </div>
                                                        <div className="top-line" />
                                                        <div className="form">
                                                            <div />
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-7 ant-form-item-label">
                                                                    <label htmlFor="creditCardDetails_number" className="ant-form-item-required ant-form-item-no-colon" title="Ad">Kart Numarası</label>
                                                                </div>
                                                                <div className="ant-col ant-col-11 ant-form-item-control-wrapper">
                                                                    <div className="ant-form-item-control">
                                                                        <input type="text" className='form-control' name='kartno' defaultValue="5528790000000008"></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-7 ant-form-item-label">
                                                                    <label htmlFor="creditCardDetails_number" className="ant-form-item-required ant-form-item-no-colon" title="SKTAY">Son Kullanma Tarihi(AY)</label>
                                                                </div>
                                                                <div className="ant-col ant-col-11 ant-form-item-control-wrapper">
                                                                    <div className="ant-form-item-control">
                                                                        <input type="text" className='form-control' name='sktay' defaultValue="12"></input>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-7 ant-form-item-label">
                                                                    <label htmlFor="creditCardDetails_number" className="ant-form-item-required ant-form-item-no-colon" title="SKTYIL">Son Kullanma Tarihi(YIL)</label>
                                                                </div>
                                                                <div className="ant-col ant-col-11 ant-form-item-control-wrapper">
                                                                    <input type="text" className='form-control' name='sktyil' defaultValue="30"></input>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-7 ant-form-item-label">
                                                                    <label htmlFor="creditCardDetails_number" className="ant-form-item-required ant-form-item-no-colon" title="CVV">CVV</label>
                                                                </div>
                                                                <div className="ant-col ant-col-11 ant-form-item-control-wrapper">
                                                                    <input type="text" className='form-control' name='cvv' defaultValue="123"></input>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                Not: Kredi Kartı Bilgileri Sandbox Ortamına Kayıtlı Test Kartıdır.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btns--driver-details">
                                                    <button type="submit" className="driver-details-link bg-button green" style={{ height: '53px' }}><span>Rezervasyonu Tamamla</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        </article>
                    </div>
                </div>
                <div id="iyzico">
                </div>
            </form>
        )
    }
}
export default RezervasyonDetay;