const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = require('express').Router();
mongoose.set('useFindAndModify', false);
let poultrySchema = new Schema({
    id:Number,
    title:String,
    name:String
});

Poultry = mongoose.model('poultrys', poultrySchema);

router.get('/poultrys', (req, res, next) => {
    Poultry.find({})
        .exec((err, tasks) => {
            if (err) res.status(400).send('err');
            else {
                res.status(200).json(tasks);
                //console.log(tasks)
            }
        });    
});

module.exports = router;

// var dataI=[
//     {
//         id:2,
//         title:"Chó",
//         name:"Chó già"
//     },
//     {
//         id:3,
//         title:"Cá",
//         name:"Cá rô phi"
//     }
// ]

 
 
//  dataI.forEach(e=>{
//     var newPoultry =new Poultry(e);
//     newPoultry.save()
// })

// console.log(dataI)