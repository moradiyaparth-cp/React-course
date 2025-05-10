// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {

  let data = await fs.promises.readdir("blogdata") // wait karo jya sudhi promise resolve no thay tya sudhi
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(("blogdata/" + item), 'utf-8')
        console.log(myfile)
        allBlogs.push(JSON.parse(myfile)) // allBlogs ni undar element ne add kari dese, string ne parse kari ne object banavi dese
      }
  res.status(200).json(allBlogs)

  // fs.readdir("blogdata", (err, data)=>{
  //   console.log(data)

  //   let allBlogs = [];
  //   data.forEach((item)=>{
  //     console.log(item)
  //     fs.readFile(("blogdata/" + item), (d)=>{
  //       allBlogs.push(d) // allBlogs ni undar element ne add kari dese
  //     })
  //   })
  //   res.status(200).json( allBlogs );
  // })
}
