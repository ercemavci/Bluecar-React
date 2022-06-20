import React, { Component } from 'react'

export default class dealswrapper extends Component {
  render() {
    return (
        <div className="best-deals-wrapper">
        <div className="best-deals">
            <div className="best-deals-content-block">
                <h5>Bir araba kiralama konusunda harika fırsatlar alın ve büyük tasarruf edin</h5>
                <h6>En iyi araba kiralama anlaşması bulmaya mı çalışıyorsunuz?</h6>
                <p>Daha fazla bakmaya gerek yoktur - Bluecar.com'da her zaman özel bir teklif bulabilir ve büyük tasarruf edebilirsiniz!</p>
                <p>
                    Yüzlerce küresel ve yerel araç kiralama tedarikçisi ile işbirliği yaparak, tüm sınıfların araçlarından geniş bir seçim seçeneği sunuyor ve yolculuğunuz için mükemmel bir otomobil buluyoruz. Bluecar.com, sorunuz ne
                    olursa olsun, nerede olursanız olun, dünyanın her yerinde size yardımcı olmaya hazırdır.
                </p>
            </div>
            <div className="book-by-phone-wrapper">
                <div className="book-by-phone">
                    <p className="title">Bizi arayın</p>
                    <div className="content">
                        <span className="phone">000 000 00 00</span><a title="Bizi arayın" className="call-btn" href="tel:000 000 00 00">Bizi arayın</a>
                        <p className="call-center">Çağrı Merkezi Çalışma Saatleri</p>
                        <p className="working-hrs">
                            Pazartesi – Cuma: 6:00 — 22:00 GMT<br />
                            Cumartesi – Pazar: 6:00 — 22:00 GMT
                        </p>
                    </div>
                </div>
                <div className="feefo-trusted"><span className="feefo-logo" /></div>
            </div>
        </div>
    </div>    
    )
  }
}
