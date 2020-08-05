const birdsRepo = require('./bird.memory.repository');

const getAll = () => birdsRepo.getAll();

module.exports = { getAll };