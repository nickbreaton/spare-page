import { action, computed, observable } from 'mobx'

export class UI {
  @observable fileOver = false
  @action.bound fileEnter() {
    this.fileOver = true
  }
  @action.bound fileLeave() {
    this.fileOver = false
  }
}

export default new UI()
