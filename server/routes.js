const express = require('express')

const routes = express.Router()

//Select
routes.get('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tbl_canciones',(err,rows)=>{
             if(err) return res.send(err)

             res.json(rows)
        })
    })
})

//Insert
routes.post('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO tbl_canciones set ?', [req.body],(err,rows)=>{
             if(err) return res.send(err)
            
             res.send('La canción ha sido registrada')
        })
    })
})

// Delete
routes.delete('/:IDE_CANCION',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM tbl_canciones WHERE IDE_CANCION = ?', [req.params.IDE_CANCION],(err,rows)=>{
             if(err) return res.send(err)
            
             res.send('La canción ha sido eliminada')
        })
    })
})

// Update
routes.put('/:IDE_CANCION',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE tbl_canciones set ? WHERE IDE_CANCION = ?', [req.body, req.params.IDE_CANCION],(err,rows)=>{
             if(err) return res.send(err)
            
             res.send('La canción ha sido actualizada')
        })
    })
})

module.exports = routes
