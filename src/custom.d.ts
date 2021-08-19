type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number 
    createdAt?: Date //除了写数据类型之外还可以写一个类（构造函数），类是对 object 的分类
}