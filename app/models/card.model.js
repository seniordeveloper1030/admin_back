const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
    cardName:String,
    cardPicture:String,
    cardPrice:Number,
    cardTags:[],
    cardDescription:String,
    cardLocation:{},
    cardGender:String,
    cardAgeRange:Number,
    cardAgeRestriction:String,
    categoryId:String,
    tipPicture:String,
    tipDescription:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Card', CardSchema);