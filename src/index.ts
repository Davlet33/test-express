import express,{Request,Response} from 'express';
import http from 'http';

const app = express()
const port = process.env.PORT || 5000
const server = http.createServer(app);

app.get('/', (req:Request, res:Response):void => {

	let helloMessage:string = 'Hello Incubator!!';

	res.send(helloMessage);

})


server.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
