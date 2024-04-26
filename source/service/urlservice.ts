import { UrlModel } from "../model/urlmodel";
import shortid from "shortid";

interface ShortUrlRequestBody {
    originalUrl: string,
    shortUrl: string
}

export const createShortUrl = async (body: ShortUrlRequestBody): Promise<any> => {
    const { originalUrl } = body;
    if (!originalUrl) {
        throw new Error('Please provide the original URL.');
    }
    const shorts = shortid.generate();
    const createdUrl = await UrlModel.create({ originalUrl, shortUrl: shorts });
    if (!createdUrl) {
        throw new Error('Could not create the short URL.');
    }
    return createdUrl;
}

export const getOriginalUrl = async (shortUrl: string) => {
    const findingUrl = await UrlModel.findOne({ shortUrl });
    if (!findingUrl) {
        throw new Error('Could not find the original url.')
    }
    return findingUrl.originalUrl;
}

export const getShortUrl = async (): Promise<any> => {
    const shortUrls = await UrlModel.find({}, 'shortUrl');
    if (!shortUrls) {
        throw new Error('Could not get all short urls')
    }
    return shortUrls.map(url => url.shortUrl);
}
export const getOriginalUrls = async (): Promise<any> => {
    const originalUrls = await UrlModel.find({}, 'originalUrl');
    if (!originalUrls) {
        throw new Error('Could not get all original urls.')
    }
    return originalUrls.map(url =>  url.originalUrl);
}

