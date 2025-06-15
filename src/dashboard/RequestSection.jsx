import React, { useState } from 'react';

const RequestSection = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    file: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [editedRequest, setEditedRequest] = useState({
    title: '',
    description: '',
  });

  // Handle input changes for new request form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest(prev => ({ ...prev, [name]: value }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    setNewRequest(prev => ({ ...prev, file: e.target.files[0] || null }));
  };

  // Add new request
  const handleAddRequest = (e) => {
    e.preventDefault();
    if (!newRequest.title.trim()) {
      alert('Title is required');
      return;
    }
    const newReq = {
      id: Date.now(),
      title: newRequest.title.trim(),
      description: newRequest.description.trim(),
      file: newRequest.file,
      answered: false,
    };
    setRequests(prev => [newReq, ...prev]);
    setNewRequest({ title: '', description: '', file: null });
  };

  // Start editing a request
  const handleEdit = (id) => {
    const req = requests.find(r => r.id === id);
    setEditingId(id);
    setEditedRequest({ title: req.title, description: req.description });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedRequest({ title: '', description: '' });
  };

  // Save edited request
  const handleSaveEdit = (id) => {
    if (!editedRequest.title.trim()) {
      alert('Title is required');
      return;
    }
    setRequests(prev =>
      prev.map(req =>
        req.id === id ? { ...req, title: editedRequest.title.trim(), description: editedRequest.description.trim() } : req
      )
    );
    setEditingId(null);
  };

  // Delete a request
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      setRequests(prev => prev.filter(req => req.id !== id));
    }
  };

  return (
    <div>
      <h3 className="mb-4">📝 New Request</h3>
      <form onSubmit={handleAddRequest} className="mb-5">
        <div className="mb-3 text-start">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={newRequest.title}
            onChange={handleInputChange}
            placeholder="Enter request title"
            required
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={newRequest.description}
            onChange={handleInputChange}
            placeholder="Enter description"
            rows={3}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Attach File</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control"
            accept="*"
          />
          {newRequest.file && <small className="text-muted">{newRequest.file.name}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Add Request</button>
      </form>

      <h3 className="mb-3">📋 Your Requests</h3>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped align-middle text-start">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(req => (
                <tr key={req.id}>
                  <td style={{ minWidth: '150px' }}>
                    {editingId === req.id ? (
                      <input
                        type="text"
                        className="form-control"
                        value={editedRequest.title}
                        onChange={e => setEditedRequest(prev => ({ ...prev, title: e.target.value }))}
                      />
                    ) : (
                      req.title
                    )}
                  </td>
                  <td style={{ minWidth: '200px' }}>
                    {editingId === req.id ? (
                      <textarea
                        className="form-control"
                        rows={2}
                        value={editedRequest.description}
                        onChange={e => setEditedRequest(prev => ({ ...prev, description: e.target.value }))}
                      />
                    ) : (
                      req.description || <em>No description</em>
                    )}
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        req.answered ? 'bg-primary' : 'bg-warning text-dark'
                      }`}
                    >
                      {req.answered ? 'Answered' : 'Pending'}
                    </span>
                  </td>
                  <td>
                    {editingId === req.id ? (
                      <>
                        <button
                          className="btn btn-sm btn-success me-2"
                          onClick={() => handleSaveEdit(req.id)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => handleEdit(req.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(req.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequestSection;
