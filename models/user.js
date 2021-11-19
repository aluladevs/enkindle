import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: String,
    name: { type: String, text: true },
    email: { type: String, text: true },
    password: { type: String, required: true },
    contact: Number,
    birthday: Date,
    gender: String,
    address: String,
    city: String,
    country: String,
    role: String
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

