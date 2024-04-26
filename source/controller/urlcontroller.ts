import express from 'express';
import { createShortUrl, getOriginalUrl, getShortUrl, getOriginalUrls } from '../service/urlservice';

export const createShortUrlHandler = async (req: express.Request, res: express.Response) => {
    const { originalUrl } = req.body;
    try {
        if (!originalUrl) {
            return res.status(400).send({ message: 'Please provide the original url.' });
        }
        const shortUrl = await createShortUrl({
            originalUrl,
            shortUrl: ''
        });
        return res.status(200).send(shortUrl);
    } catch (err) {
        console.error('Error creating short URL:', err);
        return res.status(500).send({ message: 'Internal server error.' });
    }
}

export const getOriginalUrlHandler = async (req: express.Request, res: express.Response) => {
    const { shortUrl } = req.params;
    try {
        const originalUrl = await getOriginalUrl(shortUrl);
        if (originalUrl) {
            return res.status(200).send({message: originalUrl});
        } else {
            return res.status(404).send({ message: 'Original URL not found for the given short URL.' });
        }
    } catch (err) {
        console.error('Error retrieving original URL:', err);
        return res.status(500).send({ message: 'Internal server error.' });
    }
}

export const getAllShortUrlHandlers = async (req: express.Request, res: express.Response) => {
    try {
     const getShort = await getShortUrl()
     if (!getShort) {
         return res.status(400).send({message: 'Could not get all short urls'})
     }
     return res.status(200).send({message: getShort});
    }
    catch (err) {
     console.error('Error retrieving all short URL:', err);
     return res.status(500).send({ message: 'Internal server error.' });
 }
}
export const getAllOriginalUrlsHandlers = async (req: express.Request, res: express.Response) => {
    try {
     const getOriginals = await getOriginalUrls();
     if (!getOriginals) {
         return res.status(400).send({message: 'Could not get all original urls.'})
     }
     return res.status(200).send({message: getOriginals});
    }
    catch (err) {
     console.error('Error retrieving all the original URL:', err);
     return res.status(500).send({ message: 'Internal server error.' });
 }
 }
