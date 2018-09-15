import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';






let REFERRAL_URL = 'https://refer-api.sentinelgroup.io';


const names = [
  'deviceId',
  'referredBy',
  'referralId',
  'refs',
  'addedOn',
];



function getSorting(order, orderBy) {
  console.log("order, orderby ", order, orderBy);

 if(orderBy === 'refs'){
    return order === 'desc' ? (a, b) => b[orderBy].length - a[orderBy].length : (a, b) => a[orderBy].length - b[orderBy].length;
  }
else if (orderBy === 'referredBy') {
  return order === 'desc' ?
  (a, b) =>
  {

    if(a[orderBy] === undefined && b[orderBy] !== undefined) return 1;
    else if(b[orderBy] === undefined && a[orderBy] !== undefined) return -1;
    else if(b[orderBy] === undefined && a[orderBy] === undefined) return -1;
    else if(b[orderBy] < a[orderBy]){
      return -1;
    }
   
  }: (a, b) => 
  {

    if(a[orderBy] === undefined && b[orderBy] !== undefined) return -1;
    else if(b[orderBy] === undefined && a[orderBy] !== undefined) return 1;
    else if(b[orderBy] === undefined && a[orderBy] === undefined) return 1;
    else if(b[orderBy] < a[orderBy]){
      return 1;
    }
  
  }
}
  else{
     return order === 'desc' ?
    (a, b) =>
    {
      if(b[orderBy] < a[orderBy] && a[orderBy])
        return -1;
        return 1;
     
    }: (a, b) => 
    {

      if(b[orderBy] >  a[orderBy])
      return -1;
      return 1;
    
    }
  }
}

const rows = [
  { id: 'deviceId', numeric: false, disablePadding: true, label: 'Rank' },
  { id: 'referredBy', numeric: true, disablePadding: false, label: 'Referrel Code' },
  { id: 'referralId', numeric: true, disablePadding: false, label: 'Total Sessions' },
  { id: 'refs', numeric: true, disablePadding: false, label: 'Total Referral' },
  { id: 'addedOn', numeric: true, disablePadding: false, label: 'Bandwidth Consumed' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

 
  render() {
    const { order, orderBy } = this.props;

    return (
      
   <TableHead  >
        <TableRow 
         >
          {rows.map((row) => {
            return (
              <TableCell
		
              	style= {{ textAlign:'center'}}
                key={row.id}
                numeric={row.numeric}
                padding='default'
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                  <Typography className="heading">
                  {row.label}
                   </Typography>
                   
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
  subheading: {
    fontWeight: 'normal',
  }
});

let EnhancedTableToolbar = props => {

  return (

    <div>

    </div>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    // overflowX: 'auto',
    overflowX:'hidden'
  },
  n: {
    '&:nth-of-type(odd)': {
        backgroundColor: '#05335D'
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#032A4D'
  },
  },
  head: {
    
    
  },


});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'deviceId',
    selected: [],
    data:[],
    actualData:[],
    page: 0,
    rowsPerPage: 25,
    parent: this,
    child: 'hi',
    name: [],
  };

   componentWillMount() {
    let url = REFERRAL_URL + '/accounts';
    fetch(url)
    .then((resp) => resp.json())
    .then((body) => this.setState({
      loading: false,
      data: body.accounts,
      actualData:body.accounts
    }));
  }

  searchHandler = (event) => {
    // console.log("initial data ",this.state.data);
    // console.log("search key ", event.target.value);
    // console.log("prevKey ", this.state.prevKey);
    var key = event.target.value;
    key === "" ?
              this.setState({
              data: this.state.actualData
              })
              :
              this.setState({
                data: this.searchValue(this.state.actualData, this.state.name, key)
              })

    if (key !== "") {
      this.setState({
        data: this.searchValue(this.state.actualData, this.state.name, key)
      })
    }
    else if (key === "") {
      this.setState({
        data: this.state.actualData
      })
    }
  }
  searchValue = (searchArray, attributes, searchingItem) => {

    if (attributes.length !== 0) {
      return searchArray.filter((eachItem, ind) => {


        return (

          attributes.some((attribute) => {
            if (attribute !== 'refs') {
              return ((eachItem[attribute] + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1)
            } else {
              return ((eachItem[attribute].length + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1)
            }
          }));

      });
    } else {
      return searchArray.filter((eachItem, ind) => {
        return ((eachItem.referralId + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
          (eachItem.deviceId + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
          (eachItem.referredBy + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
          (eachItem.refs.length + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
          (eachItem.addedOn + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1
        );

      });
    }
    
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  selectAttribute = event => {
    console.log("names ",this.state.name);
    this.setState({ name: event.target.value });
      };

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      
      
      <div className="search_table">
       
        
      <Paper className={classes.root}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <div className={classes.tableWrapper}>

        
          <Table className={classes.table} aria-labelledby="tableTitle">
          
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick} 
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            
                
            />
             
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  return (
                    <TableRow
                    
                      onClick={event => this.handleClick(event, n.id)}
                      tabIndex={-1}
                      key={n.id}
                      className={classes.n}
                     style={{height:'80px'}}
                    >
                      <TableCell  scope="row" padding="default" style={{color: '#D7D7D7',fontSize:'18px', fontFamily:'DINPro-Regular'}}>
                        {n.deviceId}
                      </TableCell>
                      <TableCell numeric style={{color:'#EFB77C',fontSize:'18px',  fontFamily:'DINPro-Regular'}}>{n.referredBy}</TableCell>
                      <TableCell numeric style={{color:'#4FAEE6',fontSize:'18px', fontFamily:'DINPro-Regular'}}>{n.referralId}</TableCell>
                      <TableCell numeric style={{color:'#4FAEE6',fontSize:'18px', fontFamily:'DINPro-Regular'}}>{n.refs.length}</TableCell>
                      <TableCell numeric style={{color:'#EFB77C',fontSize:'18px', fontFamily:'DINPro-Regular'}}>{n.addedOn}</TableCell>
                 

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {/* <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={ [25, 50, 100] } 
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        /> */}
      </Paper>
       <TablePagination
       component="div"
       count={data.length}
       rowsPerPage={rowsPerPage}
       page={page}
       style={{marginTop:20}}
       rowsPerPageOptions={ [25, 50, 100] } 
       backIconButtonProps={{
         'aria-label': 'Previous Page',
       }}
       nextIconButtonProps={{
         'aria-label': 'Next Page',
       }}
       onChangePage={this.handleChangePage}
       onChangeRowsPerPage={this.handleChangeRowsPerPage}
     />
     </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
