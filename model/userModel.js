import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    SurvivalTime: {
        type: Number,
        required: [true, "Please enter a SurvivalTime"]
    },
    Kills: {
        type: Number,
        required: true,
        default: 0
    },
    Deaths: {
        type: Number,
        required: true,
    },
    Damage: {
        type: Number,
        required: false,
    },
    AnimalsReleased: {
        type: Number,
        required: false,
    },
    XP: {
        type: Number,
        required: false,
    },
    Headshots: {
        type: Number,
        required: false,
    },
    ConnectionTime: {
        type: String,
        required: false,
    }
})

export default mongoose.model("XPSystem",userSchema)

/*
The versionKey is a property set on each document when first created by Mongoose. 
This keys value contains the internal revision of the document. 
The name of this document property is configurable. The default is __v = 0.

If this conflicts with your application you can configure as such:

new Schema({..}, { versionKey: '_somethingElse' }) or versionKey: false 
*/
