import { useState } from "react"
import { RandomTask } from "../../random-task";
import { SortedTask} from "../../sorted-task/ui/SortedTask";
import "./TaskManager.css"
export const TaskManager = () => {
    const [mode, setMode] = useState<"random" | "sorted">("random");

    return(
        <div className="task-mode">
            <h2 className="title-task-mode">Choose Task Mode</h2>
            <label>
                <input 
                type="radio" 
                value="random"
                checked={mode === "random"}
                onChange={() => setMode("random")}
                />
                Random Task
            </label>
            <label>
                <input 
                type="radio" 
                value="sorted"
                checked={mode === "sorted"}
                onChange={() => setMode("sorted")}
                />
                Sorted Task
               
            </label>

            <div className="mode-container">
                
                {mode === "random" ? <RandomTask/> : <SortedTask/>}
            </div>
        </div>
    )
}