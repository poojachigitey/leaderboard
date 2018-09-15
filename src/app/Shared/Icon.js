import React, { Component } from 'react';
import symbol_defs from '../../../assets/symbol-defs-swixer.svg';

export default class Icon extends Component {
    render() {
        return (
            <div>
                <svg viewBox={this.props.viewBox ? this.props.viewBox : "0 0 16 16"} className={`icon icon-${this.props.viewClass}`}>
                    <use xlinkHref={`${symbol_defs}#icon-${this.props.icon}`} />
                </svg>
            </div>
        );
    }
}
