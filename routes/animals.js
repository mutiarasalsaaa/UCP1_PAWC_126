const express = require('express');
const router = express.Router();

// Data dummy untuk hewan (menggunakan array dalam memori)
let animals = [
  { id: 1, name: 'Lion', species: 'Panthera leo', age: 5 },
  { id: 2, name: 'Elephant', species: 'Loxodonta africana', age: 10 }
];

// Route untuk mendapatkan semua hewan
router.get('/', (req, res) => {
  res.json(animals); // Kirimkan data hewan sebagai respons
});

// Route untuk menambahkan hewan baru
router.post('/', (req, res) => {
  const newAnimal = req.body;
  animals.push(newAnimal);
  res.status(201).json(newAnimal); // Kirimkan data yang baru ditambahkan
});

// Route untuk mengedit data hewan
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const animalIndex = animals.findIndex(animal => animal.id == id);

  if (animalIndex !== -1) {
    animals[animalIndex] = { ...animals[animalIndex], ...updatedData };
    res.json(animals[animalIndex]);
  } else {
    res.status(404).send('Animal not found');
  }
});

// Route untuk menghapus data hewan
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const animalIndex = animals.findIndex(animal => animal.id == id);

  if (animalIndex !== -1) {
    const deletedAnimal = animals.splice(animalIndex, 1);
    res.json(deletedAnimal);
  } else {
    res.status(404).send('Animal not found');
  }
});

module.exports = router;
