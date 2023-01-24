const express = require('express')
const router = express.Router()
const Project = require('../models/Project')

// add project via post

router.post('/add', (req,res) => {
  let {title,description} = req.body

    // insert
    Project.create({
      title,
      description,
      new_project
    })
    .then(() => res.redirect('/'))
    .catch((err)=> console.log(err))
})
 
module.exports = router