import { TagType, Task } from "@/types/Task";
import React, { useId, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


type Props = {
    isOpen: boolean;
    closeModal: () => void;
    sendData: (task: Task) => void;
}

export const tags: TagType[] = ["Faculdade", "Pessoal", "Programação"];


const Modal = ({ isOpen, closeModal, sendData }: Props) => {
  const [taskName, setTaskName] = useState('');
  const [taskTags, setTaskTags] = useState<TagType[]>([]);
  const [startDate, setStartDate] = useState<Date | null>();
  const [isNameValid, setIsNameValid] = useState(true);
  const [areTagsValid, setAreTagsValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const handleSelect = (value: string) => {
    const selectedTag: TagType = value as TagType;
    if (selectedTag && !taskTags.includes(selectedTag)) {
      const newTags = [...taskTags, selectedTag];
      setTaskTags(newTags);
    }

  }

  const handleAddTask = (evento:  React.FormEvent) => {
    evento.preventDefault();

    if(!taskName){
      setIsNameValid(false);
      return;
    }

    setIsNameValid(true);

    if(taskTags.length === 0){
      setAreTagsValid(false);
      return;
    }

    setAreTagsValid(true);

    if(!startDate){
      setIsDateValid(false);
      return;
    }

    setIsDateValid(true);

    const formattedDate = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;

    let newTask: Task = {
      id: 0,
      title: taskName,
      date: formattedDate,
      tags: taskTags,
      checked: false
    }

    sendData(newTask);
    closeModal();
    
    setTaskName('');
    setTaskTags([]);
    setStartDate(null);

  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container p-4 rounded-md bg-[#313638] border-[#454a4d] border-solid border-2 shadow-lg z-50 relative min-w-[500px] min-h-[200px]">
        <form action="" className="flex flex-col justify-between gap-y-5">
          <div className="inputs space-y-3">
            <input onChange={e => setTaskName(e.target.value)} type="text" placeholder='Digite o nome da tarefa' className='bg-transparent outline-none block' />
            {!isNameValid &&
              <small className="block italic font-bold text-red-600">Insira um nome para a tarefa</small>
            }
            <select onChange={e => handleSelect(e.target.value)} id="categoria" className="px-4 py-1 bg-[#F06543] text-[#E8E9EB] rounded-md font-medium text-sm h-fit w-fit block">
              <option disabled selected>Categoria</option>
              {
                tags.map(tag =>      
                  <option key={useId()} value={tag}>{tag}</option>
                )
              }
            </select>
            {!areTagsValid &&
              <small className="block italic font-bold text-red-600">Insira uma categoria</small>
            }
            {taskTags.length > 0 &&
              <div className="flex gap-x-3">
                {
                  taskTags.map(tag =>      
                    <span key={useId()} className="text-xs px-4 py-1 text-[#E8E9EB] rounded-md font-medium h-fit bg-red-600">{tag}</span>
                  )
                }
              </div>
            }
            <DatePicker selected={startDate} onChange={(date: Date | null) => date && setStartDate(date)} placeholderText="Data de vencimento" className="px-4 py-1 bg-[#F06543] text-[#E8E9EB] rounded-md font-medium text-sm h-fit w-fit placeholder:text-[#E8E9EB] max-w-[170px] block focus:outline-none focus:border-0" />
            {!isDateValid &&
              <small className="block italic font-bold text-red-600">Insira uma data para a tarefa</small>
            }
          </div>
          <div className="buttons flex justify-end gap-x-4">
            <button onClick={closeModal} className="px-3 py-2 text-[#E0DFD5] text-sm bg-[#313638] font-bold rounded-md border-[#454a4d] border-solid border-2">Cancelar</button>
            <button onClick={e => handleAddTask(e)} className="px-3 py-2 bg-[#E0DFD5] text-sm text-[#313638] font-bold rounded-md">Adicionar tarefa</button>
          </div>
        </form>
        <button className="absolute top-[-0.5rem] right-[-0.5rem] bg-[#313638] rounded-full" onClick={closeModal}>
          <svg className="w-6 h-6 fill-[#F09D51]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
