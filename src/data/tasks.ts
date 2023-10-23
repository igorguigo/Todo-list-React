import { Task } from "@/types/Task";


export const tasks: Task[] = [
    {
        id: 0,
        title: 'Passear com o cachorro',
        date: '19/04/2023',
        tags: [
            'Pessoal',
        ],
        checked: true
    },

    {
        id: 1,
        title: 'Lavar louça',
        date: '19/04/2003',
        tags: [
            'Pessoal',
        ],
        checked: true
    },

    {
        id: 2,
        title: 'Assistir video aula',
        date: '19/04/2022',
        tags: [
            'Pessoal',
            'Faculdade'
        ],
        checked: false
    },

    {
        id: 3,
        title: 'Fazer trabalho de cálculo',
        date: '19/04/2022',
        tags: [
            'Faculdade'
        ],
        checked: false
    },
]