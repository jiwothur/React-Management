import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer =[{
  id : 1,
  name : '홍길동',
  age : '28',
  gender : '남'
},{
  id : 2,
  name : '이다지',
  age : '31',
  gender : '여'
},{
  id : 3,
  name : '현우진',
  age : '31',
  gender : '남'
}
]
class App extends Component {
  render()
  {
    return (
      <div className="App">
        {
          customer.map(c=>{
            return(
              <Customer
              key = {c.id}
              id = {c.id}
              name ={c.name}
              age = {c.age}
              gender = {c.age}
              />
            )
          })
        }
      </div>
    );
  }
 
}

export default App;
