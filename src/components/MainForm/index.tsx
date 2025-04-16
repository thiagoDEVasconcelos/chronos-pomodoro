import { PlayIcon, StopCircleIcon } from "lucide-react";

import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";



export const MainForm = () => {
    return (
        <form action="" className="form">
        <div className="formRow">
          <DefaultInput id="meuInput" type="text" labelText="ads asdasdad" placeholder="Digite algo"/>
        </div>

        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayIcon size={24}/>} color="green"/>
          <DefaultButton icon={<StopCircleIcon size={24}/>} color="red"/>
        </div>
      </form>
    )
}