"use client"

import Item from '@/components/Item';
import Modal from '@/components/Modal';
import Image from 'next/image'
import React, { useState } from 'react'

import { tasks as tasksData } from '@/data/tasks';
import { Task } from '@/types/Task';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tasks, setTasks] = useState(tasksData);
  const [tasksChecked, setTasksChecked] = useState(tasks.filter(task => task.checked).length);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleTaskClick = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );

    setTasks(updatedTasks);
    setTasksChecked(updatedTasks.filter(task => task.checked).length)
  };

  const handleDeleteClick = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setTasksChecked(updatedTasks.filter(task => task.checked).length);
  };

  const addTask = (data: Task) => {
    data.id = tasks[tasks.length - 1].id + 1;
    tasks.push(data);
    let updatedTasks = tasks;
    setTasks(updatedTasks);
    setTasksChecked(updatedTasks.filter(task => task.checked).length);
  }

 
  return (
    <main className="w-full flex min-h-screen flex-col items-center p-24">
      <header className="w-full flex justify-center">
        <nav className="w-full container p-4 flex items-center justify-center gap-x-2 text-2xl font-bold text-[#F06543]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#F06543"
              d="M43,38.833C43,41.135,41.135,43,38.833,43H17.167C14.866,43,13,41.135,13,38.833V17.167 C13,14.865,14.866,13,17.167,13h21.667C41.135,13,43,14.865,43,17.167V38.833z"
            />
            <path
              fill="#F09D51"
              d="M35,30.833C35,33.135,33.135,35,30.833,35H9.167C6.866,35,5,33.135,5,30.833V9.167 C5,6.865,6.866,5,9.167,5h21.667C33.135,5,35,6.865,35,9.167V30.833z"
            />
            <path
              fill="#313638"
              d="M18 28.121L11.064 21.186 13.186 19.064 18 23.879 28.814 13.064 30.936 15.186z"
            />
          </svg>
          todo<span className="text-[#F09D51]">list</span>
        </nav>
      </header>
      <section className="w-full mt-14">
        <div className="container mx-auto">
          <div className="content max-w-[700px] mx-auto">
            <div className="create-item w-full flex justify-between mb-5">
              <button onClick={() => handleOpenModal()} className="px-6 py-2 bg-[#E0DFD5] text-[#313638] font-bold rounded-md">
                Criar
              </button>
              <div className="flex gap-2">
                <div className="filters flex items-center gap-5 mr-5">
                <svg className='h-5' fill='#F09D51' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
                  <select id="countries" className="px-4 py-1 bg-[#F06543] text-[#E8E9EB] rounded-md font-medium text-sm h-fit w-fit">
                    <option selected>Data</option>
                    <option value="recente">Mais recente</option>
                    <option value="antigo">Mais antigo</option>
                  </select>
                  <select id="countries" className="px-4 py-1 bg-[#F06543] text-[#E8E9EB] rounded-md font-medium text-sm h-fit w-fit">
                    <option selected>Categoria</option>
                    <option value="pessoal">Pessoal</option>
                    <option value="trabalho">Trabalho</option>
                  </select>
                </div>
                <div className="completed flex items-center gap-x-2">
                  Concluídas
                  <span className="rounded-full px-4 py-1 bg-[#F09D51] h-fit font-bold text-sm text-[#313638]">
                    {tasksChecked} de {tasks.length}
                  </span>
                </div>
              </div>
            </div>
            <div className="item-listing p-4 rounded-md bg-[#313638] border-[#454a4d] border-solid border-2">
              <ul className="flex flex-col gap-y-5">
                {
                  tasks.map(task => 
                    <Item key={task.id} data={task} onItemClickedRadio={() => handleTaskClick(task.id)} onClickDelete={() => handleDeleteClick(task.id)} />
                  )
                }
              </ul>
            </div>
          </div>
          <Modal isOpen={modalIsOpen} closeModal={() => handleCloseModal()} sendData={addTask} />
        </div>
      </section>
    </main>
  );
}
