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
import Tooltip from '@material-ui/core/Tooltip';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
// import '../styles/Dashboard.css';
// import '../App.css';
// import './Admin.css'
import axios from 'axios'
import  TextField  from '@material-ui/core/TextField';


let REFERRAL_URL = 'https://refer-api.sentinelgroup.io';
let MESSAGES_URL = 'https://refer-api.sentinelgroup.io/dashboard/vars'
const GET_URL = 'https://version-api.sentinelgroup.io/message?appCode=SNC';
const SEARCH_URL = 'https://version-api.sentinelgroup.io/message/search?searchKey='

const names = [
  'deviceId',
  'referredBy',
  'referralId',
  'refs',
  'addedOn',
];






class EnhancedTableHead extends React.Component {

  state ={
  rows :[
    { id: 'name', numeric: false, label: 'Name' },
    { id: 'english', numeric: false, label: 'English' },
    { id: 'russian', numeric: false, label: 'Russian' },
    { id: 'spanish', numeric: false, label: 'Spanish' },
  
  ],
  messages: []
}

componentWillMount() {

  // fetch(MESSAGES_URL)
  // .then((resp) => resp.json())
  // .then((body) => {
  //   this.setState({
  //   loading: false,
  //   messages: body
  // })
  // console.log("api messages ",body);
  // });
}
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

   

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow
        >
          {this.state.rows.map((row) => {
            return (
              <TableCell
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
                    <Typography color="inherit" className="heading">
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

class EnhancedTableToolbar extends React.Component {

  state = {
    messages:[],
  }

componentWillMount() {

    // fetch(MESSAGES_URL)
    // .then((resp) => resp.json())
    // .then((body) => {
    //   this.setState({
    //   loading: false,
    //   messages: body
    // })
    // console.log("messages ",body);
    // });
}

render(){
  return (

    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" >
            {this.state.messages.title}
      </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
}

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
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'desc',
      orderBy: 'name',
      selected: [],
      page: 0,
      rowsPerPage: 5,
      parent: this,
      child: 'hi',
      name: [],
      messages:[],
      edit: true,
      editSave: 'edit',
      save:false,
      buttonName: 'EDIT',
      option: true,
      data: [],
      key:'',
      value:'',
      currentIndex:null
    };
  }




  componentWillMount() {
    fetch(GET_URL)
    .then((resp) => resp.json())
    .then((body) => {
      this.setState({
        data: body.messages
    })
    console.log("messages vars ",body.messages);
    });

      // fetch(MESSAGES_URL)
      // .then((resp) => resp.json())
      // .then((body) => {
      //   this.setState({
      //   loading: false,
      //   messages: body
      // })
      // console.log("messages ",body);
      // });
  }

  searchHandler = (event) => {
    // console.log("initial data ",event);
    console.log("search key ", event.target.value);

    let searchKey = event.target.value;
    let url = SEARCH_URL + searchKey;
    fetch(url)
      .then((resp) => resp.json())
      .then((body) => {
        this.setState({
          data: body.info
        })
        console.log("api search ", this.state.data);
      }
      )
      .catch(err => console.log("error ", err))

      ;
    // console.log("prevKey ", this.state.prevKey);
    // var key = event.target.value;
    // key === "" ?
    //   this.setState({
    //     data: this.state.actualData
    //   })
    //   :
    //   this.setState({
    //     data: this.searchValue(this.state.actualData, this.state.name, key)
    //   })
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
  //         (eachItem.deviceId + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
  //         (eachItem.referredBy + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
  //         (eachItem.refs.length + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1 ||
  //         (eachItem.addedOn + "").toLowerCase().indexOf(searchingItem.toString().toLowerCase()) > -1
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
    this.getApiSort(order, orderBy);
  };

  getApiSort(order, orderBy, count=389,from=0) {
    // let = https://refer-api.sentinelgroup.io/dashboard?count=3
    console.log("order, orderby ", order, orderBy);

    if (orderBy == 'refs') {
      orderBy = 'refCount';
    }

    // API to get the sort data 
    let url = GET_URL +'&sortBy=' + orderBy + '&order=' + order;
    fetch(url)
      .then((resp) => resp.json())
      .then((body) => {
        this.setState({
          data: body.messages
        })
        console.log("api sorted ", this.state.data);
      }
      )
      .catch(err => console.log("error ", err))

      ;
  }
 

 
  handleChangePage = (event, page) => {
    this.setState({ page });
    // this.getApiSort(this.state.order, this.state.orderBy, this.state.page)
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
    // this.getApiSort(this.state.order, this.state.orderBy, null, this.state.page)
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  selectAttribute = event => {
    console.log("names ", this.state.name);
    this.setState({ name: event.target.value });
  };



  render() {



  //   this.editHandler = (i) => {
  //     // console.log("edit index ", i);
  //     this.setState({
  //         edit: !this.state.edit,
  //         save:!this.state.save,
  //         option: false,
  //         currentIndex:i
  //     })
  // }

  this.handleKeyChange = (e,index) => {
    console.log("key value ",e.target.value)
    console.log("key ", e.key);
    console.log("keyCode ", e.keyCode);
    console.log("char code ",e.charCode)
      let currentData=this.state.data;
      currentData[index]["name"]=e.target.value;
      this.setState({
          data:currentData            
      })
      if(e.keyCode === 13){
        this.saveHandler(e,index);
      }
  }
  this.handleEnglishChange = (e,index) => {
    console.log("english ", e.target.value);
    console.log("keyCode ", e.keyCode);
     let currentData=this.state.data;
      currentData[index]["message"]["english"]=e.target.value;
      this.setState({
          data:currentData            
      })
      if(e.keyCode === 13){
        this.saveHandler(e,index);
      }    
}

this.handleRussianChange = (e,index) => {
  let currentData=this.state.data;
   currentData[index]["message"]["russian"]=e.target.value;
   this.setState({
       data:currentData            
   })
   if(e.keyCode === 13){
     this.saveHandler(e,index);
   }
   
}
this.handleSpanishChange = (e,index) => {
  let currentData=this.state.data;
   currentData[index]["message"]["spanish"]=e.target.value;
   this.setState({
       data:currentData            
   })
   if(e.keyCode === 13){
     this.saveHandler(e,index);
   }
   
}

 this.enableEdit=(e,i)=>{
     console.log("im in", e.target.classList);
    //  e.target.style.color = 'black';
      e.target.classList.add('colorBlock');
     this.setState({
      edit: !this.state.edit,
      save:!this.state.save,
      option: false,
      currentIndex:i
  })
 }
 this.changeFocus = (e,i) => {
   console.log("changing focus ");
  e.target.classList.remove('colorBlock');
 }
  this.saveHandler = (e,i) => {
    // e.target.style.color = 'grey';
    e.target.classList.remove('colorBlock');
      console.log("index", i);
      this.setState({
          edit: !this.state.edit,
          save:!this.state.save,
          option: true,
          currentIndex:null

      })
      
     
      console.log("name , values ",this.state.data[i]["name"], this.state.data[i]["message"]);
      
       fetch('https://version-api.sentinelgroup.io/message', {
          method: 'post',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          body: JSON.stringify({
              name:this.state.data[i]["name"],
              message: this.state.data[i]["message"],
              appCode: "SNC",
          })

      })
      
  }


    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>


          {/* Search By Column name section starts here.. */}

          <div className="search">
            {/* <div className={classes.root}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple-checkbox"  >Search By</InputLabel>
                <Select
                  multiple
                  value={this.state.name}
                  onChange={this.selectAttribute}
                  style={{ textTransform: 'capitalize' }}
                  input={<Input id="select-multiple-checkbox" />}
                  className="searchLabel"
                  renderValue={selected => selected.join(', ')}
                // MenuProps={MenuProps}
                >
                  {names.map(name => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={this.state.name.indexOf(name) > -1} />
                      <ListItemText
                        primary={name}
                        className="capitals"

                      />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div> */}
            
            {/* Search By Column name section ends here.. */}

            {/* search section starts*/}
            <Input
              placeholder='Search here'
              onKeyUp={this.searchHandler}
              className="input"
            />
            {/* search section ends here*/}

          </div>
          <Table className={classes.table} aria-labelledby="tableTitle">

            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />

            <TableBody
            
            className="tableBodyStyle">
            
              {/* {data
                // .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      tabIndex={-1}
                      key={n.id}

                    >
                      <TableCell component="th" scope="row" padding="default">
                        {n.deviceId}
                      </TableCell>
                      <TableCell numeric>{n.referredBy}</TableCell>
                      <TableCell numeric>{n.referralId}</TableCell>
                      <TableCell numeric>{n.refs.length}</TableCell>
                      <TableCell numeric>{n.addedOn}</TableCell>
                      <TableCell numeric></TableCell>

                    </TableRow>
                  );
                })} */}

                {
                  data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((v,i)=> {
                    return(

                      <TableRow 
                      // className="editString"  
                      id={v.message}
                      key={v.name}
                      
                      >
                  
              
                            <TableCell>
                            <TextField
                              
                              defaultValue={v.name}
                              // className="editedInputKey"
                              readOnly = {i===this.state.currentIndex?false:true }
                              onClick = {(e) => this.enableEdit(e,i)}
                              onKeyDown = {(e)=>this.handleKeyChange(e,i)}
                              //disableUnderline={i===this.state.currentIndex?false:true}
                              
                              label={i===this.state.currentIndex? "count: "+ this.state.data[i]["name"].length : null && this.state.name !== v.name }
                             />
                             
                           
                            </TableCell>

                             <TableCell>
                            <TextField
                           
                              defaultValue={v.message.english}
                              // className="editedInputKey"
                              // readOnly = {i===this.state.currentIndex?false:true }
                              onClick = {(e) => this.enableEdit(e,i)}
                              onFocus  = {(e) => this.enableEdit(e,i)}
                              onBlur = { (e) => this.changeFocus(e,i) }
                              onKeyDown = {(e)=>this.handleEnglishChange(e,i)}
                              //disableUnderline={i===this.state.currentIndex?false:true}
                              
                              label={i===this.state.currentIndex? "count: "+ this.state.data[i]["message"]["english"].length : null && this.state.name !== v.name }
                             />
                             
                           
                            </TableCell>
                            <TableCell>
                            <TextField
                              
                              defaultValue={v.message.russian}
                              // className="editedInputKey"
                              // readOnly = {i===this.state.currentIndex?false:true }
                              onClick = {(e) => this.enableEdit(e,i)}
                              onBlur = { (e) => this.changeFocus(e,i) }
                              onFocus  = {(e) => this.enableEdit(e,i)}
                              onKeyDown = {(e)=>this.handleRussianChange(e,i)}
                              //disableUnderline={i===this.state.currentIndex?false:true}
                              
                              label={i===this.state.currentIndex? "count: "+ this.state.data[i]["message"]["russian"].length : null && this.state.name !== v.name }
                             />
                             
                           
                            </TableCell>
                            
                      <TableCell>
                      <TextField
                               defaultValue={v.message.spanish}
                              //  readOnly = {i===this.state.currentIndex?false:true}
                              //  className="editedInputValue"
                               onClick = {(e) => this.enableEdit(e,i)}
                               onBlur = { (e) => this.changeFocus(e,i) }
                               onFocus  = {(e) => this.enableEdit(e,i)}
                               onKeyDown = {(e)=>this.handleSpanishChange(e,i)}
                               disabled = {!this.state.data[i]["message"]["spanish"]}
                               //disableUnderline={i===this.state.currentIndex?false:true}
                               label={i===this.state.currentIndex? 
                              "count: "+ (this.state.data[i]["message"]["spanish"] ? this.state.data[i]["message"]["spanish"].length: 0) 
                              : null && this.state.name !== v.name }
                             />
                                
                      </TableCell>
                            
                          {/* <TableCell>

                              //  { this.state.option ?
                   
                   <button onClick={()=>this.editHandler(i)}  >EDIT</button>
                   :  
                   (this.state.currentIndex===i?<button onClick={()=>this.saveHandler(i)} >SAVE</button>:<button onClick={()=>this.saveHandler(i)} >EDIT</button>)
                   }
                            
                          </TableCell> */}
    
                         
                    </TableRow>
                    )
                })
                }


              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
