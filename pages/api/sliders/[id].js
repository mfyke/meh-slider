// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
    const { id } = req.query

    if (id >= 0 && id <= 10) {
        const imagePath = path.resolve(".", `images/${id}.PNG`);
        const image = fs.readFileSync(imagePath);
        res.setHeader('Content-Type', 'image/png');
        res.status(200).send(image);
    }
    else {
        res.status(200).json({ error: 'Image not found' })
    }
}
