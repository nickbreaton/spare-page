export default function (req, res) {
  if (req.method === 'OPTIONS') {
    res.send(200)
    return true
  }
}
