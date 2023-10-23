type TagType = 'Faculdade' | 'Pessoal' | 'Programação';

export type Task = {
    id: number,
    title: string,
    date: string,
    tags: TagType[]
    checked: boolean
}
