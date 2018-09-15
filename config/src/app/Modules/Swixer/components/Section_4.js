import React from 'react';
import './styles/Section_4.css';
import Input from '@material-ui/core/Input';
class Section_4 extends React.Component {
  render() {
    return (
      <div>
           <div className="search">
        <Input
          placeholder="Global Search"
          onKeyUp ={this.searchHandler}
          className="input"
          // inputProps={{
          //   'aria-label': 'Description',
          // }}
        />
       
        </div>
      </div>

    );
  }
}
export default Section_4;

