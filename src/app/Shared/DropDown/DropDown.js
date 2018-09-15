import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './styles/DropDown.css';
import onClickOutside from "react-onclickoutside";
import chevronUp from '../../../assets/up-chevron.svg';
import chevronDown from '../../../assets/down-chevron.svg';


class DropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
            headerTitle: this.props.title,
            value: this.props.defaultValue,
        }
        this.toggleList = this.toggleList.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const target = parseInt(event.target.id);
        const index = this.props.listValues.findIndex(x => x.id === target);
        const item = this.props.listValues[index];
        this.props.selectionChange(item);
        this.setState(prevState => ({
            listOpen: false,
            value: item,
        }));
    }

    handleClickOutside() {
        this.setState({
            listOpen: false
        });
    }
    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }));
    }
    render() {
        const { listValues, listClass } = this.props;
        const { listOpen, headerTitle } = this.state;
        const listClassName = `dd-wrapper ${listClass}`;
        return (
            <div className={listClassName}>
                <div className="dd-header" onClick={this.toggleList}>
                    <div className="dd-header-title">
                        <span className="dd-title-content">
                            <img className="dd-title-image" src={this.state.value.image} />
                            <div className="dd-header-title-value">{this.state.value.title}</div>
                        </span>
                    </div>
                    {listOpen
                        ? <div className="chevron" onClick={this.toggleList}><img className="dd-chevron" src={chevronUp} onClick={this.toggleList} /></div>
                        : <div className="chevron" onClick={this.toggleList}><img className="dd-chevron" onClick={this.toggleList} src={chevronDown} /></div>
                    }
                </div>
                {listOpen && <div className='dd-list'>
                    {listValues.map((item) => (
                        <div className="dd-list-item" onClick={this.handleClick} id={item.id} key={item.id} >
                            <img onClick={this.handleClick} id={item.id} className="dd-list-image" src={item.image} />
                            <div onClick={this.handleClick} id={item.id} className="dd-list-item-value">{item.title} </div>
                        </div>

                    ))}
                </div>}
            </div>
        );
    }
}

export default onClickOutside(DropDown);
