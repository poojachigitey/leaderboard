import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import './fromDropdown.css';
class fromDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.props.slectionChange(value);
  };

  render() {

    const options = ['Daily', 'eekly'];

    return (
      <div>
        <Dropdown options={options} onChange={this.handleChange} value={'daily'} placeholder="Daily" />
      </div>

    );
  }
}
fromDropdown.propTypes = {

};
export default fromDropdown;