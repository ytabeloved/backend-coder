const express = require('express')
const app =express()
const PORT = 8080

const server =app.listen(PORT,()=>{
    console.log(`server up en el puerto ${server.address().port}`)
})

const frase= 'hello world im a server'

app.get('/api/frase', (req, res) => {
    res.send(frase)
})

app.get('/api/letras/:num', (req, res)=>{
    const letra = frase[req.params.num]
    //res.json(letra)
    if(isNaN(req.params.num)){
        res.json({error: 'el parametro no es numero'})
    } else {
        letra !==undefined
        ? res.send(letra)
        : res.send('404 not found')
    }
})