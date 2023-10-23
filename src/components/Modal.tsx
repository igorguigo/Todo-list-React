import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


type Props = {
    isOpen: boolean;
    closeModal: () => void;
}

const Modal = ({ isOpen, closeModal }: Props) => {
  const [startDate, setStartDate] = useState<Date | null>();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container p-4 rounded-md bg-[#313638] border-[#454a4d] border-solid border-2 shadow-lg z-50 relative min-w-[500px] min-h-[200px]">
        <form action="" className="flex flex-col justify-between gap-y-5">
          <div className="inputs space-y-3">
            <input type="text" placeholder='Digite o nome da tarefa' className='bg-transparent outline-none block' />
            <input type="text" placeholder='Digite a categoria da tarefa' className='bg-transparent outline-none block' />
            <DatePicker selected={startDate} onChange={(date: Date | null) => date && setStartDate(date)} placeholderText="Data de vencimento" className="px-4 py-1 bg-[#F06543] text-[#E8E9EB] rounded-md font-medium text-sm h-fit w-fit placeholder:text-[#E8E9EB] max-w-[170px]" />
          </div>
          <div className="buttons flex justify-end gap-x-4">
            <button onClick={closeModal} className="px-3 py-2 text-[#E0DFD5] text-sm bg-[#313638] font-bold rounded-md border-[#454a4d] border-solid border-2">Cancelar</button>
            <button className="px-3 py-2 bg-[#E0DFD5] text-sm text-[#313638] font-bold rounded-md">Adicionar tarefa</button>
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
