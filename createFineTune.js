const { openai } = require ('./api.js')
const fileId = require ('./fileId.js')


 const createFineTune = {

  async create(req, res) {
    const { model } = req.body
     try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model : model
    })
    console.log('response: ', response)
    res.status(200).send(response)
    // console.log(fileId)
  } catch (err) {
    console.log('error: ', err)
    res.send(err)
  }
  }
 
}

module.exports = createFineTune