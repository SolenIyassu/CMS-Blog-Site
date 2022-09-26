const router = require("express").Router();
const { User } = require("../../models");

router.post("/", (req, res) => {
  try {
    const newUser = await.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.sessionStore.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.statusn(500).json(err);
  }
});

router.post('/login', (req, res) => {
try {
    const user = await User.findOne({
        where: {
            username: req.body.username,
        },
    })
    if(!user){
        res.status(400).json({message: "User name or password not found!"});
        return;
    }
    const  correctPassword = user.checkPassword(req.body.password)
    if(!correctPassword){
        res.status(400).json({message: 'No account found!'})
        return;
    }
    req.session.save(()=>{
        req.session.userId = userId;
        req.session.username = user.username;
        req.session.loggedIn = true;
        
        res.json({user, message: 'Logged In'})
    }); 
}  catch (err) {
res.status(500).json({message: 'not found!'})
return;
}
});

router.post('/logout', (req,res)=>{
    try {
        if(req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(200).end();
        });            
        }
    } catch (error) {
        
    }
})