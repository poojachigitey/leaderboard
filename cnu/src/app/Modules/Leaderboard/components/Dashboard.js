import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
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
import dash from './dash';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


// import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



let REFERRAL_URL = 'http://192.168.0.34:3000';
// let REFERRAL_URL = 'http://192.168.0.34:3000';

const names = [
  'index',
  //'referredBy',
  'referralId',
  'noOfSessions',
  'noOfReferrals',

  'totalUsage',
];

var REFERRAL_VAR = 'https://version-api.sentinelgroup.io/variable?appCode=SLC&varType=LEAD';
class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };


  constructor(props) {
    super(props);
    this.state = {

      data1: [],
      


    };
  }
  componentWillMount() {

    let url1 = REFERRAL_VAR;

    fetch(url1)
      .then((resp) => resp.json())
      .then((body) => this.setState({
        loading: false,
        data1: body.info,
        
      })
      );
  }


  render() {
    const { order, orderBy } = this.props;
    const rows = [
      { id: 'index', numeric: true, disablePadding: false, label: 
      
      this.state.data1.map((v,i) => {
        if(v.name === 'rank') 
        {
          return v.value;
        }
      })
    
    },
      { id: 'referralId', numeric: false, disablePadding: true, label: 
      this.state.data1.map((v,i) => {
        if(v.name === 'refCode') 
        {
          return v.value;
        }
      })
    },
      { id: 'noOfSessions', numeric: true, disablePadding: false, label: 
    
      this.state.data1.map((v,i) => {
        if(v.name === 'totalSessions') 
        {
          return v.value;
        }
      })
    
    },
      { id: 'noOfReferrals', numeric: true, disablePadding: false, label: 
      this.state.data1.map((v,i) => {
        if(v.name === 'totalReferrals') 
        {
          return v.value;
        }
      })
    },
      { id: 'totalUsage', numeric: true, disablePadding: false, label: 
      this.state.data1.map((v,i) => {
        if(v.name === 'bandwidth consumed') 
        {
          return v.value;
        }
      }) },
    ];
    return (
      <TableHead className="tableheadStyling">
        <TableRow
          className="tablerowStyling"
        >
          {rows.map((row) => {
            return (
              <TableCell
                className="thStyling"
                style={{ textAlign: 'center' }}
                key={row.id}
                numeric={row.numeric}
                padding='default'

                sortDirection={orderBy === row.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  <Typography style={dash.heading} className="tableheadname">
                    {row.label}
                    {/* {this.state.data1.map(function (v) {
                    return ( {v} );
                  }
                  )} */}
                  </Typography>

                </TableSortLabel>
                {/* </Tooltip> */}
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

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//   },
//   table: {
//     minWidth: 1020,
//   },
//   tableWrapper: {
//     // overflowX: 'auto',
//     overflowX: 'hidden'
//   },
//   n: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: '#05335D'
//     },
//     '&:nth-of-type(even)': {
//       backgroundColor: '#032A4D'
//     },
//   },
//   head: {


//   },



// });
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
        overflowX: 'hidden'
      },
      n: {
        '&:nth-of-type(odd)': {
          backgroundColor: '#05335D'
        },
        '&:nth-of-type(even)': {
          backgroundColor: '#032A4D'
        },
      },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#4FAEE6',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#4FAEE6',
    },
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily:['open_sansregular'].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});






class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'index',
    selected: [],
    data: [],
    actualData: [],
    page: 0,
    start:0,
    rowsPerPage: 2,
    parent: this,
    child: 'hi',
    name: [],
    count:'',
  };

  componentWillMount() {
    let url = REFERRAL_URL + '/leaderboard';
    fetch(url)
      .then((resp) => resp.json())
      .then((body) => this.setState({
        loading: false,
        data: body.info.records,
        actualData: body.info.records,
        count: body.info.count,
      }));

  }
  search = (event) => {
    if(event.keyCode == 13) {
      return false;
    }
  }

  searchval = (key) => {
    let url = REFERRAL_URL + '/leaderboard';
    fetch(url+'?sortBy='+this.state.orderBy+'&order='+this.state.order+'&start='+this.state.start+'&count='+this.state.count+'&searchKey='+key)
    .then((resp) => resp.json())
    .then((body) => {this.setState({
      data: body.info.records,
    })
  console.log(this.state.data)  
  })
  }
  searchHandler = (event) => {
    // console.log("initial data ",this.state.data);
    // console.log("search key ", event.target.value);
    // console.log("prevKey ", this.state.prevKey);
    event.preventDefault();
    var key = event.target.value.trim();
  
    key === "" ?
    this.setState({
      key: event.target.value
    })
      :
      this.searchval(key);

    if (key !== "") {
     this.searchval(key)
    }
    else if (key === "") {
      this.setState({
        data: this.state.data
      })
    }
  }
  // searchValue = (searchArray, attributes, searchingItem) => {


  //   if (attributes.length !== 0) {
  //     return searchArray.filter((eachItem, ind) => {


  //       return (

  //         attributes.some((attribute) => {
  //           if (attribute !== 'refs') {
  //             return ((eachItem[attribute] + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1)
  //           } else {
  //             return ((eachItem[attribute].length + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1)
  //           }
  //         }));

  //     });
  //   } else {
  //     return searchArray.filter((eachItem, ind) => {
  //       return ((eachItem.referralId + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
  //         (eachItem.index + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
  //         (eachItem.noOfReferrals + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
  //         (eachItem.noOfSessions + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
  //         (eachItem.totalUsage + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1
  //       );

  //     });
  //   }

  // }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
    this.setState({
      page:0,
      start:0,
    })
    this.getApiSort(order, orderBy);
  };
  getApiSort = (order, orderBy) =>
{
  var url2 = "http://192.168.0.34:3000/leaderboard?sortBy="
  fetch(url2+orderBy+'&order='+order+'&count='+this.state.rowsPerPage) 
  .then((resp) => resp.json())
      .then((body) => 
        this.setState({
        loading: false,
        data: body.info.records,
        
}) 
      )
}

  
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
    this.setState({ start:page });
    this.getApiRecords(page*this.state.rowsPerPage, this.state.rowsPerPage)
  };


  getApiRecords = (start, count) =>
  {
    let url = REFERRAL_URL + '/leaderboard';
    fetch(url+'?start='+start+'&count='+count+'&sortBy='+this.state.orderBy+'&order='+this.state.order)
    .then((resp) => resp.json())
    .then((body) =>   
       this.setState({
         loading:false,
         data:body.info.records,
       }))
}


  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
    this.state.start === 0 ? this.getApiRecords(this.state.start,event.target.value) : this.getApiRecords(this.state.start+1,event.target.value) 
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  selectAttribute = event => {
    console.log("names ", this.state.name);
    this.setState({ name: event.target.value });
  };
  buttonSearch = (e) => {
    console.log("button ", e);
  }
  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (


      <div>


        <div className="group referal_search">
        {/* <form action="" novalidate="novalidate">
          <input type="text" required onKeyUp={this.searchHandler} />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Search for a Referral Code</label>
          </form> */}




          {/* // <TextField
          //   id="searchbar"
          //   label="Search for a Referral Code"
          //   type="search"
          //   className="searchbar"
          //   margin="normal"
          //   onKeyUp={this.searchHandler} 
          // />
       */}
       <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
          htmlFor="custom-css-input"
        >
         Search for a Referral Code
        </InputLabel>
        <Input
        onKeyUp={this.searchHandler} 
          classes={{
            underline: classes.cssUnderline,
          }}
          id="custom-css-input"
        />
      </FormControl>

        </div>
       
        <div className="tablewrapper">
        <Paper className={classes.root}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <div className={classes.tableWrapper}>


            <Table
              aria-labelledby="tableTitle" className='tableStyling'>
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={this.handleSelectAllClick}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}

              />

              <TableBody className="tbody">
                {
                  data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    return (
                      <TableRow
                        onClick={event => this.handleClick(event, n.id)}
                        tabIndex={-1}
                        key={n.id}
                        className="trstyling"
                        style={dash.tablerow}

                      >
                        <TableCell scope="row" padding="default" className="tablecell1">
                          {n.rank}
                        </TableCell>
                        <TableCell numeric className="tablecell2">{n.referralId}
                          <div className="tokens_earned">Tokens Earned - <span>
                            {/* TBA */}
                          {(n.tokens)/Math.pow(10,8)} $SENT
                          </span></div>			
                        </TableCell>
                        <TableCell numeric className="tablecell3">{n.noOfSessions}</TableCell>
                        <TableCell numeric className="tablecell4">{n.noOfReferrals}</TableCell>
                        <TableCell numeric className="tablecell5">{((n.totalUsage) / 1073741824).toFixed(2)} GB</TableCell>


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
          className="paginantion"
          component="div"
          count={this.state.count}
          rowsPerPage={rowsPerPage}
          page={this.state.start}
          style={dash.pagination}
          rowsPerPageOptions={[2,3,5,25, 50, 100]}
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
      
      </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
