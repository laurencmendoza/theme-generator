// storing connection string in a variable
const connectionOpenAIString = process.env.API_KEY;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: connectionOpenAIString,
});
const openai = new OpenAIApi(configuration);

module.exports = {
  sendRequest,
};

// Function to send a request to and return a response from openAI
async function sendRequest(prompt) {
  try {
    const chat_completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    return JSON.parse(chat_completion.data.choices[0].message.content);
  } catch (err) {
    console.log(err);
    next(Error(err));
  }
}