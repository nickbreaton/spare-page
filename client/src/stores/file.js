import { action, computed, observable } from 'mobx'
import request from 'superagent'
import download from 'downloadjs'

export class File {
  @observable upload = 0
  @observable download = 0
  @computed get progress() {
    return (this.upload + this.download) / 2
  }
  @computed get inProgress() {
    return (this.progress > 0)
  }
  @action.bound initialize() {
    this.upload = 0
    this.download = 0
  }
  @action.bound async submit(acceptedFiles) {
    if (!this.inProgress) {
      // accept first file uploaded
      const file = acceptedFiles[0]
      // send file to server for conversion
      const newFile = await new Promise((resolve, reject) => {
        request
          .post('https://us-central1-spare-page.cloudfunctions.net/parse')
          .responseType('blob')
          .attach('document', file)
          .on('progress', (event) => {
            this[event.direction] = event.percent
          })
          .end((err, res) => {
            err ? reject(err) : resolve(res.body)
          })
      })
      // download the converted file
      download(newFile, file.name)
      // reset progress back to original
      this.initialize()
    }
  }
}

export default new File()
