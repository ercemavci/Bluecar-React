import React, { useState } from 'react'
import { Link } from 'react-router-dom';
class header extends React.Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      OpenSessions: false,
      OpenReservationQuery: false,
    };
  }
  btnOpenMenu = () => {
    this.setState({ isShown: !this.state.isShown });
  };
  btnLogin = () => {
    this.setState({ OpenSessions: !this.state.OpenSessions });
  };
  btnClose = () => {
    this.setState({ OpenSessions: !this.state.OpenSessions });
  };
  btnOpenQuery = () => {
    this.setState({ OpenReservationQuery: !this.state.OpenReservationQuery });
  };
  render() {
    return (
      <div>
      <div id="global-area">
        <div />
      </div>
      <div className="react-header">
        <div className="left-align" style={{width:"165px"}}><Link className='react-logo' to="/" aria-label="" rel="noopener noreferrer" style={{width:"165px"}}>
        </Link></div>
        <div className="right-align">
          <div className="NavBarActions">
            <div className="react-signin">
              <div className="react-my-bookings" />
              <div className="sign-in-dropdown"><button type="button" className="sign-in-action-btn ant-dropdown-trigger bg-button" onClick={this.btnOpenQuery}><i className="icon-header-user" /><span>Rezervasyon Sorgula</span></button><button type="button" className="sign-in-action-btn ant-dropdown-trigger bg-button" onClick={this.btnLogin}><i className="icon-header-login" /><span>Oturum aç</span><i className="info">i</i></button></div>
            </div>
            <div id='' className="react-languageDropdown" style={{ display: "none" }}><button type="button" className="react-languageDropdown-btn bg-button"><i className="flag-TR"><span>
              TR
            </span></i><span>TR</span><span>TRY</span></button></div>
            <div className="mobile-nav-menu-wrapper"><button type="button" onClick={this.btnOpenMenu} className="open-menu opened bg-button"><span className="menu" /></button></div>
            <a href='tel:000 00 00 00'>
            <div className="help">
              <div style={{ display: 'none' }} /><button type="button" className="call-us-icon-btn bg-button" aria-label="reference-number"><i className="help-icon" /></button>
            </div>
            </a>
          </div>
        </div>
      </div>
      <div id="global-modals" />
      <div className="mobile-nav-menu" style={{display: this.state.isShown ? 'block' : 'none'}}>
        <div className="ant-list ant-list-split ant-list-bordered">
          <div className="ant-spin-nested-loading">
            <div className="ant-spin-container">
              <ul className="ant-list-items">
                <li className="ant-list-item">
                  <a className="telephone js_call_mob" href="tel:000 000 00 00">
                    <div className="call-us-help">
                      <p style={{fontSize:'27px'}}>Contact information</p>
                      <p className="phone" style={{fontSize:'20px',marginTop:'-14px'}}>000 000 00 00</p>
                    </div>
                    <div className="call-us-icon-mobile" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="sub-title">Ayarlar</p>
        <div className="ant-list ant-list-split ant-list-bordered">
          <div className="ant-spin-nested-loading">
            <div className="ant-spin-container">
              <ul className="ant-list-items">
                <li className="ant-list-item"><span className="menu-item-name">İkamet edilen ülke</span><span className="menu-item-text flag-tr" /><span className="code">TR</span></li>
                <li className="ant-list-item ant-list-item-no-flex"><span className="menu-item-name">Dil</span><span className="menu-item-text undefined">tr</span></li>
                <li className="ant-list-item ant-list-item-no-flex"><span className="menu-item-name">Para birimi</span><span className="menu-item-text undefined">TRY</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ant-list ant-list-split ant-list-bordered">
          <div className="ant-spin-nested-loading">
            <div className="ant-spin-container">
              <ul className="ant-list-items">
                <li className="ant-list-item"><span className="menu-item-name">Rezervasyon Sorgula</span><span className="user" /></li>
                <li className="ant-list-item"><span className="menu-item-name">Oturum aç</span><span className="sign-in" /></li>
                <li className="ant-list-item"><span className="menu-item-name">Kayıt Ol</span><span className="register" /></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="sub-title">Şirket</p>
        <div className="ant-list ant-list-split ant-list-bordered">
          <div className="ant-spin-nested-loading">
            <div className="ant-spin-container">
              <ul className="ant-list-items">
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/about-us"><span className="menu-item-name">Hakkımızda</span></a>
                </li>
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/contacts"><span className="menu-item-name">İletişim</span></a>
                </li>
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/reviews"><span className="menu-item-name">Yorumlar</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="sub-title">Işe yarar</p>
        <div className="ant-list ant-list-split ant-list-bordered">
          <div className="ant-spin-nested-loading">
            <div className="ant-spin-container">
              <ul className="ant-list-items">
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/araba-kiralama/avrupa"><span className="menu-item-name">Araba kiralama</span></a>
                </li>
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/suppliers"><span className="menu-item-name">Markalar</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="sub-title">Yardım et</p>
        <div className="ant-list ant-list-split ant-list-bordered">
          <div className="ant-spin-nested-loading">
            <div className="ant-spin-container">
              <ul className="ant-list-items">
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/privacy-policy"><span>Gizlilik Politikası</span></a>
                </li>
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/terms-of-use"><span>Şartlar</span></a>
                </li>
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/faq"><span>FAQ</span></a>
                </li>
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/full-coverage-request"><span>Tam Kapsamlı İstek</span></a>
                </li>
                <li className="ant-list-item">
                  <a className="menu-item-link" href="/tr/faq#cancellation-refund"><span>İptal ve İadeler</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ant-modal-root" style={{ display: this.state.OpenSessions ? 'block' : 'none' }}><div className="ant-modal-mask" /><div tabIndex={-1} className="ant-modal-wrap " role="dialog"><div role="document" className="ant-modal react-signin-modal" style={{ width: '520px', transformOrigin: '668px -36px' }}><div tabIndex={0} aria-hidden="" style={{ width: '0px', height: '0px', overflow: 'hidden', outline: 'none' }} /><div className="ant-modal-content"><button type="button" aria-label="Close" className="ant-modal-close" onClick={this.btnClose} ><span className="ant-modal-close-x"><i aria-label="icon: close" className="anticon anticon-close ant-modal-close-icon"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" /></svg></i></span></button><div className="ant-modal-body"><div className="left-side"><div className="title">Daha fazla fayda için bir kullanıcı hesabı oluşturun!</div><div className="description">Bir rezervasyon yapmadan önce her giriş yaptığınızda para kazanmak için "yalnızca üyelere" özel teklifler, fırsatlar ve indirimlerden yararlanma.</div><div className="car-image" /></div><div className="right-side"><div className="ant-tabs ant-tabs-top SignIn ant-tabs-card ant-tabs-no-animation"><div role="tablist" className="ant-tabs-bar ant-tabs-top-bar ant-tabs-card-bar" tabIndex={0}><div className="ant-tabs-nav-container"><span unselectable="unselectable" className="ant-tabs-tab-prev ant-tabs-tab-btn-disabled"><span className="ant-tabs-tab-prev-icon"><i aria-label="icon: left" className="anticon anticon-left ant-tabs-tab-prev-icon-target"><svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden=""><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" /></svg></i></span></span><span unselectable="unselectable" className="ant-tabs-tab-next ant-tabs-tab-btn-disabled"><span className="ant-tabs-tab-next-icon"><i aria-label="icon: right" className="anticon anticon-right ant-tabs-tab-next-icon-target"><svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden=""><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" /></svg></i></span></span><div className="ant-tabs-nav-wrap"><div className="ant-tabs-nav-scroll"><div className="ant-tabs-nav ant-tabs-nav-animated"><div><div role="tab" aria-disabled="false" aria-selected="" className="ant-tabs-tab-active ant-tabs-tab">Oturum aç</div><div role="tab" aria-disabled="false" aria-selected="false" className=" ant-tabs-tab">Kayıt Ol</div></div><div className="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style={{ display: 'block', transform: 'translate3d(0px, 0px, 0px)', width: '177px' }} /></div></div></div></div></div><div tabIndex={0} role="presentation" style={{ width: '0px', height: '0px', overflow: 'hidden', position: 'absolute' }} /><div className="ant-tabs-content ant-tabs-content-no-animated ant-tabs-top-content ant-tabs-card-content"><div role="tabpanel" aria-hidden="false" className="ant-tabs-tabpane ant-tabs-tabpane-active"><div tabIndex={0} role="presentation" style={{ width: '0px', height: '0px', overflow: 'hidden', position: 'absolute' }} /><div className="content"><form className="ant-form ant-form-horizontal form"><div className="ant-row ant-form-item"><div className="ant-col ant-form-item-label"><label htmlFor="mail" className="ant-form-item-required" title="E-Posta Adresi">E-Posta Adresi</label></div><div className="ant-col ant-form-item-control-wrapper"><div className="ant-form-item-control"><span className="ant-form-item-children"><input placeholder="Lütfen e-mail adresinizi giriniz" type="text" id="mail" data-__meta="" data-__field="" className="ant-input" defaultValue="" /></span></div></div></div><div className="ant-row ant-form-item"><div className="ant-col ant-form-item-label"><label htmlFor="password" className="ant-form-item-required" title="Parola">Parola</label></div><div className="ant-col ant-form-item-control-wrapper"><div className="ant-form-item-control"><span className="ant-form-item-children"><input type="password" placeholder="Şifrenizi giriniz Lütfen" id="password" data-__meta="" data-__field="" className="ant-input" /></span></div></div></div><div className="ant-row ant-form-item"><div className="ant-col ant-form-item-control-wrapper"><div className="ant-form-item-control"><span className="ant-form-item-children"><button type="submit" className="sign-in bg-button"><span>Oturum aç</span></button></span></div></div></div></form><a href="" className="forgotten-password">Parolanızı mı unuttunuz</a></div><div tabIndex={0} role="presentation" style={{ width: '0px', height: '0px', overflow: 'hidden', position: 'absolute' }} /></div><div role="tabpanel" aria-hidden="" className="ant-tabs-tabpane ant-tabs-tabpane-inactive" /></div><div tabIndex={0} role="presentation" style={{ width: '0px', height: '0px', overflow: 'hidden', position: 'absolute' }} /></div></div></div></div><div tabIndex={0} aria-hidden="" style={{ width: '0px', height: '0px', overflow: 'hidden', outline: 'none' }} /></div></div></div>
     <div tabIndex={-1} className="ant-modal-wrap " role="dialog" style={{ display: this.state.OpenReservationQuery ? 'block' : 'none' }}><div role="document" className="ant-modal react-my-bookings-modal" style={{width: '520px', transformOrigin: '818px -68px'}}><div tabIndex={0} aria-hidden="" style={{width: '0px', height: '0px', overflow: 'hidden', outline: 'none'}} /><div className="ant-modal-content"><button type="button" aria-label="Close" className="ant-modal-close"><span className="ant-modal-close-x" onClick={this.btnOpenQuery}><i aria-label="icon: close" className="anticon anticon-close ant-modal-close-icon"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden=""><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" /></svg></i></span></button><div className="ant-modal-body"><div className="title">Rezervasyonunuzun giriş bilgileri</div><div className="content"><p className="info">Rezervasyonunuzu görüntülemek için lütfen aşağıdaki bilgileri sağlayın.</p><form className="ant-form ant-form-horizontal form-bookings"><div className="ant-row ant-form-item"><div className="ant-col ant-form-item-label"><label htmlFor="mail" className="ant-form-item-required" title="E-Posta Adresi">E-Posta Adresi</label></div><div className="ant-col ant-form-item-control-wrapper"><div className="ant-form-item-control"><span className="ant-form-item-children"><input placeholder="Lütfen e-mail adresinizi giriniz" type="text" id="mail" data-__meta="" data-__field="" className="ant-input" defaultValue="" /></span></div></div></div><div className="ant-row ant-form-item"><div className="ant-col ant-form-item-label"><label htmlFor="booking_number" className="ant-form-item-required" title="Rezervasyon numarası">Rezervasyon numarası</label></div><div className="ant-col ant-form-item-control-wrapper"><div className="ant-form-item-control"><span className="ant-form-item-children"><input placeholder="Lütfen giriniz rezervasyon numaranız" type="text" id="booking_number" data-__meta="" data-__field="" className="ant-input" defaultValue="" /></span></div></div></div><div className="ant-row ant-form-item"><div className="ant-col ant-form-item-control-wrapper"><div className="ant-form-item-control"><span className="ant-form-item-children"><button type="submit" className="view-bookings bg-button"><span>Rezervasyonu görüntüle</span></button></span></div></div></div></form></div></div></div><div tabIndex={0} aria-hidden="true" style={{width: '0px', height: '0px', overflow: 'hidden', outline: 'none'}} /></div></div>
   </div>
    )
  }
}
export default header;
