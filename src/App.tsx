import { useState } from 'react';
import "./App.css"
import { appList } from './components/Lists/AppLists';
import Timer from './components/Timer/Timer';

type TAppList = {
  title: string;
  linkJs: string;
  linkReact: string
}


const stackList: ('React' | 'JavaScript')[] = ['React', 'JavaScript'];

function App() {
  const [randomTask, setRandomTask] = useState<TAppList | null>(null); 
  const [randomStack, setRandomStack] = useState<string>("");
  const [linkForTask, setLinkForTask] = useState<string>("");




 const randomize = ():void =>{
  let newTask: TAppList;
  let newStack: string;
  let link: string = '';

  
    do {
      newTask = appList[Math.floor(Math.random() * (appList.length))];
    }while (newTask === randomTask);

    do{
      newStack = stackList[Math.floor(Math.random() * (stackList.length ))];
    }while (newStack == randomStack)

    
      link = newStack === "JavaScript" ? newTask.linkJs: newTask.linkReact
    setRandomTask(newTask)
    setRandomStack(newStack)  
    setLinkForTask(link)
 }



 const resetButtonHandler = () => {
  setRandomStack('');
  setRandomTask(null);
  setLinkForTask('')

 }
 

 return (
  
  <div className="app-container">
    {!randomTask && !randomStack ? (
      <h1 className="heading">Click the button to get a task</h1>
    ) : (
      <div className="result-container">
        <span className="result-task">Task: {randomTask?.title}</span>
        <span className="result-stack">Write On: {randomStack}</span>
        <a className="result-link" href={linkForTask} target='_blank' rel="noopener noreferrer">Open Task</a>
      </div>
    )}
    <div className='button-container'>
    <button className="randomize-button" onClick={randomize}>Get Task</button>
    {randomTask && randomStack && (
          <button className="reset-button" onClick={resetButtonHandler}>Reset Task</button>
        )}
    </div>

    <Timer/>
  </div>

  )
}

export default App
