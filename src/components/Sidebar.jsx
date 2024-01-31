/* eslint-disable react/prop-types */

import { IoIosAdd } from "react-icons/io";

function Sidebar(props) {
  return (
    <div className=" absolute top-[10%] flex left-[5%] min-[320px]:left-0 min-[375px]:left-4 min-[425px]:left-8">
        <div className="bg-zinc-900 text-zinc-200 text-6xl rounded-full flex justify-center items-center">
            <button onClick={()=>props.addNote()}>
                <IoIosAdd />
            </button>
        </div>
    </div>
  )
}

export default Sidebar;


// 