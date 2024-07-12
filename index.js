require('dotenv').config();
const http = require("http");
const app = require("./app");
const {connectDB} = require("./db");

const APPLICATION_PORT = process.env.APPLICATION_PORT || 4001;


const server = http.createServer(app);

const main = async ()=>{
    try {
        await connectDB();
        server.listen(APPLICATION_PORT, ()=>{
            console.log(`Server listening on port ${APPLICATION_PORT}`);
        });
	} catch (e) {
		console.log('Database Error');
		console.log(e);
	}
}

main();