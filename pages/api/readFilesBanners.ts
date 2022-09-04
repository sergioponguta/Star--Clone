import fs from 'fs'
import path from 'path'

export default (req: any, res: { statusCode: number; json: (arg0: string[]) => void; }) => {
  console.log('readFilesBanners.ts: req.url = ', req.url)
  const dirRelativeToPublicFolder = 'img/banners'

  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))
  res.statusCode = 200
  res.json(images);
}