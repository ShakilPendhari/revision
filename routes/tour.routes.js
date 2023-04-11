const express =require("express");
const { tourModel } = require("../Model/tour.model");
const tourRouter = express.Router();

tourRouter.get("/", async(req,res)=>{
    try{
       const tour = await tourModel.find();
       res.send(tour)
    }
    catch(e){
        console.log("Something went wrong","Error",e)
    }
})


tourRouter.post("/create", async(req,res)=>{
    try{
       const tour = new tourModel(req.body);
       await tour.save();

       res.send({"msg":"Data updated"})
    }
    catch(e){
        console.log("Something went wrong","Error",e)
    }
});

tourRouter.get("/sort", async(req,res)=>{
    let query = req.query;
    try{
        if(query.sort=="asc")
        {
            const tour = await tourModel.find.sort({budget_per_person:1});
            res.send(tour);
        }
        else{
            const tour = await tourModel.find.sort({budget_per_person:-1});
            res.send(tour);
        }

       res.send({"msg":"Data updated"})
    }
    catch(e){
        console.log("Something went wrong","Error",e)
    }
});

tourRouter.get("/filter", async(req,res)=>{
    let query = req.query;
    try{
        if(query.sort=="asc")
        {
            const tour = await tourModel.find({$and:[{destination:query.destination}]}).sort({budget_per_person:1});
            res.send(tour);
        }
        else if(query.sort=="desc"){
            const tour = await tourModel.find({$and:[{destination:query.destination}]}).sort({budget_per_person:-1});
            res.send(tour);
        }
        else{
            const tour = await tourModel.find({$and:[{destination:query.destination}]})
            res.send(tour);
        }

       res.send({"msg":"Data updated"})
    }
    catch(e){
        console.log("Something went wrong","Error",e)
    }
});


module.exports = {
    tourRouter
}