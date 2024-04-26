import express from 'express';
import { createShortUrlHandler, getOriginalUrlHandler, getAllOriginalUrlsHandlers, getAllShortUrlHandlers} from '../controller/urlcontroller';
const router = express.Router();
router.post('/shorten', createShortUrlHandler);
router.get('/:shortUrl', getOriginalUrlHandler);
router.get('//', getAllShortUrlHandlers);
router.get('/', getAllOriginalUrlsHandlers)

export default router;
