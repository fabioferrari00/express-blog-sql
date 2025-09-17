

//importo express
const express = require('express');

//importo postController
const postController = require('../controllers/postController')

//definisco l'oggetto router
const router = express.Router();

//index
router.get('/', postController.index)

//show
router.get('/:id', postController.show)

//create
router.post('/', postController.store)

//update
router.put('/:id', postController.update)

//modify
router.patch('/:id', postController.modify)

//delete
router.delete('/:id', postController.destroy)

//esporto il router
module.exports = router;