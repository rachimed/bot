const { Router} = require('express');
const packageJson = require('../package.json');

const versionRouter = Router();



    // app.use(function(req, res) {
    //     //req.version is used to determine the version
    //    req.version = req.headers['accept-version'];
       
    //   });


// userRouter.get('/users/:id', (req, res) => {
//     const { id } = req.params
//     res.send(id);
//  } )
versionRouter.get('/version',( req, res) => {
    res.send(`Version de mon api ${packageJson.version}`)
    
        
    })
    
    console.log(packageJson.version); 

 module.exports = versionRouter;
