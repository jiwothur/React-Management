import React from 'react';

class Customer extends React.Component{
    render(){
        return (
        <div>
           <CustomerProfile
           id = {this.props.id}
           name = {this.props.name}
           />
           <CustomerInfo
           age = {this.props.age}
           gender = {this.props.gender}
           />
        </div>
        )
      
    }
}

class CustomerProfile extends React.Component{
    render(){
        return (
        <div>
            <h2>[{this.props.id}]{this.props.name}</h2>            
        </div>
        )
    }
}
class CustomerInfo extends React.Component{
    render(){
        return (
        <div>
            <p>{this.props.age}</p>
            <p>{this.props.gender}</p>         
        </div>
        )
    }
}

export default Customer;
