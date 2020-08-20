const express = require('express');
const toolController = require('../controllers/toolController');

const router = express.Router();

router.get('/tools', toolController.listTools);
router.post('/tools', toolController.createTool);
router.delete('/tools/:id', toolController.deleteTool);

module.exports = router;
