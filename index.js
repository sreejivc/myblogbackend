const express=require('express');
const cors=require('cors');
const ArticleInfo = require('./src/model/BlogDB');


//Initialization
const app=express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());



//fake Db
/*const articleInfo={
    'node':{
        comments:[]
    },

    'react':{
        comments:[]
    },
    'express':{
        comments:[]
    }

}*/ 

//To find matching data

app.get('/api/article/:name', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    try {
        const articleName = req.params.name;
        ArticleInfo.findOne({ name: articleName })
            .then(function (article) {
                res.status(200).json(article);
            })
    }
    catch (error) {
        res.status(500).json({ message: 'Error', eroor });
    }
});




app.get('/',(req,res)=>{
res.send("Blog app server working...!!");

})

app.get('/api/article/:name', (req, res) => {
    const username=req.params.name;
    res.send(`Hi ${username} URL parameter is working`);
})
//for signup



 //for comments
 app.post('/api/article/:name/comments', (req, res) => {
    const articleName = req.params.name;
    const { username, text } = req.body;
    //articleInfo[articleName].comments.push({ username ,text });
    //res.send(articleInfo[articleName].comments);
    const filter = { name: articleName };
    const update = { $push: { comments: { username, text } } };
    ArticleInfo.findOneAndUpdate(filter, update, { new: true })
        .then(function (article) {
            res.json(article);
        })
})

app.post('/',(req,res)=>{

res.send(`Hai ${req.body.username} post method is working `)});

app.listen(5001,()=>{
console.log("listening to port 5001");})

