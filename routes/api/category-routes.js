const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// http://localhost:3001/api/categories/
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll({
    include: [{model: Product}],
  });
  res.status(200).json(categoryData); 
});


// http://localhost:3001/api/categories/:id
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products




});

// http://localhost:3001/api/categories/
router.post('/', (req, res) => {
  // create a new category




});

// http://localhost:3001/api/categories/:id
router.put('/:id', (req, res) => {
  // update a category by its `id` value




});

// http://localhost:3001/api/categories/:id
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value




});

module.exports = router;
