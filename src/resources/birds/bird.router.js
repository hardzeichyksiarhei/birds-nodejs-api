const router = require('express').Router();
const birdsService = require('./bird.service');

router.route('/').get(async (req, res) => {
  let levels = Number(req.query.levels) || 5;
  let answers = Number(req.query.answers) || 6;

  const birds = await birdsService.getAll(levels, answers);
  setTimeout(() => res.json(birds), 1000);
});

module.exports = router;