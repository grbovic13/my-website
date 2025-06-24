const ServiceRequest = require('../models/ServiceRequest');

exports.createRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.create({
      user: req.user.id,
      service: req.body.service,
      details: req.body.details,
    });
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ message: 'Request failed', error: err.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const filter = req.user.role === 'admin' ? {} : { user: req.user.id };
    const requests = await ServiceRequest.find(filter).sort('-createdAt');
    res.json(requests);
  } catch {
    res.status(500).json({ message: 'Error fetching requests' });
  }
};

exports.updateRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(request);
  } catch {
    res.status(400).json({ message: 'Update failed' });
  }
};
