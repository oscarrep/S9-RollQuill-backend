module.exports = function generateController(Model) {
  return {
    getAll: async (req, res) => {
      try {
        const items = await Model.find({});
        res.status(200).json(items);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },

    getOne: async (req, res) => {
      try {
        const item = await Model.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(item);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },

    create: async (req, res) => {
      console.log('Hit CREATE controller');
      console.log('Incoming BODY:', req.body);
    
      try {
        const item = await Model.create(req.body);
        res.status(201).json(item);
      } catch (err) {
        console.error('Error in create:', err);
        if (err.name === 'ValidationError') {
          return res.status(400).json({ message: 'Validation failed', details: err.errors });
        }
        if (err.code === 11000) {
          return res.status(400).json({ message: 'Duplicate key error', details: err.keyValue });
        }
        res.status(500).json({ message: err.message });
      }
    },

    update: async (req, res) => {
      try {
        const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(item);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    },

    remove: async (req, res) => {
      try {
        const item = await Model.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.status(200).json({ message: `Deleted with id: ${req.params.id}` });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
  };
};