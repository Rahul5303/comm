

// express
const express=require("express");
// connection for config
const {connection} =require("./config/db");
// product route from router
// cors
const cors=require("cors");

const ProductRoute=require("./routes/product.route");

const CheckoutRoute=require("./routes/checkout.route")

const app=express();

app.use(express.json());

// cors

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );


// products route

app.use("/products",ProductRoute);
app.use("/cart",ProductRoute);
app.use("/checkout",CheckoutRoute);


app.get("/",(req,res)=>{
    res.send("HomePage");
})

app.get("/about",(req,res)=>{
    res.send("AboutPage");
})

app.listen(8001,async()=>{
    try{
        await connection
        console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Connection failed");
        console.log(err);
    }
    console.log("Listening to Port 8001");
})
