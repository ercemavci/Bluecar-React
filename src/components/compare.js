import React, { Component } from 'react'
export default class compare extends Component {
  render() {
    return (
        <div className="search-and-compare">
        <div className="search-and-compare-content">
          <div className="search-and-compare-block"><i className="icon-mainpage-card" /><span className="title">Güvenli ödeme garantisi</span>
            <p>Rezervasyon yaptırmak için sağladığınız ayrıntılar, SSL şifreleme teknolojisi ile güvence altına alınmış olarak kesinlikle gizlidir.</p>
          </div>
          <div className="search-and-compare-block"><i className="icon-mainpage-car" /><span className="title">Herhangi bir sinif arabeti kitaplama</span>
            <p>İhtiyaçlarınıza ve bütçenize en iyi şekilde cevap veren çok çeşitli otomobil sınıflarından seçim yapmanızı öneriyoruz.</p>
          </div>
          <div className="search-and-compare-block"><i className="icon-mainpage-phone" /><span className="title">Çok dil desteği</span>
            <p>Çok dilli çağrı merkezimiz, sorunuz her ne olursa olsun, nerede olursanız olun, dünyanın her yerinde size yardımcı olmaya hazırdır.</p>
          </div>
        </div>
      </div>
    )
  }
}
