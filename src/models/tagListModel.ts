import createId from '@/lib/createId';

const localStorageKeyName = 'tagList'
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || '[]'
    )
    return this.data
  },
  create(name: string) {
    const names = this.data.map((item) => item.name)
    if (names.indexOf(name) >= 0) { return 'duplicated' }
    const id = createId().toString();
    this.data.push({ id, name: name })
    this.save()
    return 'success'
  },
  update(id, name) {
    const idList = this.data.map(item => item.id); //获取 id 列表 idList
    if (idList.indexOf(id) >= 0) {// 有传入 id
      const names = this.data.map(item => item.name); //获取 name 列表
      if (names.indexOf(name) >= 0) { // 命名重复
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {// 无传入 id
      return 'not found';
    }
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++){
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save();
    return true;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  },
}

export default tagListModel
