import fs from 'fs'
import path from 'path'

interface File {
  path: string
}

export default (req: any, res: { statusCode: number; json: (arg0: string[]) => void; }) => {
  const directoryImagePaths = { 
    banners: "img/banners/",
    over_banner: "img/over_banner/",
    poster: "img/poster/",
    profile: "img/profile/",
    thumbnail: "img/thumbnail/",
    sports_thumbnail: "img/sports_thumbnail/",
 };

 const filePaths: { [key: string]: string[] } = {
  banners: [],
  over_banner: [],
  poster: [],
  profile: [],
  thumbnail: [],
  sports_thumbnail: [],
 };


  for (const [key, value] of Object.entries(directoryImagePaths)) {
    const dir = path.resolve('./public', value);
    const filenames = fs.readdirSync(dir);
    const images = filenames.map(name => path.join('/', directoryImagePaths.banners, name))
    filePaths[key] = images;
  }

  console.log(filePaths);
  res.statusCode = 200
  res.json(filePaths);
}