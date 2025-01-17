import { useState } from 'react';
import "./App.css"

const taskList = [
  'Counter',
  'Router',
  'Todo List',
  'Accordion',
  'Modal + 3 Buttons',
  'Weather',
  'Tic-Tac-Toe',
  'Drag-and-Drop',
  'Memory Game',
  'Loader with %'
];

const stackList = ['React', 'JavaScript'];

function App() {
  const [randomTask, setRandomTask] = useState(""); 
  const [randomStack, setRandomStack] = useState("");

 const randomize = () =>{
  let newTask, newStack;

    do {
      newTask = taskList[Math.floor(Math.random() * (taskList.length))];
    }while (newTask === randomTask);

    do{
      newStack = stackList[Math.floor(Math.random() * (stackList.length ))];

    }while (newStack === randomStack)
    setRandomTask(newTask)
    setRandomStack(newStack)  
 }

 const resetButtonHandler = () => {
  setRandomStack('');
  setRandomTask('');
 }
 

 return (
  <div className="app-container">
    {!randomTask && !randomStack ? (
      <h1 className="heading">Click the button to get a task</h1>
    ) : (
      <div className="result-container">
        <span className="result-task">Task: {randomTask}</span>
        <span className="result-stack">Write On: {randomStack}</span>
      </div>
    )}
    <div className='button-container'>
    <button className="randomize-button" onClick={randomize}>Get Task</button>
    {randomTask && randomStack && (
          <button className="reset-button" onClick={resetButtonHandler}>Reset</button>
        )}
    </div>
  </div>
  )
}

export default App
