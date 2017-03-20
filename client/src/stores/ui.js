import { action, computed, observable } from 'mobx'

export class UI {
  @observable fileOver = false
  @observable isPending = false
  @action.bound fileEnter() {
    this.fileOver = true
  }
  @action.bound fileLeave() {
    this.fileOver = false
  }
  @action.bound startPending() {
    this.isPending = true
  }
  @action.bound endPending() {
    this.isPending = false
  }
}

export default new UI()
