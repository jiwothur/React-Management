import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render(){
        return (
            <TableRow>
                <TableCell>[{this.props.id}]</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.age}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
            </TableRow>
        )
      
    }
}



export default Customer;
