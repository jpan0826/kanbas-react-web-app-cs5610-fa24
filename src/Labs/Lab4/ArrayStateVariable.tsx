import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className='btn btn-success' onClick={addElement}>Add Element</button>
      <div className='card w-50'>
      <ul className='list-group list-group-flush'>
        {array.map((item, index) => (
          <li className='list-group-item border' key={index}>
            {item}
            <button className='btn btn-danger float-end' onClick={() => deleteElement(index)}
                    id="wd-delete-element-click">
              Delete</button>
          </li>
        ))}
      </ul>
      </div>
      <hr/>
    </div>
  );
}
