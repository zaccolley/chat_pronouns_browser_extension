require('dotenv').config();

const { exec } = require("child_process");

const { WEB_EXT_API_KEY, WEB_EXT_API_SECRET } = process.env;

const command = `web-ext sign --source-dir dist/ --api-key ${WEB_EXT_API_KEY} --api-secret ${WEB_EXT_API_SECRET}`

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
});