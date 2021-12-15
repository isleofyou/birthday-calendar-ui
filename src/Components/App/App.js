import './App.css';
import { allMonths } from '../../months_data';
import Card from '../Card';
import Form from '../Form';
import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      birthdays: [],
      loaded: false,
      months: [],
    }
  }

  componentDidMount = () => {
       fetch('http://localhost:3001/api/v1/birthdays')
       .then((response) => response.json())
       .then((data) => this.setState({birthdays: data, loaded: true, months: allMonths}))
       .catch(err => console.log(err))
      }

  findBirthdays = (month) => {
    let result = [];
    this.state.birthdays.forEach((birthday) => {
      if(birthday.month === month.id) {
        result.push(birthday)
          }
        })
        console.log(result)
        return result;
      }


  render() {
  return (
    <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>
        <Form />
      </div>
      <div className='bday-container'>
        {this.state.loaded &&
         this.state.months.map((eachMonth) => {
           console.log(this.findBirthdays, "app")
            return <Card month={eachMonth.name} key={eachMonth.id} birthdays={this.findBirthdays(eachMonth)}/>   
        })}
      </div>
    </div>
  )
  }
}
export default App;