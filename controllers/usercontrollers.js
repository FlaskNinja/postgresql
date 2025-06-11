const con = require('../db');
const { v4: uuidv4 } = require('uuid'); // ✅ Import uuid

exports.getUser = (req, res) => {
  const searchQuery = 'SELECT * FROM trialtable';

  con.query(searchQuery, (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "Couldn't fetch data" });
    }

    if (result.rows.length === 0) {
      return res.status(200).json({ msg: "No users at the moment" });
    }

    res.status(200).json(result.rows);
  });
};

exports.postUser = (req, res) => {
  const { name, age, occupation } = req.body;
  const id = uuidv4(); // ✅ Use correct uuid

  if (!name || !age || !occupation) {
    return res.status(400).json({ msg: 'All fields are required.' });
  }

  const insertQuery = 'INSERT INTO trialtable (name, age, occupation, id) VALUES ($1, $2, $3, $4)';

  con.query(insertQuery, [name, age, occupation, id], (err, result) => {
    if (err) {
      return res.status(400).json({ msg: 'Insert error' });
    }

    res.status(201).send('User added successfully.');
  });
};

exports.getUserId = (req, res) => {
  const { id } = req.params;
  const IdQuery = 'SELECT * FROM trialtable WHERE id = $1';

  con.query(IdQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ msg: 'Error fetching user' });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.status(200).json(result.rows[0]);
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, occupation } = req.body;

  const updateQuery = 'UPDATE trialtable SET name = $1, age = $2, occupation = $3 WHERE id = $4';

  con.query(updateQuery, [name, age, occupation, id], (err, result) => {
    if (err) {
      return res.status(400).json({ msg: 'Update failed' });
    }

    res.status(200).send('User updated successfully');
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const deleteQuery = 'DELETE FROM trialtable WHERE id = $1';

  con.query(deleteQuery, [id], (err, result) => {
    if (err) {
      return res.status(400).json({ msg: 'Delete failed' });
    }

    res.status(200).send('User deleted successfully');
  });
};
