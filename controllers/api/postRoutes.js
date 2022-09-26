const router = require('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
const {Post} = require('../../models')

router.post('/', (req,res)=>{
    const body = req.body;
    try {
         const newPosts = await Post.create({...body, userID: req.session.userID});
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/', (req, res)=>{
    try {
        const[effectsRows] = await Post.update(req.body, {
            where: {
                id: req.param.id,
            },
            });
            if (affectedRows > 0) { 
                res.status(200).end();

            } else {
                res.status(500).json({message:'upate has been nade!'})
            }
        });
    } catch (error) {
        res.status(500).json({message:'could not be updated!'})
    }
]);