const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "cFpQBQYS#I4yUuVvwu4exSCY0Dccz9AuqoNuYDj481-dWUeVk_I4",
MONGODB : process.env.MONGODB || "mongodb+srv://netece6809:SYPmSK4UFWvEnANC@forexdb.0dbqstb.mongodb.net/",
}"
