const { Router } = require('express');
const router = Router();

router.get('/test', (req,res)=>{
    const data = {
        'name':'Oscar Alfredo',
        'apellidos': 'Cano Acosta',
        'cargo':'Desarrollador FullStack'
    };
    res.json(data);
});

module.exports = router;
