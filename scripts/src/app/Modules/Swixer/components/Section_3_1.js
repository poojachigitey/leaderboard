import React from 'react';
import { connect } from 'react-redux';
import DropDown from '../../../Shared/DropDown/DropDown';
import './styles/Section_3.css';
import ethLogo from '../../../../assets/ETH_LOGO.svg';
import sentLogo from '../../../../assets/SENT_LOGO.svg';
import pivixLogo from '../../../../assets/PIVX_LOGO.svg';
import swixSwap from '../../../../assets/rotate.png';
import axios from 'axios';


import { TokenName, TokenSname, URL, nodeAddress, decimals, coinType } from '../constants';
import * as actions from '../actions';
class Section_3 extends React.Component {
    constructor(props) {
        super(props);
        this.handleToken1 = this.handleToken1.bind(this);
        this.handleToken2 = this.handleToken2.bind(this);
        this.getTokenIcon = this.getTokenIcon.bind(this);
        this.setAddress = this.setAddress.bind(this);
        this.getToAddress = this.getToAddress.bind(this);
        this.handleTokenInput = this.handleTokenInput.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.validNumber = new RegExp(/^(\d{0,8}\.)?\d{0,8}$/, 'img');
        this.lastValid = '';
        this.state = {
            tokenValue: 0,
            address: '',
            toAddress: '',
            token1: TokenSname.PIVX,
            token2: TokenSname.SENT,
            isValidAddress: true,
            token1Icon: pivixLogo,
            token2Icon: sentLogo,
            token1Item: {
                id: 0,
                title: TokenSname.PIVX,
                value: TokenSname.PIVX,
                selected: false,
                image: pivixLogo,
                key: 'token1'
            },
            token2Item: {
                id: 0,
                title: TokenSname.SENT,
                value: TokenSname.SENT,
                selected: false,
                image: sentLogo,
                key: 'toke2'
            },
        };
        this.Token1Options = [
            {
                id: 0,
                title: TokenSname.PIVX,
                value: TokenSname.PIVX,
                selected: false,
                image: pivixLogo,
                key: 'token1'
            },
            {
                id: 1,
                title: TokenSname.SENT,
                value: TokenSname.SENT,
                selected: false,
                image: sentLogo,
                key: 'token1'
            },
            {
                id: 2,
                title: TokenSname.ETH,
                value: TokenSname.ETH,
                selected: false,
                image: ethLogo,
                key: 'token1'
            }
        ];

        this.Token2Options = [
            {
                id: 0,
                title: TokenSname.PIVX,
                value: TokenSname.PIVX,
                selected: false,
                image: pivixLogo,
                key: 'toke2'
            },
            {
                id: 1,
                title: TokenSname.SENT,
                value: TokenSname.SENT,
                selected: false,
                image: sentLogo,
                key: 'toke2'
            },
            {
                id: 2,
                title: TokenSname.ETH,
                value: TokenSname.ETH,
                selected: false,
                image: ethLogo,
                key: 'toke2'
            },
        ];
    }
    handleToken1(token) {
        console.log('i am hit');
        // if (this.state.token2 !== '') {
        this.setState({
            token1: token.value,
            areTokens: false,
            token1Icon: this.getTokenIcon(token.value),
            token1Item: token
        });
        // } else {
        //     this.setState({
        //         token1: token.value,
        //         token1Icon: this.getTokenIcon(token.value),
        //         token1Item: token
        //     });
    }
    //}

    handleToken2(token) {
        //   if (this.state.token1 !== '') {
        this.setState({
            token2: token.value,
            areTokens: false,
            token2Icon: this.getTokenIcon(token.value),
            token2Item: token
        });
        // } else {
        //     this.setState({
        //         token2: token.value,
        //         token2Icon: this.getTokenIcon(token.value),
        //         token2Item: token
        //     });
    }
    //}
    getTokenIcon(value) {
        switch (value) {
            case TokenSname.ETH:
                return ethLogo;
            case TokenSname.SENT:
                return sentLogo;
            case TokenSname.PIVX:
                return pivixLogo;
            default:
                return pivixLogo;
        }
    }

    handleTokenInput(event) {
        if (event.target.value.match(this.validNumber)) {
            this.lastValid = event.target.value;
            this.setState({
                tokenValue: event.target.value,
            })

        } else {
            this.setState({
                tokenValue: this.lastValid,
            });
        }
        const tokenData = {
            token1: TokenSname[this.state.token1],
            token2: TokenSname[this.state.token2],
            value: event.target.value * decimals[this.state.token1]
        };
        this.props.getMarketValue(tokenData);
        //    / let that = this;
        //     axios.get(`${URL.conversionBaseUri}${nodeAddress}&from=${TokenSname[this.state.token1]}&to=${TokenSname[this.state.token2]}&value=${event.target.value * decimals[that.state.token1]}`)
        //         .then(function (response) {
        //             let { tokenValue } = that.state;
        //             console.log(response)
        //             that.setState({ expectedTokens: response.data.value / decimals[that.state.token2] });
        //         });
    }

