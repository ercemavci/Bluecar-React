import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="footer">
          <div className="top-section">
            <div className="book-car-text">
              <h2>Kiralık araba kiralama telefonunuzla</h2>
              <p>Her türlü iOS veya Android smartphone'dan, Bluecar App ile bir araç kitabı kolayca ve hızlı
                bir şekilde rezervasyon yaptırabilirsiniz. Şube ve aracınızı seçin ve rezervasyon işleminizi
                tamamlayın!</p>
            </div>
            <div className="apps"><a className="google" href="#">
            </a><a className="apple" href="#"> </a></div>
          </div>
          <div className="mid-section">
            <div className="subscribe-to-deals">
              <div>
                <div>
                  <h2>En iyi fırsatlara abone olun</h2>
                  <p><a href="https://www.Bluecar.com/tr">Ucuz araç kiralama</a>. Özel Fırsatlarımıza abone
                    olun.</p>
                  <form className="ant-form ant-form-horizontal form">
                    <div className="ant-row ant-form-item">
                      <div className="ant-col ant-form-item-label"><label htmlFor="subscribeForm_mail" className="ant-form-item-required" title="E-Posta Adresi">E-Posta Adresi</label></div>
                      <div className="ant-col ant-form-item-control-wrapper">
                        <div className="ant-form-item-control"><span className="ant-form-item-children"><input type="text" placeholder="E-postanızı giriniz" defaultValue="" id="subscribeForm_mail" data-__meta="[object Object]" data-__field="[object Object]" className="ant-input" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="ant-row ant-form-item">
                      <div className="ant-col ant-form-item-control-wrapper">
                        <div className="ant-form-item-control"><span className="ant-form-item-children"><button type="submit" className="btn green footer-btn bg-button green"><span>Abone ol</span></button></span></div>
                      </div>
                    </div>
                  </form>
                  <div className="subscribe-to-deals-policy">Kaydolarak kabul etmiş olursunuz Bluecar.com <a href="/terms-use">Gizlilik Politikası</a></div>
                </div>
              </div>
            </div>
            <div className="help-links">
              <div className="col-1"><Link to="/hakkimizda">Hakkımızda</Link><a href="#">İletişim</a><a href="#">Yorumlar</a><a href="#">Araba kiralama</a><a href="#">Gizlilik Politikası</a><a href="#">Şartlar</a><a href="#">FAQ</a></div>
              <div className="col-2"><a href="#">Markalar</a><a href="#">Tam Kapsamlı
                İstek</a><a href="#">İptal ve İadeler</a></div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="bottom-footer">
              <div className="copyrights">©
                2022 BlueCar Corporation Ltd.
              </div>
              <div className="social"><a href="#"><i className="instagram" /></a><a href="#"><i className="facebook" /></a><a href="#"><i className="linkedin" /></a></div>
              <div className="cards"><span className="visa" /><span className="visa-secure" /><span className="master" /><span className="master-id" /><span className="amex" /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default footer;
