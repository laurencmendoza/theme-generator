const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylesetSchema = new Schema(
  {
    theme: {
      type: Schema.Types.ObjectId,
      ref: "Theme",
    },
    fontColor: {
      type: String,
    },
    googleFontHref: {
      type: String,
    },
    googleFontFamily: {
      type: String,
    },
    mainBackgroundColor: {
      type: String,
    },
    menuBackgroundColor: {
      type: String,
    },
    tableHeaderColor: {
      type: String,
    },
    buttonColor: {
      type: String,
    },
    buttonHoverColor: {
      type: String,
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

module.exports = mongoose.model("Styleset", stylesetSchema);
