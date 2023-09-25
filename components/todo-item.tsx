'use client'

import { TodoItemProps } from "@/interfaces"
import { Check, Trash } from "lucide-react"
import { useState } from "react"


const TodoItem = ({ status }: TodoItemProps) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const returnClasses = ():string => {
        let classes: string
        if(status == 'Daily'){
            classes = "rounded-full p-7 inline-block bg-[#2196F3]"
        }else if(status == 'Work'){
            classes = "rounded-full p-7 inline-block bg-[#0B9F00]"
        }else if(status == 'Projects'){
            classes = "rounded-full p-7 inline-block bg-[#F38721]"
        }else if(status == 'Ideas'){
            classes = "rounded-full p-7 inline-block bg-[#F32163]"
        }else{
            classes = ''
        }

        return classes
    }

    const returnCheckBoxClasses =  ():string => {
        let classes: string
        if(status == 'Daily'){
            classes = "p-1 rounded-xl outline-none cursor-pointer bg-[#2196F3]"
        }else if(status == 'Work'){
            classes = "p-1 rounded-xl outline-none cursor-pointer bg-[#0B9F00]"
        }else if(status == 'Projects'){
            classes = "p-1 rounded-xl outline-none cursor-pointer bg-[#F38721]"
        }else if(status == 'Ideas'){
            classes = "p-1 rounded-xl outline-none cursor-pointer bg-[#F32163]"
        }else{
            classes = ''
        }

        return classes
    }

    return (
        <div className="flex items-center justify-between bg-[#151515] px-4 py-3 rounded-[20px]">
            <div className="flex items-center space-x-3">
                <div className={returnClasses()}>

                </div>
                <div>
                    <h1 className="text-white font-bold text-md">Finish building the discord clone</h1>
                    <p className="text-white text-sm">this is the discription of the daily tas which can be as long as it needs to be</p>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div className={isCompleted ? returnCheckBoxClasses() : 'bg-white p-1 rounded-xl cursor-pointer outline-none'} onClick={() => setIsCompleted(!isCompleted)}>
                    <Check className="text-white"/>
                </div>
                <div className="cursor-pointer">
                    <Trash className="text-red-600"/>
                </div>
            </div>
        </div>
    );
}
 
export default TodoItem;