
import { useEffect, useState } from 'react';
import data from '../src/Component/Data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Course from './Component/Course/Course';
import Cart from './Component/Cart/Cart';

function App() {
  const[course,setCourse] = useState([]);
  const[cart,setCart] = useState([]);
  useEffect(() => {
    setCourse(data)
    
    
  },[])

  const handleAddCourse = (course) => {
    const newCart =[...cart, course];
    setCart(newCart);
    
  }

  return (
    <div className="App">
      <div className="cart">
      <h1> Your Cart</h1>
      <h2> <FontAwesomeIcon icon={faShoppingBasket} />  {cart.length}</h2>
      <Cart cart ={cart}> </Cart>

      </div>
      
      <div className="course">
          { 
          course.map(course => <Course course={course} handleAddCourse={handleAddCourse} key={course.id}> </Course> )
          }

      </div>
    
      </div>
  );
}

export default App;
