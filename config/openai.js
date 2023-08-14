// storing connection string in a variable - for testing
const connectionOpenAIString = process.env.API_KEY;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: connectionOpenAIString,
});
const openai = new OpenAIApi(configuration);

module.exports = {
    openAI
}


async function openAI(prompt) {
try {
  const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  console.log(chat_completion.data.choices[0].message.content);
  return JSON.parse(chat_completion.data.choices[0].message.content)
} catch (err) {
  console.log(err);
  next(Error(err));
}
}

// openAI("Theme: bakery. Theme description: bakery theme can be used for styling bakery web-sites. Respond with a JSON-like answer on what font color rgba, public Google font href, and background color rgba could be used for this theme")
