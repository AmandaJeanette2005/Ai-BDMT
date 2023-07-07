const { openai } = require('./api.js')
const headlines = require('./headlines')
const db = require('./config/firebase.js')
const fs = require('fs')



 const createCompletion = {

  async model(req, res) {
    const { model } = req.body

    console.log('running')

        for (let i = 0; i < headlines.length; i++) {
            console.log('trying to loop index', i)

        try{
            
            const chatCompletion = await openai.createChatCompletion({
                model,
                messages: [{role: "user", content:headlines[i]}],
              });

            //1. membuat json
              const filePath = './datakosong.jsonl'
              const newJson = {};
              newJson.prompt = headlines[i];
              newJson.completion = chatCompletion.data?.choices[0]?.message?.content;

            //2. mengepush json ke jsonl
            const jsonString = JSON.stringify(newJson)
            fs.appendFileSync(filePath, jsonString + '\n');
          const resss = await db.collection('aitraining').add({
            id : chatCompletion?.data?.id,
            created :chatCompletion?.data?.created,
            index : chatCompletion?.data?.choices[0]?.index,
            completion : chatCompletion?.data?.choices[0]?.message?.content,
            usage : chatCompletion?.data?.usage
          })          
          console.log(`doc added with id ${resss.id}`)
          continue;

          
        } catch (error) {
          console.log(error.message, 'index: ', i)
            continue;
        }
            }
   
  }
}

module.exports = createCompletion
