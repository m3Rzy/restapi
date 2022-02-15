const { Router } = require("express");
const controller = require('./controller');

const router = Router();

router.get('/', controller.getGamers);
router.post('/', controller.addGamer);
router.get('/:id', controller.getGamerById);


module.exports = router;