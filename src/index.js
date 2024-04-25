const express= require(`express`);
const series= require(`../data/series.json`)

const app = express();

//      string que representa la ruta
//     {    aca  }
app.get('/series', (req,res)=>{
    console.log("pasando por series");
    res.status(200).json(series);
//                          objeto tipo .json


});  //http:\\localhost:3001\api
// \nombreDeRecurso


// string
// ruta \
app.get('/series/:id', (req,res)=>{
    
    const id =req.params.id;//variable que está dentro del request
    const serie = series.find((s)=>s.id==id)//busco que tenga el mismo id q el parametro
    if (serie)
        res.status(200).json(serie)
    else 
        res.status(404).json(
        
            {error:`el id ${id} no fue encontrado`}
        )
    
    

})

/*
app.delete('/series/:id',(req,res)=>{
    const id= req.params.id;
    const cant= series.length;
    const filtrados= series.filter((s)=>s.id!=id)
    if (cant-1==filtrados.length)
        res.status(200).json({mensaje:`la serie con ${id} fue borrada con exito`})
    else
        res.status(404).json({mensaje:`no existe la  serie`})
})
*/

app.delete('/series/:id',(req,res)=>{
    const id= req.params.id;
    //const cant= series.length;
    const splices= series.splice(id-1,1);
    

})

app.listen(3001,()=>{
        console.log("servidor corriendo")
}); //la verificaciones antes de que arranque el server van acá


//tarea: hacer lo mismo pero con el metodo splice() de los array y cuando lo borro retorno el objeto borrado