type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number 
    createdAt?: Date //除了写数据类型之外还可以写一个类（构造函数），类是对 object 的分类
}

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  findTag: (id: string) => Tag | undefined;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void
}