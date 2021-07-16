const mongoose = require("mongoose");

const PrizeList = mongoose.model(
  "PrizeList",
  new mongoose.Schema({
    listName: String,
    prize: [{
      prizeName: String,
      urlTo: String,
      imgUrl: String,
      owner: String,
    }],
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true })
);

module.exports = PrizeList;