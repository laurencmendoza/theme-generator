const mongoose = require("mongoose");
const defaultTheme = JSON.stringify({
  fontColor: "rgb(0,0,0)",
  googleFont: "'Montserrat', sans-serif",
  mainbackgroundColor: "rgb(255,255,255)",
  menuBackgroundColor: "rgb(128,128,128)",
  tableHeaderColor: "rgb(128,128,128)",
  buttonColor: "rgb(162, 162, 162)",
  buttonHoverColor: "rgb(128,128,128)",
});

const Schema = mongoose.Schema;

const themeSchema = new Schema(
  {
    theme: {
      type: String,
      match: /^.{1,40}$/,
    },
    description: {
      type: String,
      match: /^.{1,300}$/,
    },
    defaultStyle: {
      type: String,
      default: defaultTheme,
    },

    currentStyle: {
      type: Schema.Types.ObjectId,
      ref: "Styleset",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Theme", themeSchema);
