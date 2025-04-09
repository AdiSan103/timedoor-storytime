export interface PropsCategory  {
 message:string,
 data: Category[]
}

export interface Category {
    id: number,
    name: string,
    slug: string,
    created_at: string,
    updated_at: string
}
