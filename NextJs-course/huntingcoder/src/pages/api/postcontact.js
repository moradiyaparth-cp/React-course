import * as fs from 'fs';

export default function handler(req, res){
    if (req.method === 'POST') {
        console.log(req.body)
        fs.writeFile('contactdata/1.json', JSON.stringify(req.body), ()=>{})
        res.status(200).json(req)
    }
    else{
        res.status(200).json(["allBlogs"])
    }
}