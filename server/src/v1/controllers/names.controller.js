const names = require("../models/names.model");

module.exports = {
  insertName: async (req, res) => {
    try {
      const { name, age, id } = req.body;
      const newNames = new names({
        namesList: {
          name,
          age,
          id,
        },
      });
      await newNames.save();

      return res.status(200).json({ newNames });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
