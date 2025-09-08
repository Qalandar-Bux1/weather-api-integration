// models/WeatherRecord.js
const mongoose = require('mongoose');

const WeatherRecordSchema = new mongoose.Schema({
  city: { type: String, required: true },
  latitude: Number,
  longitude: Number,
  locationName: String,
  apiResponse: { type: mongoose.Schema.Types.Mixed }, // full response object
  fetchedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('WeatherRecord', WeatherRecordSchema);
