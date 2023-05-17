import { Article } from "../models/Articulos.js";

export const index = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: "store",
    });
    res.status(200).send({
      message: "Articulos encontrados correctamente",
      data: articles,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message + " Error -> servidor",
    });
  }
};

export const show = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id, {
      include: "store",
    });
    if (!article) {
      res.status(400).send({
        message: "Article not found",
      });
      return;
    }

    res.status(200).send({
      message: "Articulo encontrado correctamente",
      data: article,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
    });
  }
};

export const create = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(200).send({
      message: "Articulo creado correctamente",
      data: article,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
    });
  }
};

export const update = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      res.status(400).send({
        message: "Articulo no encontrado",
      });
      return;
    }

    article.update(req.body);
    res.status(200).send({
      message: "Articulo actualizado correctamente",
      data: article,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
    });
  }
};

export const destroy = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      res.status(400).send({
        message: "Articulo no encontrado",
      });
      return;
    }

    article.destroy();
    res.status(200).send({
      message: "Articulo eliminado correctamente.",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error -> servidor",
    });
  }
};
