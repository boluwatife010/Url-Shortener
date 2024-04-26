import mongoose from "mongoose";
// interface UrlDocument {
//     originalUrl: string,
//     shortUrl: string
// }
const Schema = mongoose.Schema;
const urlShortenerSchema = new Schema ({
    originalUrl: {
         type: String,
         required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    }
})
export const UrlModel = mongoose.model('shortUrl', urlShortenerSchema);

/*
interface UrlDoc extends mongoose.Document {
  originalUrl: string;
  shortUrl: string;
}

const UrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
});

const UrlModel = mongoose.model<UrlDoc>('Url', UrlSchema);
*/