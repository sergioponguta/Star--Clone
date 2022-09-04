import fs from 'fs'
import path from 'path'
import { directoryImagePaths } from '../../constants/imagePaths';

export default (req: any, res: { statusCode: number; json: (arg0: string[]) => void; }) => {

  console.log(req.query);
  const imageType : string = req.query.imageType;
  const dir = path.resolve('./public', directoryImagePaths[imageType]);
  const filenames = fs.readdirSync(dir);
  const images = filenames.map(name => path.join('/', directoryImagePaths[req.query.imageType], name))
  console.log('readFiles.ts: images = ', req.query,  images)
  res.statusCode = 200
  res.json(images);
}