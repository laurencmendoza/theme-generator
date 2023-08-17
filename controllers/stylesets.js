const Theme = require("../models/theme");
const Styleset = require("../models/styleset");
const openAI = require("../config/openai");
const textRemainderForOpenAIRequest = `Provide a JSON-style response containing keys for fontColor, googleFontHref, googleFontFamily, mainBackgroundColor, menuBackgroundColor, tableHeaderColor, buttonColor, and buttonHoverColor. I'm looking for suggestions on rgba values for font color, public Google font href, Google font family in CSS format, and rgba values for various theme elements. Ensure the following color contrast principles for improved visibility and variety:

1. menuBackgroundColor and tableHeaderColor should distinctly contrast with white, and the colors should be distinct from each other.
2. buttonColor should be different from and contrast strongly with black.
3. buttonHoverColor should be a unique shade that contrasts sharply with white.
4. mainBackgroundColor should offer contrast from fontColor, menuBackgroundColor, buttonColor, buttonHoverColor, tableHeaderColor, and black. 

The goal is to have a harmonious yet diverse color palette that ensures readability and aesthetics.
`;

module.exports = {
  create: createStyleset,
  delete: deleteStyleset,
  update: updateStyleset,
};

async function createStyleset(req, res) {
  try {
    const themes = await Theme.findById(req.params.id);
    const openAIResponse = await openAI.sendRequest(
      `Theme: ${themes.theme}. Theme description: ${themes.description}. ${textRemainderForOpenAIRequest}`
    );
    const stylesetData = { ...openAIResponse };
    stylesetData.theme = req.params.id;
    stylesetData.user = req.user._id;
    await Styleset.create(stylesetData);
    res.redirect(`/themes/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}

async function deleteStyleset(req, res) {
  try {
    await Styleset.deleteOne({ _id: req.params.ssid });
    res.redirect(`/themes/${req.params.tid}`);
  } catch (err) {
    console.log(err);
  }
}

async function updateStyleset(req, res) {
  try {
    const themes = await Theme.findById(req.params.tid);
    const openAIResponse = await openAI.sendRequest(
      `Theme: ${themes.theme}. Theme description: ${themes.description}. ${textRemainderForOpenAIRequest}`
    );
    const stylesetData = { ...openAIResponse };
    stylesetData.user = req.user._id;
    await Styleset.findOneAndUpdate({ _id: req.params.ssid }, stylesetData);
    res.redirect(`/themes/${req.params.tid}`);
  } catch (err) {
    console.log(err);
  }
}
