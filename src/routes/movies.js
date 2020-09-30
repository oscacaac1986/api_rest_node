const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../samples.json');

router.get('/',(req,res)=>{
    res.json(movies);
});

router.post('/',(req,res)=>{
    const {id,name,year,email,phone} =req.body;

    if (name && year && email && phone) {
        const id = movies.length + 1;
        const newData ={...req.body,id};
        movies.push(newData);
        res.json(movies);
        
    } else {
        
    
    res.status(500).json({error:'Verifique data'});
}
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    _.each(movies,(movie,i)=>{
        if(movie.id == id){
            movies.splice(i,1);
        }
    });
    res.send('Eliminar')
});

router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {name,year,email,phone} =req.body;
    if (name && year && email && phone ) {
        _.each(movies,(movie,i)=>{
            if (movie.id == id) {
                movie.name = name;
                movie.year = year;
                movie.email = email;
                movie.phone = phone;
                
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({error:"Verifique  Guey"});
    }

});

module.exports = router;
