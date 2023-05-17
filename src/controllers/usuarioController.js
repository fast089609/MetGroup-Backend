import { User } from "../models/Usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const register = await User.findOne({ where: { email } });
    if (!register && register != null) {
      res.status(400).send({
        message: "Este usuario ya existe.",
      });
      return;
    }

    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    res.status(200).send({
      message: "Usuario Creado correctamente",
      data: newUser,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).send({
        message: "Usuario no encontrado",
      });
      return;
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (passwordIsValid) {
      let keyJwt = process.env.KEY_JWT;
      let data = {
        time: Date(),
        userId: user.id,
      };
      res.status(200).send({
        message: "usuario logueado",
        data: user,
        token: jwt.sign(data, process.env.KEY_JWT, {
            expiresIn: '30d'
        }),
      });
      return;
    }

    res.status(401).send({
      message: "Contraseña incorrecta",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
    });
  }
};
