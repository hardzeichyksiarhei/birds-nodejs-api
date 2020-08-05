const router = require('express').Router();
const birdsService = require('./bird.service');

router.route('/').get(async (req, res) => {
  const birds = await birdsService.getAll();
  setTimeout(() => res.json(birds), 2000);
});

module.exports = router;