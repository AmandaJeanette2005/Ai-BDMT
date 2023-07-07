const { openai } = require('./api.js')
const headlines = require('./headlines')
const db = require('./config/firebase.js')
const fs = require('fs')

 const createCompletion = {

  async model(req, res) {
    const { model } = req.body

    console.log('running')

        // for (let i = 0; i < headlines.length; i++) {
        //     console.log('trying to loop index', i)
route
        try{
            
            const chatCompletion = await openai.createChatCompletion({
                model,
                messages: [{role: "user", content:headlines[model]}],
              });

            //1. membuat json
              const filePath = './datakosong.jsonl'
              const newJson = {};
              newJson.prompt = headlines[model];
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
          

          
        } catch (error) {
          console.log(error.message, 'index: ', model)
            
        }
            // }
   
  },
  async customModelCompletion(req, res) {
    const { model, prompt } = req.body
          try {
            const chatCompletion = await openai.createChatCompletion({
            model,
            messages: [{role: "user", content: prompt}],
          });
            console.log(chatCompletion, "ini response")
        res.json(chatCompletion.data?.choices[0]?.message?.content)
        } catch (err) {
            res.send(err.message)
        }
    },

    async saveTemplate(req, res){
      try {
        return res.send("save template")
      } catch (error) {
        return res.send(error.message)
      }
    }
   
  
}

module.exports = createCompletion
