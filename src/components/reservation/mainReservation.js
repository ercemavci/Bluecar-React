import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from "react-bootstrap";
let _query = "";
let _alisyeri = "";
let _donusyeri = "";
let _alistarih = "";
let _donustarih = "";
let _alissaat = "";
let _alisdakika = "";
let _donussaat = "";
let _donusdakika = "";
let _price = "";
class mainReservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            alisyeri: "",
            donusyeri: "",
            alistarih: "",
            donustarih: "",
            alissaat: "",
            donussaat: "",
            carCount: 0,
            update: false,
            baseUrl: "https://blueapi.cf/Home/BlueCars",
            price: 0,
        };
        this.style = {
            height: "35px",
            fontSize: "14px",
            width: "200px"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    queryData() {
        _query = new URLSearchParams(this.props.location.search);
        _alisyeri = _query.get('alisyeri');
        _donusyeri = _query.get('donusyeri');
        _alistarih = _query.get('alistarih');
        _donustarih = _query.get('donustarih');
        _alissaat = _query.get('alissaat');
        _alisdakika = _query.get('alisdakika');
        _donussaat = _query.get('donussaat');
        _donusdakika = _query.get('donusdakika');
        _price = _query.get('price');
    }

    componentDidMount() {
        this.queryData();
        axios.get(this.state.baseUrl + '?alisyeri=' + _alisyeri + '&donusyeri=' + _donusyeri + '&alistarih=' + _alistarih + '&alissaat=' + _alissaat + '&alisdakika=' + _alisdakika + '&donustarih=' + _donustarih + '&donussaat=' + _donussaat + '&donusdakika=' + _donusdakika + '&price=' + _price)
            .then(res => {
                const data = res.data;
                this.setState({ data });
                this.setState({ alisyeri: data[0]['alisyeri'] });
                this.setState({ donusyeri: data[0]['donusyeri'] });
                this.setState({ alissaat: _alissaat });
                this.setState({ alisdakika: _alisdakika });
                this.setState({ donussaat: _donussaat });
                this.setState({ donusdakika: _donusdakika });
                let count = data.length;
                this.setState({ carCount: count });
            })
        window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        if (this.state.update) {
            this.queryData();
            axios.get(this.state.baseUrl + '?alisyeri=' + _alisyeri + '&donusyeri=' + _donusyeri + '&alistarih=' + _alistarih + '&alissaat=' + _alissaat + '&alisdakika=' + _alisdakika + '&donustarih=' + _donustarih + '&donussaat=' + _donussaat + '&donusdakika=' + _donusdakika + '&price=' + _price)
                .then(res => {
                    const data = res.data;
                    this.setState({ data });
                })
            this.setState({ update: false });
        }
    }

    handleClick() {
        alert("Özel Teklif için Mail Atınız!");
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: "/rezervasyondetay",
            state: {
                alisyeri: this.state.alisyeri,
                donusyeri: this.state.donusyeri,
                alistarih: _alistarih,
                donustarih: _donustarih,
                alissaat: _alissaat,
                alisdakika: _alisdakika,
                donussaat: _donussaat,
                donusdakika: _donusdakika,
                aracmarka: e.target.aracmarka.value,
                aracmodel: e.target.aracmodel.value,
                segment: e.target.segment.value,
                aracresim: e.target.aracresim.value,
                yolcu: e.target.yolcu.value,
                kapi: e.target.kapi.value,
                bagaj: e.target.bagaj.value,
                price: e.target.price.value,
            }
        });
    }

    handleChange = event => {
        this.setState({ update: true });
        this.props.history.push('/reservation?alisyeri=' + _alisyeri + '&donusyeri=' + _donusyeri + '&alistarih=' + _alistarih + '&alissaat=' + _alissaat + '&alisdakika=' + _alisdakika + '&donustarih=' + _donustarih + '&donussaat=' + _donussaat + '&donusdakika=' + _donusdakika + '&price=' + event.target.value);
    };
    render() {
        return (
            <div className="car-results-page-wrapper" style={{ marginBottom: "-190px" }}>
                <div>
                    <div className="car-results-page">
                        <aside className="car-results-sidebar">
                            <div className="desktop">
                                <div className="carlist-search-block-wrapper">
                                    <div className="edit-search-wrapper">
                                        <h3>Arama Bilgileri</h3>
                                        <button type="button" className="edit-button bg-button">
                                        </button>
                                    </div>
                                    <div className="search-preferences-wrapper visible">
                                        <div className="pickup-data">
                                            <h3>Alış Yeri</h3>
                                            <p className="location">{this.state.alisyeri}</p>
                                            <p className="time">{_alistarih} {_alissaat}:{_alisdakika}</p>
                                        </div>
                                        <div className="dropoff-data">
                                            <h3>Dönüş Yeri</h3>
                                            <p className="location">{this.state.donusyeri}</p>
                                            <p className="time">{_donustarih} {_donussaat}:{_donusdakika}</p>
                                        </div>
                                        <div className="modify-wrapper">
                                            <Link to="/">
                                                <button type="button" className="bg-button"><span>Değiştir</span></button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="search-block-wrapper hidden">
                                        <div className="bcrm-search-block-wrapper">
                                            <div className="bcrm-search-block">
                                                <div className="ant-row-flex ant-row-flex-start">
                                                    <div className="ant-col gutter-row bcrm-pickup-locationsDropdown">
                                                        <div>
                                                            <span className="bcrm-search-description">Teslim Alınacak Konum</span>
                                                            <div className="ant-select ant-select-enabled ant-select-allow-clear ant-select-no-arrow">
                                                                <div className="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="a988a878-1cb5-444b-d373-49960575ad88" aria-expanded="false" tabIndex={0}>
                                                                    <div className="ant-select-selection__rendered">
                                                                        <div className="ant-select-selection-selected-value" title="Istanbul New Grand Airport, İstanbul, Türkiye" style={{ display: 'block', opacity: 1 }}>Istanbul New Grand Airport, İstanbul, Türkiye</div>
                                                                        <div className="ant-select-search ant-select-search--inline" style={{ display: 'none' }}>
                                                                            <div className="ant-select-search__field__wrap">
                                                                                <input autoComplete="off" className="ant-select-search__field" defaultValue /><span className="ant-select-search__field__mirror">&nbsp;</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="ant-select-selection__clear" unselectable="on" style={{ userSelect: 'none' }}><i aria-label="icon: close-circle" className="anticon anticon-close-circle ant-select-clear-icon" /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col gutter-row pickup-date">
                                                        <div>
                                                            <span className="bcrm-search-description">Teslim alma tarihi</span>
                                                            <div className="InputFrom months-1">
                                                                <i className="icon-cigar-wall-calendar" />
                                                                <div className="DayPickerInput">
                                                                    <input placeholder="12 Tem" readOnly defaultValue="12 Tem" />
                                                                </div>
                                                                <span className="day">Salı</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col gutter-row pickup-time">
                                                        <div>
                                                            <div className="ant-select ant-select-enabled">
                                                                <div className="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="71eaf68c-a771-4880-bbf7-c0be378eee1a" aria-expanded="false" aria-label="search-form-time" tabIndex={0}>
                                                                    <div className="ant-select-selection__rendered">
                                                                        <div className="ant-select-selection-selected-value" title="10:00" style={{ display: 'block', opacity: 1 }}>10:00
                                                                        </div>
                                                                    </div>
                                                                    <span className="ant-select-arrow" unselectable="on" style={{ userSelect: 'none' }}>
                                                                        <i aria-label="icon: down" className="anticon anticon-down ant-select-arrow-icon">
                                                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                            </svg>
                                                                        </i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col gutter-row return-date">
                                                        <div className=" ">
                                                            <span className="bcrm-search-description">Teslim etme tarihi</span>
                                                            <div className="InputTo months-1">
                                                                <i className="icon-cigar-wall-calendar" />
                                                                <div className="DayPickerInput">
                                                                    <input placeholder="20 Tem" readOnly defaultValue="20 Tem" />
                                                                </div>
                                                                <span className="day">Çarşamba</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col gutter-row return-time">
                                                        <div>
                                                            <div className="ant-select ant-select-enabled">
                                                                <div className="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-controls="bb9ea784-f372-4c83-ae03-f58379e1e4b1" aria-expanded="false" aria-label="search-form-time" tabIndex={0}>
                                                                    <div className="ant-select-selection__rendered">
                                                                        <div className="ant-select-selection-selected-value" title="10:00" style={{ display: 'block', opacity: 1 }}>10:00</div>
                                                                    </div>
                                                                    <span className="ant-select-arrow" unselectable="on" style={{ userSelect: 'none' }}>
                                                                        <i aria-label="icon: down" className="anticon anticon-down ant-select-arrow-icon">
                                                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                            </svg>
                                                                        </i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col bcrm-show-price gutter-row">
                                                        <div>
                                                            <button type="button" className="show-price-btn bg-button"><span>Ara</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="ant-col bcrm-return-location gutter-row">
                                                        <label className="ant-checkbox-wrapper"><span className="ant-checkbox">
                                                            <input type="checkbox" className="ant-checkbox-input" defaultValue />
                                                            <span className="ant-checkbox-inner" /></span></label>
                                                        <span>Araba farklı bir yerde teslim edilecek</span>
                                                    </div>
                                                    <div className="ant-col bcrm-driver-age gutter-row">
                                                        <label className="ant-checkbox-wrapper ant-checkbox-wrapper-checked">
                                                            <span className="ant-checkbox ant-checkbox-checked">
                                                                <input type="checkbox" className="ant-checkbox-input" defaultValue defaultChecked />
                                                                <span className="ant-checkbox-inner" /></span></label>
                                                        <span>Sürücü 25-70 yaş arası mı</span>
                                                    </div>
                                                    <div className="ant-col bcrm-promo gutter-row">
                                                        <label className="ant-checkbox-wrapper">
                                                            <span className="ant-checkbox">
                                                                <input type="checkbox" className="ant-checkbox-input" defaultValue />
                                                                <span className="ant-checkbox-inner" /></span></label>
                                                        <span>Promosyon kodu</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <article className="car-results-content">
                            <div>
                                <div className="sort-block-wrapper">
                                    <h1 className="sort-block--destination">
                                        <span className="count">{this.state.alisyeri}&nbsp;</span>
                                        <span className="destination-info">{this.state.carCount}&nbsp;</span>
                                        <span className="destination-info">araç bulundu!</span></h1>
                                    <div className="sort-block">
                                        <label className="sort-block--label">Sırala:</label><i className="sort-block--icon-sort" />
                                        <Form.Select style={this.style} id="sirala" onChange={this.handleChange}>
                                            <option value="low" defaultValue>Önce En Düşük Fiyat</option>
                                            <option value="top">Önce En Yüksek Fiyat</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="special-offer-banner">
                                    <dl><dt>Her gün en iyi değer</dt>
                                        <dd>Haydi gidelim!</dd>
                                    </dl>
                                    <button type="button" className="offer-btn bg-button" onClick={this.handleClick}><span>Özel Teklif</span></button>
                                </div>
                                {
                                    this.state.data
                                        .map(car =>
                                            <Form onSubmit={this.handleSubmit} key={car.objectId} >
                                                <div>
                                                    <div className="car-blocks-list">
                                                        <input type="hidden" name="aracmarka" value={car.aracmarka}></input>
                                                        <input type="hidden" name="aracmodel" value={car.aracmodel}></input>
                                                        <input type="hidden" name="vites" value={car.vites}></input>
                                                        <input type="hidden" name="yakit" value={car.yakit}></input>
                                                        <input type="hidden" name="segment" value={car.segment}></input>
                                                        <input type="hidden" name="aracresim" value={car.aracresim}></input>
                                                        <input type="hidden" name="yolcu" value={car.yolcu}></input>
                                                        <input type="hidden" name="kapi" value={car.kapi}></input>
                                                        <input type="hidden" name="bagaj" value={car.bagaj}></input>
                                                        <input type="hidden" name="price" value={car.toplam_fiyat}></input>
                                                        <div className="car">
                                                            <div className="main">
                                                                <div className="promotion" />
                                                                <div className="pic">
                                                                    <div className="preview">
                                                                        <span className="select-car">
                                                                            <img src={car.aracresim} alt={car.aracmarka} /></span>
                                                                    </div>
                                                                </div>
                                                                <div className="about" style={{ fontSize: "17px" }}>
                                                                    <p className="model">{car.aracmarka} {car.aracmodel}<span className="similar">ya da benzer</span></p><span className="car-type">{car.kasatip}</span>
                                                                    <div className="car-options"><span className="item"></span>
                                                                        <span className="item">{car.vites} {car.yakit}</span></div>
                                                                    <div className="overall"><span><span>{car.yolcu}</span><span className="description"> Koltuk </span>
                                                                        <i className="icon-car-details-seats" /></span><i className="separate" /><span>
                                                                            <span>4</span><span className="description"> Kapı </span><i className="icon-car-details-doors" />
                                                                        </span><i className="separate" /><span><span>{car.bagaj}</span><span className="description"> Valiz</span>
                                                                            <i className="icon-car-details-baggage" /></span>
                                                                    </div>
                                                                </div>
                                                                <div className="desktop-block">
                                                                    <div className="price "><span className="sales-leader" /><span className="per-day">Günlük fiyat:</span>
                                                                        <span className="amount">TRY {car.gunluk_fiyat}</span><span className="total" style={{ fontSize: "20px" }}>Toplam: TRY {car.toplam_fiyat}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="options">
                                                                <div className="customer-rating">
                                                                    <button type="button" className="customer-rating-btn bg-button text">
                                                                        <div className="supplier-rating-widget">
                                                                            <div className="rating-section">
                                                                            </div>
                                                                            <div style={{ fontSize: "20px" }}>A FİRMASI</div>
                                                                        </div><span> </span></button>
                                                                </div>
                                                                <div className="terms-conditions">
                                                                    <button type="button" className="terms-conditions-btn bg-button"><span>Şartlar ve koşullar</span>
                                                                    </button>
                                                                </div>
                                                                <div className="fuel-policy">
                                                                    <button type="button" className="fuel-policy-btn bg-button text">
                                                                        <span>Dolu/Dolu</span></button>
                                                                </div>
                                                                <div className="pick-up-location">
                                                                    <span><i className="icon-airport" /><span className="pick-up-location__title">Tanışın ve selamlaşın</span></span>
                                                                </div>
                                                            </div>
                                                            <div className="bottom-car-info">
                                                                <div className="mobile-block">
                                                                    <div className="price "><span className="sales-leader" />
                                                                        <span className="per-day">Günlük fiyat:</span><span className="amount">TRY {car.gunluk_fiyat}</span>
                                                                        <span className="total" style={{ fontSize: "20px" }}>Toplam: TRY {car.toplam_fiyat}</span><span className="quick-confirm">
                                                                            <span className="quick"><i className="icon-flash" />Hızlı Onay</span></span>
                                                                    </div>
                                                                </div>
                                                                <div className="included-block">
                                                                    <div className="car-rental-free">
                                                                        <div className="included">
                                                                            <label className="title">Dahil:</label>Sınırsız KM</div>
                                                                    </div>
                                                                </div>
                                                                <div className="book-block">
                                                                    <button style={{ "background": "#428501", "border": "none", "borderRadius": "3px", "color": "#fff", "fontSize": "18px", "fontWeight": "700", "height": "40px", "marginBottom": "5px", "width": "100%" }} type="submit" className="book-car-link">Rezervasyon</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        )
                                }

                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default mainReservation

