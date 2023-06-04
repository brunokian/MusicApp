import express, { Request, Response } from "express";
import connectToDatabase from "./src/models/connection";
import loginRoutes from "./src/routes/LoginRoutes";
import cors from "cors"
import favoriteRoutes from "./src/routes/FavoriteRoutes";


const app = express()

app.use(express.json())

app.use(cors({origin: 'http://localhost:3000'}))

const PORT = 8000

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('esta ON')
})

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });

app.use(loginRoutes)
app.use(favoriteRoutes)

