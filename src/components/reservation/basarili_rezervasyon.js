import React, { Component } from 'react'

let _query = "";
let _res = "";
class basarili_rezervasyon extends Component {

    constructor() {
        super();
        this.state = {
            res: "https://localhost:44350/Home/BlueCars",
        };
        this.queryData = this.queryData.bind(this);
    }

    componentDidMount() {
        this.queryData();
        window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }
    queryData() {
        _query = new URLSearchParams(this.props.location.search);
        _res = _query.get('res_no');
        this.setState({ res: _res });
    }

    render() {
        return (
            <div>
                <div style={{ margin: "auto", position: "relative", display: "table", paddingTop: "50px" }}><img style={{ width: "190px" }} src="https://bluecar.sereryazilim.com/onaytik.png"></img></div>
                <div style={{ margin: "auto", position: "relative", display: "table", paddingTop: "20px" }}>
                    <p style={{ textAlign: 'center', fontWeight: 500, fontSize: '18px' }}>
                        REZERVASYON TAMAMLANDI
                    </p>
                    <p style={{ textAlign: 'center', fontWeight: 500, fontSize: '18px' }}>
                        Rezervasyon Numaranız: <strong>BLUECAR_{this.state.res}</strong> 
                    </p>
                    <p style={{ textAlign: 'center', fontWeight: 500, fontSize: '18px' }}>
                        Destek için bize mesai saatleri içinde sabit numaramızdan veya whatsapp hatlarımızdan ulaşabilirsiniz.
                    </p>
                </div>
            </div>
        )
    }
}
export default basarili_rezervasyon