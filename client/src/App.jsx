import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState();

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    console.log(data);
    setItems(data);
  };

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <>
      {items && items.items.map((item, index) => (
        <p key={index}>{item.name}: {item.age}</p>
      ))}
    </>
  )
}

export default App
