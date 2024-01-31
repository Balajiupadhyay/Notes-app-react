/* eslint-disable react/prop-types */

import { MdDeleteOutline } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import ProgressBar from 'react-bootstrap/ProgressBar';


function Note(props) {
  function formattedDate(date)
  {
    if(!date)
    {
      return "";
    }
    const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const currDate = new Date(date);
    const hour = currDate.getHours();
    let minute = currDate.getMinutes();
    minute = minute<10 ? "0" + minute : minute
    const day = currDate.getDate();
    const month = monthArr[currDate.getMonth()];
    const year = currDate.getFullYear();

    return `${hour}:${minute}\u00A0\u00A0\u00A0\u00A0${day} ${month}\u00A0\u00A0${year}`
    
  }

  function updateTextArea(text,id)
  {
      props.updateTextArea(text,id)
  }

  function updateTextTitle(title,id)
  {
      props.updateTextTitle(title,id)
  }

  return (
    <div className=' relative h-64 w-52 flex justify-center flex-col bg-zinc-900/80 rounded-[50px] border-zinc-500 px-4 text-white '>
      <div className="flex items-center mb-4">
      <label htmlFor="title"><TbNotes size="1.1em"/></label>
        
        <input className="bg-transparent border-none outline-none focus:outline-none pl-3 w-3/4 text-xl" 
          id="title"
          onChange={(e)=>updateTextTitle(e.target.value,props.note.id)}
          defaultValue={props.note.title}
          placeholder="Title"
        />
      </div>
      
      <div className=" text-white flex justify-center mb-4 text-sm">
        <textarea className="bg-transparent border-none outline-none focus:outline-none  resize-none max-h-44 max-w-40" 
          name="text" 
          onChange={(e)=>updateTextArea(e.target.value,props.note.id)}
          rows={3}
          id=""
          defaultValue={props.note.text}
          placeholder="Brains out"
          maxLength={572}
        />
  
      </div>
      <div className=" text-white flex flex-row mb-2">
        <div className="flex justify-center items-center">
          <span className=" text-sm pr-3 ">
            {formattedDate(props.note.date)}
          </span>
          <span className="flex justify-center items-center p-[3px] bg-zinc-700 rounded-full ">
            <button onClick={()=>props.deleteNote(props.note.id)}><MdDeleteOutline/></button>
          </span>
        </div>
      </div>
      <div className="">
        <div className="absolute bottom-8 w-3/4">
          <ProgressBar 
            now={(props.note.text.length/572)*100}
            style={{height:'5px'}} 
            />
        </div>
      </div>
    </div>
  )
}

export default Note;