/*

   1.Dilarang Up Ke Yt Tanpa Seizin Dari Kami
   2.Dilarang memberian sc ini secara gratis ketahuan = eror.
   3.Dilarang Menjual Script Ini Ketahuan = eror
   4.Harap Berhati² Dalam Membeli Script ini
   5.Kami Memantau Semunya Jika Ketahuan Menjual / Membagikan sc ini Langsung Gua Erorin
   
   SC INI DI TULIS ULANG OLEH FALLXD425 
   DAN DI FIX ULANG FALLXD425
                                                              */

const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285813708397'] // ganti nomor wa lu 
global.bugrup = ['6285813708397'] // ganti nomor wa lu
global.packname = 'FallZx'  // Ganti
global.author = 'FallZx' // Ganti
//====================================================
global.yt = 'youtube.com/@FallXD425'
global.ig = 'instagram.com/fallxd_781' // Ganti ig mu
global.wa = `6285813708397` // Ganti wa mu
global.img = `https://telegra.ph/file/30ddde361dd208779f7fe.jpg` //Ganti sindiri
global.autosv = `Assslamualsikum Izin Push Kontak\nSv RAZOR Svb? Sebut Nama`
//====================================================
global.dana = `085813708397\nA.n N_ _ _ _L` //ganti
global.ovo = `Ga Punya\nA.n N _ _ _ L` //ganti
global.gopay = `085813708397\nA.n N_ _ _ _ _L C_ _ _ _Y` //ganti
//====================================================
global.mess = {
    wait: '𝙎𝙖𝙗𝙖𝙧 𝙋𝙚𝙨𝙖𝙣𝙖𝙣 𝘼𝙣𝙙𝙖 𝙎𝙚𝙙𝙖𝙣𝙜 𝙆𝙖𝙢𝙞 𝙋𝙧𝙤𝙨𝙚𝙨🔎',
    succes: '𝙋𝙚𝙨𝙖𝙣𝙖𝙣 𝘼𝙣𝙙𝙖 𝙏𝙚𝙡𝙖𝙝 𝘽𝙚𝙧𝙝𝙖𝙨𝙞𝙡 𝘿𝙞 𝙎𝙚𝙡𝙚𝙨𝙖𝙞𝙠𝙖𝙣',
    admin: '𝙁𝙞𝙩𝙪𝙧 𝙄𝙣𝙞 𝙆𝙝𝙪𝙨𝙪𝙨 𝘼𝙙𝙢𝙞𝙣 𝙆𝙖𝙠',
    botAdmin: '𝙅𝙖𝙙𝙞𝙠𝙖𝙣 𝘽𝙤𝙩𝙯 𝙎𝙚𝙗𝙖𝙜𝙖𝙞 𝘼𝙙𝙢𝙞𝙣 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙁𝙞𝙩𝙪𝙧 𝙄𝙣𝙞',
    owner: '𝙁𝙞𝙩𝙪𝙧 𝙄𝙣𝙞 𝙆𝙝𝙪𝙨𝙪𝙨 𝙊𝙬𝙣𝙚𝙧\n𝙆𝙚𝙩𝙞𝙠 𝙅𝙤𝙞𝙣𝙤𝙬𝙣 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙣𝙙𝙖𝙛𝙩𝙖𝙧 𝙎𝙚𝙗𝙖𝙜𝙖𝙞 𝙊𝙬𝙣𝙚𝙧',
    group: '𝙁𝙞𝙩𝙪𝙧 𝙄𝙣𝙞 𝙃𝙖𝙣𝙮𝙖 𝘿𝙖𝙥𝙖𝙩 𝘿𝙞 𝙂𝙪𝙣𝙖𝙠𝙖𝙣 𝘿𝙞 𝘿𝙖𝙡𝙖𝙢 𝙂𝙧𝙪𝙥',
    private: '𝙁𝙞𝙩𝙪𝙧 𝙄𝙣𝙞 𝙏𝙞𝙙𝙖𝙠 𝘿𝙖𝙥𝙖𝙩 𝘿𝙞𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝘿𝙖𝙡𝙖𝙢 𝙂𝙧𝙪𝙥',
    bot: '𝙁𝙞𝙩𝙪𝙧 𝙆𝙝𝙪𝙨𝙪𝙨 𝘽𝙤𝙩',
    error: '𝗘𝗿𝗼𝗿!! 𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗛𝘂𝗯𝘂𝗻𝗴𝗶 𝗼𝘄𝗻𝗲𝗿',
    Akses: '𝙎𝙚𝙥𝙚𝙧𝙩𝙞𝙣𝙮𝙖 𝘼𝙣𝙙𝙖 𝘽𝙪𝙠𝙖𝙣 𝙐𝙨𝙚𝙧 𝙋𝙧𝙚𝙢𝙞𝙪𝙢\n𝙆𝙚𝙩𝙞𝙠 .𝘽𝙪𝙮𝙥𝙧𝙚𝙢 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙣𝙙𝙖𝙛𝙩𝙖𝙧 𝙎𝙚𝙗𝙖𝙜𝙖𝙞 𝙐𝙨𝙚𝙧  𝙋𝙧𝙚𝙢𝙞𝙪𝙢',
    develop: 'ʜᴀɴʏᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ғᴀʟʟᴢx',
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

/*

   1.Dilarang Up Ke Yt Tanpa Seizin Dari Kami
   2.Dilarang memberian sc ini secara gratis ketahuan = eror.
   3.Dilarang Menjual Script Ini Ketahuan = eror
   4.Harap Berhati² Dalam Membeli Script ini
   5.Kami Memantau Semunya Jika Ketahuan Menjual / Membagikan sc ini Langsung Gua Erorin
                                                              */