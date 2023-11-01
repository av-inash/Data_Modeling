import mongoose from 'mongoose'
const medicalRecordSchema =new mongoose.Schema({
  
},{timestamps:true})

export const MedicalRecod =mongoose.model('MedicalRecord',medicalRecordSchema)