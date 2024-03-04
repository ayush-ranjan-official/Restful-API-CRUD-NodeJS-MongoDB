import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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