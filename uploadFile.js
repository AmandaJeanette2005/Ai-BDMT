const { openai } = require ('./api.js')
const fs = require ('fs')

const upload =  {

  async uploadFineTune(req, res){
    try {
        const response = await openai.createFile(
          fs.createReadStream('./datakosong.jsonl'),
          'fine-tune'
        );
        console.log('File ID: ', response.data.id)
        fs.writeFileSync(`${response.data.id}`, `export const fileId = "${response.data.id}"`)
        res.send("succes!")
      } catch (err) {
        console.log('err: ', err)
      }
  }
      
    }

module.exports = upload
