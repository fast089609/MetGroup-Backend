import { Store } from "../models/Tiendas.js";

export const index = async (req, res) => {
  try {
    const {usuario} = req;
    const stores = await Store.findAll({
      where: {
        userId: usuario
      }
    });
    res.status(200).send({
      message: "Tienda encontradas.",
      data: stores,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
    });
  }

};

export const show = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id);
    if (!store) {
      res.status(400).send({
        message: "Store not found",
      });
      return;
    }

    res.status(200).send({
      message: "Tienda encontrada",
      data: store,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
    });
  }
};

export const create = async (req, res) => {
  try {
    const {usuario} = req;
    req.body.userId = usuario;
    const store = await Store.create(req.body);
    res.status(200).send({
      message: "Tienda creada correctamente",
      data: store,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
      error: error.message
    });
  }
};

export const update = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id);
    if (!store) {
      res.status(400).send({
        message: "Tienda no encontrada",
      });
      return;
    }

    store.update(req.body);
    res.status(200).send({
      message: "Tienda actualizada correctamente",
      data: store,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
    });
  }
};

export const destroy = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id);
    if (!store) {
      res.status(400).send({
        message: "Tienda no encontrada",
      });
      return;
    }

    store.destroy();
    res.status(200).send({
      message: "Tienda eliminada correctamente",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
    });
  }
};
