import parse from './parse'

export default async function (req, res) {
  try {
    await parse(req, res)
  }
  catch (exception) {
    console.error('INTERNAL SERVER ERROR:')
    console.error(exception)
  }
}