    getToAddress(address) {
        let that = this;
        let body = {
            'destination_address': address,
            'from_symbol': this.state.token1,
            'to_symbol': this.state.token2,
            'delay_in_seconds': 60,
            'client_address': nodeAddress,
            'node_address': nodeAddress
        }
        if (this.state.tokenValue !== '' && this.props.expgetReciverAddressectedTokens !== '' && this.state.token1 !== '' && this.state.token2 !== '') {
            console.log(body);
            fetch(`${URL.testSwix}`, {
                method: 'POST',
                body: JSON.stringify(body)
            }).then((response) => {
                response.json().then(
                    (result) => {
                        console.log(result)
                        that.setState({ toAddress: result.address, swapOn: result.success, hash: result.swix_hash });
                    }
                );
            });
        }
    }

    handleStatus() {
        this.setState({ swapOn: false });
        let that = this;
        axios.get(`${URL.swixStatus}${this.state.hash}`).then(function (response) {
            console.log(response)
            let result = response.data;
            if (result.status === 1) {
                that.setState({ txHash: result.tx_hash_1 });
            }
            if (result.remaining_amount === 0) {
                that.setState({ checkStatus: true });
            }
        });
        if (this.state.checkStatus) {
            return;
        }
        setTimeout(() => { this.handleSwap(); }, 10000);
    }

    setAddress(e) {
        var regex;
        if (coinType[this.state.token2] === 'ethereum') {
            regex = new RegExp('0[xX][0-9a-fA-F]{40}$');

            if (regex.test(e.target.value)) {
                const Data = {
                    token1: TokenSname[this.state.token1],
                    token2: TokenSname[this.state.token2],
                    address: event.target.value,
                };
                this.props.getMarketValue(Data);
                this.props.getReciverAddress(Data);
            } else {
                const Data = {
                    token1: TokenSname[this.state.token1],
                    token2: TokenSname[this.state.token2],
                    address: event.target.value,
                };
                this.props.getMarketValue(Data);
                this.props.getReciverAddress(Data);
                this.setState({ isValidAddress: false })
            }
        } else {
            regex = new RegExp('D[a-km-zA-HJ-NP-z1-9]{25,34}');
            if (regex.test(e.target.value)) {
                console.log('sgasjifga')
                this.setState({ address: e.target.value, isValidAddress: true });
                this.getToAddress(e.target.value);
            } else {
                this.setState({ isValidAddress: false })
            }
        }
    }
    render() {
        const token1Options = JSON.parse(JSON.stringify(this.Token1Options));
        const index = token1Options.findIndex(x => x.value === this.state.token1);
        if (index !== -1) {
            token1Options.splice(index, 1);
        }

        //set token2 options
        const token2Options = JSON.parse(JSON.stringify(this.Token2Options));
        const index2 = token2Options.findIndex(x => x.value === this.state.token2);
        if (index2 !== -1) {
            token2Options.splice(index2, 1);
        }
        return (
            <div className="container">
                <div className="col_3">
                    <div className="send_recieve">
                        <div className="send_input">
                            <p className="you_send">You send:</p>
                            <input onChange={this.handleTokenInput} value={this.state.tokenValue} className="send_value" />
                            <DropDown
                                listValues={token1Options}
                                defaultValue={this.state.token1Item}
                                selectionChange={this.handleToken1}
                            />
                        </div>
                        <div className="swixlogo"><img className="swixSwapimg" src={swixSwap} /></div>
                        <div className="recieve_input">
                            <p className="you_recieve">You recieve:</p>
                            {/* <input className="recieve_value" type="text" /> */}
                            <input className="recieve_value" value={this.props.expectedTokens} disabled="true" />
                            <DropDown
                                listValues={token2Options}
                                defaultValue={this.state.token2Item}
                                selectionChange={this.handleToken2}
                            />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <p className="send_recieve_transaction">Rate: <span>{this.state.tokenValue} {this.state.token1} ~ {this.props.expectedTokens} {this.state.token2}</span>. Transaction fee is set at 0.1%. Max transaction 0.5 ETH.</p>
                    <input className="wallet_btn" placeholder={`Enter your ${this.state.token2}  Wallet address`} onChange={this.setAddress}></input>
                    <p className="wallet_address">You will recieve <span>{this.props.expectedTokens}</span> {this.state.token2} at this address.</p>
                    {
                        this.state.swapOn ?
                            <div className="wallet_address">Please Send {this.state.tokenValue} {this.state.token1} to {this.state.toAddress}</div>
                            : this.state.isValidAddress ? <div></div> : <div className="wallet_address">Please Enter Valid {this.state.token1} address</div>
                    }
                    <button className="confirm_swap" type="submit" disabled={!this.state.swapOn} onClick={this.handleStatus}>confirm swap</button>
                </div>
                <p className="terms_cond">SWIXER Terms and Conditions</p>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        expectedTokens: state.SWIXER.expectedTokens,
        reciverAddress: state.SWIXER.reciverAddress,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMarketValue: (tokens) => {
            dispatch(actions.getMarketValue(tokens));
        },
        getReciverAddress: (addressData) => {
            dispatch(actions.getReciverAddress(addressData));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Section_3);
