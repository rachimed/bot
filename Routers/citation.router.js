const { Router} = require('express');
const {connectToDatabase} = require('../database/database-connection');
const citationRouter = Router();

citationRouter.get('/citations',async ( req, res) => {
    const db = await connectToDatabase();
    const citations = db.collection('citations');
    res.send( (await citations.find().toArray()));
})



// userRouter.get('/users/:id', (req, res) => {
//     const { id } = req.params
//     res.send(id);
//  } )

citationRouter.get('/citationBot',( req, res) => {
         res.send('Citation Test');
    
    })
    

 module.exports = citationRouter;
