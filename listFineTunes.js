const { openai } = require ('./api.js')

const listFineTunes = {

  async list(req, res){
    try {
    const response = await openai.listFineTunes()
    console.log('data: ', response.data.data)
    res.send(response.data.data)
  } catch (err) {
    console.log('error:', err)
  }
  }
  
}

module.exports = listFineTunes