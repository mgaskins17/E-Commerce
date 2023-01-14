const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// http://localhost:3001/api/categories/
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    });

    if (!categoryData) {
      res.status(404).json({message: 'No data found in the category table.'})
      return;
    }

    res.status(200).json(categoryData); 
  } catch(err) {
    res.status(500).json(err);
  }
  
});


// http://localhost:3001/api/categories/:id
router.get('/:id', async (req, res) => {
  try {
    const categoryID = req.params.id;
    console.log(categoryID);
    const categoryData = await Category.findByPk(categoryID, {
       include: [{model: Product}] // Including Product isn't working
    });

    if (!categoryData) {
      res.status(404).json({message: 'No category found with this id.'})
      return;
    }

    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/categories/
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });

    res.status(200).json(categoryData);

  } catch(err) {
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/categories/:id
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        }
      }
    );

    res.status(200).json(categoryData); // I believe this is sending a boolean value confirming it was updated

  } catch(err) {
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/categories/:id
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy(
      {
        where: {
          id: req.params.id,
        },
      }
    )

    res.status(200).json(categoryData); // I believe this is sending a boolean value confirming it was deleted

  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
