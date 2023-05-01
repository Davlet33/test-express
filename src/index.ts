import express,{Request,Response} from 'express';

const app = express()
const port = process.env.PORT || 5000


app.get('/', (req: Request, res: Response): void => {
	res.send('message');
});

app.listen(port, (): void => {
	console.log(`Example app listening on port ${port}`)
})
