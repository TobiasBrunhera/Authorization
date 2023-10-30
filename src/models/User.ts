import mongoose, { Schema } from "mongoose";

type Usertype = {
    email: string,
    password: string
}

const UserSchema = new Schema<Usertype>({
    email: { type: String, required: true },
    password: { type: String, required: true }
})

export const User = mongoose.model('autentication', UserSchema)