let fs = require('fs')
let image1 = fs.readFileSync('./ya.jpg')
let image2 = fs.readFileSync('./yaa.jpg')
let image3 = fs.readFileSync('./yaaa.jpg')
global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/Ix8SHYHTYdB98ERHBUI2NA']
global.owner = ['6282361160044', '6285212023766', '6282361160044', '6285212023766', '6282361160044'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  amel: 'https://melcanz.net',
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto.xyz': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://rikka-api.herokuapp.com': 'beta',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.net': 'YOU_APIKEY',
  'https://api.lolhuman.xyz': 'YOU_APIKEY',
  'https://api.xteam.xyz': 'YOU_APIKEY',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'ASJJMOFsjrVE8eZq1jgtGL4rGVE',
  'https://velgrynd.herokuapp.com': '79lJ9HEA'
}

// Sticker WM
global.packname = 'Sticker'
global.author = 'By ShiroBotz'
global.image = image1
global.image2 = image2
global.image3 = image3

global.eror = 'Error 404'
global.wait = '_tunggu_'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
