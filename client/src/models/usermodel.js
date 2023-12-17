import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
  
  email: String,
  password: String,
  coursesEnrolled: [{ type: Number }],
  coursesFinished: [{ type: Number }],


}, {
  timestamps: true, 
});

const User =mongoose.models.User || model('User', userSchema); 
export default User;
