import { useState } from "react";
import { getRandomTask, getRandomStack, getTaskLink } from "../model";
import { AppList } from "../../../entities/appList";
import { Skeleton } from "../../../shared/ui/skeleton";

export const RandomTask = () => {
  const [randomTask, setRandomTask] = useState<AppList | null>(null);
  const [randomStack, setRandomStack] = useState<string>("");
  const [linkForTask, setLinkForTask] = useState<string>("");

  const randomize = () => {
    const newTask = getRandomTask(randomTask);
    const newStack = getRandomStack(randomStack);
    const link = getTaskLink(newTask, newStack);

    setRandomTask(newTask);
    setRandomStack(newStack);
    setLinkForTask(link);
  };

  const resetButtonHandler = () => {
    setRandomStack("");
    setRandomTask(null);
    setLinkForTask("");
  };

  return (
    <div className="app-container">
      {!randomTask && !randomStack ? (
        <div className="result-container">
          <span className="heading" id="heading">Click the button to get a task</span>
          <Skeleton width={150} />
          <Skeleton width={120} height={20} />
        </div>
      ) : (
        <div className="result-container">
          <span className="result-task">Task: {randomTask?.title}</span>
          <span className="result-stack">Write On: {randomStack}</span>
          <a className="result-link" href={linkForTask} target='_blank' rel="noopener noreferrer">
            Open Task
          </a>
        </div>
      )}
      <div className="button-container">
        <button className="randomize-button" onClick={randomize}>Get Task</button>
        {randomTask && randomStack && (
          <button className="reset-button" onClick={resetButtonHandler}>Reset Task</button>
        )}
      </div>
    </div>
  );
};
