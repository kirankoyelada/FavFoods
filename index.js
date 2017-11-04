var express=require('express')
var morgan=require('morgan')
var app=express()

var foods=[
    {"foodName":'Idly'},
    {"foodName":"Vada"},
    {"foodName":"Biryani"}
]
app.use(morgan('dev'))

app.get('/favFoods',(req,res)=>{
    res.send(foods)
})
const Port=process.env.Port || 7979
console.log(Port)
app.listen(Port)