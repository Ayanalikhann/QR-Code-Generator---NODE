import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
      type: 'input',
      name: 'link',
      message: 'Enter the link address:'
    }
  ])
  .then((answers) => {
    const link=answers.link;
    var qr_svg = qr.image(link, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(`${link}.png`));

    fs.writeFile("qrdata.txt",link,(err)=>{
      if (err) throw err;
      console.log("link saved to qrdata.txt");
    });
  
  })

 


