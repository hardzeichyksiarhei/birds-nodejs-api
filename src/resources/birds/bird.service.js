const birdsRepo = require('./bird.memory.repository');

const getAll = (levels, answers) => birdsRepo.getAll(levels, answers);

module.exports = { getAll };