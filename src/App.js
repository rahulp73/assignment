import logo from './logo.svg';
import './App.css';
import { BsPlusLg } from "react-icons/bs";
import { useState } from 'react';

const App = () => {

  const [items, setItems] = useState(["Pizza", "Burger", "Shawarma", "Biryani", "Butter Naan", "Panner", "Chapathi", "Pani Puri", "Pav Bhaji", "Aloo Tikka", "Veg Manchuria", "Spring Rolls"]);
  
  const [tasks, setTasks] = useState([]);
  
  const [searchValue, setSearchValue] = useState("");
  
  const changeValue = (event) => {
    setSearchValue(event.target.value);
  }
  
  const searchedItems = tasks.filter((item) => {
    if(item.toLowerCase().includes(searchValue.toLowerCase())){
        return item;
      }
  })

  const handleClick = () => {
    if(items.length===0){
      return;
    }
    let newItems = [...items];
    let item = newItems.pop();
    setItems(newItems);
    setTasks([...tasks, item]);
  }

  return (
    <div className="App">
      <div className='navbar'>
        <input type="text" value={ searchValue } onChange={ changeValue } placeholder="Search"></input>
        <div className="verticalLine"></div>
        <button onClick={ handleClick }><BsPlusLg /></button>
        <hr/>
      </div>
      <div className='list'>
        <ul>
          {(searchValue.length>0)&&(searchedItems.map((item) => {
            return <><li key={item}>{item}</li><hr/></>
            }))
          }
          {(searchValue.length===0)&&(tasks.map((item) => {
            return <><li key={item}>{item}</li><hr/></>
            }))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
