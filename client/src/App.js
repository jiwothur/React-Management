import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing(3),
    overflowX :"auto"
  },
  table:{
    minWidth : 1080
  },
  progress : {
    marginTop : theme.spacing(2),

  }
})
class App extends Component {
  state = {
    customer:"",
    completed : 0
  }
  componentDidMount(){
    this.timer = setInterval(this.progress,20);
    this.callApi()
        .then(res => this.setState({customer: res}))
        .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/customer');
    const body = await response.json();
    return body;
  }
  progress = () =>{
    const{completed} = this.state;
    this.setState({completed : completed >= 100 ? 0 : completed + 1});
  }
  render()
  {
    const {classes} = this.props;
   return(
     <Paper className = {classes.root}>
       <Table className ={classes.table}>
         <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>나이</TableCell>
            <TableCell>성별</TableCell>
          </TableRow>
        </TableHead> 
        <TableBody>
       {this.state.customer ? this.state.customer.map(c=> {
         return ( <Customer
          key = {c.key}
          id = {c.id}
          name = {c.name}
          age = {c.age}
          gender = {c.gender}
          />
          );
       }) : <TableRow>
            <TableCell colSpan ="6" align ="center">
              <CircularProgress className ={classes.progress} variant="determinate" value ={this.state.completed}/>
            </TableCell>
         </TableRow>}
       </TableBody>
       </Table>
    </Paper>

   )
  }    
}
    
           
export default withStyles(styles)(App);