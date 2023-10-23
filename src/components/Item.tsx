import { Task } from "@/types/Task";

import React, { useState } from 'react'

type Props = {
    data: Task;
    onItemClickedRadio: () => void;
    onClickDelete: () => void;
}

const Item = ({ data, onItemClickedRadio, onClickDelete }: Props) => {

    const onClickedRadio = () => {
        onItemClickedRadio();
    }

    const onClickedDelete = () => {
        onClickDelete();
    }

    return (
        <li className="px-5 py-6 rounded-md bg-[#454a4d] flex gap-x-3">
            <div onClick={onClickedRadio} className="check rounded-full w-5 h-5 border-[3px] border-[#F06543] p-[2px] relative cursor-pointer">
                {data.checked && 
                    <svg className='w-full h-full object-cover' fill='#F09D51' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="122.877px" height="101.052px" viewBox="0 0 122.877 101.052" enable-background="new 0 0 122.877 101.052"><g><path d="M4.43,63.63c-2.869-2.755-4.352-6.42-4.427-10.11c-0.074-3.689,1.261-7.412,4.015-10.281 c2.752-2.867,6.417-4.351,10.106-4.425c3.691-0.076,7.412,1.255,10.283,4.012l24.787,23.851L98.543,3.989l1.768,1.349l-1.77-1.355 c0.141-0.183,0.301-0.339,0.479-0.466c2.936-2.543,6.621-3.691,10.223-3.495V0.018l0.176,0.016c3.623,0.24,7.162,1.85,9.775,4.766 c2.658,2.965,3.863,6.731,3.662,10.412h0.004l-0.016,0.176c-0.236,3.558-1.791,7.035-4.609,9.632l-59.224,72.09l0.004,0.004 c-0.111,0.141-0.236,0.262-0.372,0.368c-2.773,2.435-6.275,3.629-9.757,3.569c-3.511-0.061-7.015-1.396-9.741-4.016L4.43,63.63 L4.43,63.63z" /></g></svg>
                }
            </div>
            <div className="text">
                <div className="title text-lg font-semibold leading-none mb-2">
                    {data.title}
                </div>
                <div className="date text-sm italic text-[#d7d9db] mb-2 flex items-center gap-x-1">
                    <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg>
                    {data.date}
                </div>
                <div className="tags flex gap-x-3">
                    {
                        data.tags.map(tag => 
                            <div className="text-sm px-4 py-1 text-[#E8E9EB] rounded-md font-medium h-fit bg-red-600">{tag}</div>
                        )
                    }
                    {/* <div className="text-sm px-4 py-1 text-[#E8E9EB] rounded-md font-medium h-fit bg-lime-600">Programação</div> */}
                </div>
            </div>
            <div className="ml-auto">
                <svg onClick={onClickedDelete} fill='' className='w-6 h-6 fill-[#F09D51] hover:fill-[#F06543] transition-all' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
            </div>
        </li>
    );
  };
  
  export default Item;

