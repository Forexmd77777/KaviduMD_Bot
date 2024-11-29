const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts =require('yt-search')


cmd({
    pattern: "alive",
    react: "👀",
    desc: "download song.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("please give me url or text")
const search = await yts(q)
const data = search. videos[0]:
const url = data.ural

let desc =`
TheKingZeuz-MD Song Downloader

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago : ${data.ago}
views: ${data.views}

MADE BY KaviduLakshan_🖤
`
await conn.sendMassage(from,{iamge:{url: data.thumbnail},caption:desc},{quoted:mek});

  //download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendmessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})

 


}catch(e){
 console.log(e)
  reply(`${e}`)
}
})
