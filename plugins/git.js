const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/Y2mXdR5/ajuser.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `π°π±π ππ΄π π±πΎπ

*bot making video* : 

*owner id instagram* :

*github* : 

β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘β β‘
       _π¨π©πΌ πΊπ¬πΉ π©πΆπ»_
  β£β£ π²ππ΄π°ππ΄π³ π±π π°π±π ππ΄π β£β£

`}) 

}));
