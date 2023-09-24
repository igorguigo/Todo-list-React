import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center p-24">
      <header className='w-full flex justify-center'>
        <nav className='w-full container p-4 flex items-center justify-center gap-x-2 text-2xl font-bold text-[#F06543]'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F06543" d="M43,38.833C43,41.135,41.135,43,38.833,43H17.167C14.866,43,13,41.135,13,38.833V17.167 C13,14.865,14.866,13,17.167,13h21.667C41.135,13,43,14.865,43,17.167V38.833z"/><path fill="#F09D51" d="M35,30.833C35,33.135,33.135,35,30.833,35H9.167C6.866,35,5,33.135,5,30.833V9.167 C5,6.865,6.866,5,9.167,5h21.667C33.135,5,35,6.865,35,9.167V30.833z"/><path fill="#313638" d="M18 28.121L11.064 21.186 13.186 19.064 18 23.879 28.814 13.064 30.936 15.186z"/></svg>
          todo<span className='text-[#F09D51]'>list</span>
        </nav>
      </header>
      <section className='w-full mt-14'>
        <div className="container mx-auto">
          <div className="content max-w-[700px] mx-auto">
            <div className="create-item w-full flex justify-between mb-5">
              <button className='px-6 py-2 bg-[#E0DFD5] text-[#313638] font-bold rounded-md'>Criar</button>
              <div className='flex gap-2'>
                <div className="filters flex gap-5 mr-5">
                  <button className='px-4 py-1 bg-[#313638] text-[#E8E9EB] rounded-md font-medium text-sm h-fit'>Data</button>
                  <button className='px-4 py-1 bg-[#313638] text-[#E8E9EB] rounded-md font-medium text-sm h-fit'>Categoria</button>
                </div>
                <div className="completed flex gap-x-2">
                  Concluídas
                  <span className='rounded-full px-4 py-1 bg-[#F09D51] h-fit font-bold text-sm text-[#313638]'>1 de 3</span>
                </div>
              </div>
            </div>
            <div className="item-listing">
              <ul>
                <li>
                  <img src="" alt="" />
                  <div className="text">
                    <div className="title">Passear com o cachorro</div>
                    <div className="date">12/12/2023</div>
                    <div className="tags">Pessoal</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
