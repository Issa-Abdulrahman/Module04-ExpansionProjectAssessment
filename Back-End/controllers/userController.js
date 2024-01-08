import db from "../models/index.js";

const {ProductModel, UserModel} = db;

export const addUser = async (req, res) => {
    try {
      const { firstName, lastName, email, password, role } = req.body;
  
      const user = await UserModel.create({
        firstName,
        lastName,
        email,
        password,
        role,
      });
      res.status(201).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const getAllUsers = async (req, res) => {
    try {
      const users = await UserModel.findAll();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const getUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await UserModel.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const { firstName, lastName, email, password, role } = req.body;
  
      const user = await UserModel.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      await user.update({
        firstName,
        lastName,
        email,
        password,
        role,
      });
  
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
export const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await UserModel.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      await user.destroy();
  
      res.status(204).send(); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

