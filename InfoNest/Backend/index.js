require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));//true can parse nested one

const PORT=8000;

const apiKey=process.env.apiKey;

function fetchNews(req,res){
    axios.get(req)
    .then(response=>{
        if(response.data.totalResults>0){
            res.json({
                status:200,
                success:true,
                msg:"Fetched data",
                data:response.data
            });
        }
        else{
          res.json({
            status:200,
            success:true,
            msg:"No more results",
          });      
        }
    })
}

//Route for all news

app.get("/allNews",(req,res)=>{
    let page=parseInt(req.query.page)|| 1;
    let pageSize=parseInt(req.query.pageSize)||50;
    if (pageSize === undefined || page === undefined || page <= 0) {
        page = 1;
        pageSize = 50;
      }
    let url=`https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
    fetchNews(url,res);
});

// For Top headlines
app.options("/top-headlines",cors());
app.get("/top-headlines",(req,res)=>{
    let page=parseInt(req.query.page)|| 1;
    let pageSize=parseInt(req.query.pageSize)||50;
    let category=req.query.category || "business";
    if (pageSize === undefined || page === undefined || page <= 0) {
        page = 1;
        pageSize = 50;
      }
    let url=`https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
    fetchNews(url,res);
});

//For country specific news
app.options("/country/:iso",cors());

app.get("/country/:iso",(req,res)=>{
    let page=parseInt(req.query.page)|| 1;
    let pageSize=parseInt(req.query.pageSize)||50;
    if (pageSize === undefined || page === undefined || page <= 0) {
        page = 1;
        pageSize = 50;
      }
    let country=req.params.iso || "in";
    let url=`https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
    fetchNews(url,res);
});

app.listen(PORT,()=>{console.log("server started")});