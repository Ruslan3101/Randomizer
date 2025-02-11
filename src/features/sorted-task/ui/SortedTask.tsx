import { FC, useEffect, useRef, useState } from "react";
import { appList, AppList } from "../../../entities/appList/model";
import "./SortedTask.css"
export const SortedTask:FC = () => {

    const resultContainerRef = useRef<HTMLDivElement | null>(null);
    const listContainerRef = useRef<HTMLUListElement | null>(null);
    const [maxHeight, setMaxHeight] = useState<number>(0);
        useEffect(()=>{
            if(listContainerRef.current){
               const newHeight = listContainerRef.current.offsetHeight;
               setMaxHeight(newHeight)
            }
        },[]);
    return(
    <div className="app-container">
        <div className="result-container" ref={resultContainerRef} style={{height: maxHeight + "px"}}>
         <ul className="sorted-list-container" ref={listContainerRef}>
            {appList.map((app: AppList) => (
                <li key={app.title} className="sorted-list">
                    <p className="sorted-links-title">{app.title}</p>
                    <div className="sorted-links">
                    <a href={app.linkJs} target="_blank">JS</a>
                    <a href={app.linkReact} target="_blank">React</a>
                    </div>
                </li>
        ))}
        </ul>
    </div>
    </div>
    )
}