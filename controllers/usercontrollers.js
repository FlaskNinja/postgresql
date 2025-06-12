import con from '../db.js';
import { v4 as uuidv4 } from 'uuid';

export const getUser = async (req, res) => {
  try {
    const result = await con.query('SELECT * FROM trialtable');
    if (result.rows.length === 0) {
      return res.status(200).json({ msg: 'No users at the moment' });
    }
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching users' });
  }
};

export const getUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await con.query('SELECT * FROM trialtable WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching user by ID' });
  }
};

export const postUser = async (req, res) => {
  const { name, age, occupation } = req.body;
  const id = uuidv4();

  try {
    const result = await con.query(
      'INSERT INTO trialtable (name, age, occupation, id) VALUES ($1, $2, $3, $4)',
      [name, age, occupation, id]
    );
    res.status(201).json({ msg: 'User added', id });
  } catch (err) {
    res.status(500).json({ msg: 'Error adding user' });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, occupation } = req.body;

  try {
    await con.query(
      'UPDATE trialtable SET name = $1, age = $2, occupation = $3 WHERE id = $4',
      [name, age, occupation, id]
    );
    res.status(200).json({ msg: 'User updated' });
  } catch (err) {
    res.status(500).json({ msg: 'Error updating user' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await con.query('DELETE FROM trialtable WHERE id = $1', [id]);
    res.status(200).json({ msg: 'User deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting user' });
  }
};
