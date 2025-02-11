import { appList, AppList } from "../../entities/appList/index";

export const stackList: ("React" | "JavaScript")[] = ["React", "JavaScript"];

export const getRandomTask = (prevTask: AppList | null): AppList => {
  let newTask: AppList;
  do {
    newTask = appList[Math.floor(Math.random() * appList.length)];
  } while (newTask === prevTask);
  return newTask;
};

export const getRandomStack = (prevStack: string): string => {
  let newStack: string;
  do {
    newStack = stackList[Math.floor(Math.random() * stackList.length)];
  } while (newStack === prevStack);
  return newStack;
};

export const getTaskLink = (task: AppList, stack: string): string => {
  return stack === "JavaScript" ? task.linkJs : task.linkReact;
};
