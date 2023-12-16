import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  coursesEnrolled: [{ type: Number }],
  coursesFinished: [{ type: Number }],


}, {
  timestamps: true, 
});

const User = model('User', userSchema); 
export default User;
