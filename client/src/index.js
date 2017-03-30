import request from 'superagent'
import download from 'downloadjs'

document.querySelector('input').addEventListener('change', (e) => {
  console.log('Uploading...')
  request
    .post('/parse')
    .responseType('blob')
    .attach('document', e.target.files[0])
    .end((err, res) => {
      console.log('Downloading...')
      download(res.body, 'download.pdf')
    })
})
