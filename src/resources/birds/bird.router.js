const router = require('express').Router();
const birdsService = require('./bird.service');

router.route('/').get(async (req, res) => {
  const birds = await birdsService.getAll();
  res.json(birds);
});

module.exports = router;