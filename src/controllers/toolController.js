const Tool = require('../models/tool');

const listTools = (req, resp) => {
  let page = 1;
  if (req.query.page) {
    page = parseInt(req.query.page, 10);
  }

  let size = 10;
  if (req.query.size) {
    size = parseInt(req.query.size, 10);
  }

  let searchOptions = {};
  if (req.query.tag) {
    searchOptions = { tags: req.query.tag };
  }

  Tool
    .find(searchOptions)
    .limit(size)
    .skip((page - 1) * size)
    .then((tools) => resp.json(tools))
    .catch((e) => {
      console.error(e);
      resp.status(400);
      resp.send(e);
    });
};

const createTool = (req, resp) => {
  const tool = new Tool();

  tool.title = req.body.title;
  tool.link = req.body.link;
  tool.description = req.body.description;
  tool.tags = req.body.tags;

  tool.save().then((savedTool) => {
    resp.status(201);
    resp.send(savedTool);
  }).catch((e) => {
    console.error(e);
    resp.status(400);
    resp.send(e);
  });
};

const deleteTool = (req, resp) => {
  const { id } = req.params;
  Tool.deleteOne({ _id: id })
    .then(() => resp.status(204).send())
    .catch((e) => {
      console.error(e);
      resp.status(400);
      resp.send(e);
    });
};

module.exports = {
  listTools,
  createTool,
  deleteTool,
};
