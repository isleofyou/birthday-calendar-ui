import './App.css';
import { months } from '../../months_data';
import Card from '../Card';
import Form from '../Form';
function App() {

  return (
    <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>
        <Form />
      </div>
      <div className='bday-container'>
        {months.forEach((month) => {
          return <Card month={month.name}/>
        })}
      </div>
    </div>
  );
}

export default App;
