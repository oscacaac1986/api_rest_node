const { default: Axios } = require('axios');
const {Router} = require('express');
const router = Router();


router.get('/',async (req,res)=>{
    const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
    const user= await response.json();
    console.log(user);
    res.send(user);
    

});

module.exports = router;