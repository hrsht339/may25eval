const jsonServer = require("json-server")

const path=require("path")
const cors = require("cors")


const app = jsonServer.create()
const route = jsonServer.router(path.join(__dirname,"db.json"))

app.use(cors())
// app.use(jsonServer.bodyParser)
app.use(route)


app.listen(4500,()=>{
    console.log("server connected")
})