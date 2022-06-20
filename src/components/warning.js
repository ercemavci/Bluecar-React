import React, { Component } from 'react'

export default class warning extends Component {
  render() {
    return (
      <div className="note-notification">
      <div className="container"><i aria-label="icon: info-circle" className="anticon anticon-info-circle"><svg style={{paddingTop:"0px",marginTop:"-5px"}} viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
            </path>
            <path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z">
            </path>
          </svg></i><span>Koronavirüs ile ilgili endişeleriniz varsa dert etmeyin. Rezervasyonunuzu son dakikaya kadar iptal edebilir ve ödediğiniz tutarı %100 geri alabilirsiniz.</span></div>
    </div>
    )
  }
}
