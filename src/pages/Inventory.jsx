import React, { useState } from 'react'

const Inventory = () => {
  const [selectedOffice, setSelectedOffice] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showMoreInfo, setShowMoreInfo] = useState(null)
  const [showEditModal, setShowEditModal] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)

  // Helper to check if date is near expiry (within 30 days)
  const isNearExpiry = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    const expiry = new Date(expiryDate)
    const diffTime = expiry - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 30 && diffDays > 0
  }

  // Helper to check if date is expired
  const isExpired = (expiryDate) => {
    if (!expiryDate) return false
    const today = new Date()
    const expiry = new Date(expiryDate)
    return expiry < today
  }

  // Updated inventory data with expiration dates
  const inventoryItems = [
    {
      id: 1,
      sku: 'MED-001',
      name: 'Syringes 5ml',
      brand: 'BD Medical',
      location: 'Shelf A-12',
      totalStock: 770,
      minStock: 100,
      unit: 'pcs',
      hasExpiry: false,
      expiryDate: null,
      allocations: [
        { office: 'Hemodialysis', stock: 450 },
        { office: 'Clinical Laboratory', stock: 320 }
      ],
      unallocated: 0
    },
    {
      id: 2,
      sku: 'MED-002',
      name: 'Gauze Pads (4x4)',
      brand: 'Johnson & Johnson',
      location: 'Shelf B-05',
      totalStock: 120,
      minStock: 50,
      unit: 'packs',
      hasExpiry: true,
      expiryDate: '2026-07-15',
      allocations: [
        { office: 'Radiology', stock: 120 }
      ],
      unallocated: 0
    },
    {
      id: 3,
      sku: 'MED-003',
      name: 'Alcohol Swabs',
      brand: 'Kendall',
      location: 'Shelf C-08',
      totalStock: 75,
      minStock: 100,
      unit: 'boxes',
      hasExpiry: true,
      expiryDate: '2026-06-30',
      allocations: [
        { office: 'Admin Office', stock: 35 },
        { office: 'Hemodialysis', stock: 40 }
      ],
      unallocated: 0
    },
    {
      id: 4,
      sku: 'MED-004',
      name: 'Bandages (Assorted)',
      brand: '3M',
      location: 'Shelf B-10',
      totalStock: 200,
      minStock: 150,
      unit: 'boxes',
      hasExpiry: false,
      expiryDate: null,
      allocations: [
        { office: 'Hemodialysis', stock: 150 }
      ],
      unallocated: 50
    },
    {
      id: 5,
      sku: 'MED-005',
      name: 'Needles 21G',
      brand: 'BD Medical',
      location: 'Shelf A-15',
      totalStock: 500,
      minStock: 200,
      unit: 'pcs',
      hasExpiry: true,
      expiryDate: '2028-12-01',
      allocations: [
        { office: 'Clinical Laboratory', stock: 500 }
      ],
      unallocated: 0
    }
  ]

  // Filter items based on search and office
  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesOffice = selectedOffice === 'all' || 
      item.allocations.some(a => a.office === selectedOffice)

    return matchesSearch && matchesOffice
  })

  // Format expiry date for display
  const formatExpiryDate = (dateStr) => {
    if (!dateStr) return 'N/A'
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="inventory">
      <div className="page-header">
        <div>
          <h1 className="page-title">Inventory Management</h1>
          <p className="page-subtitle">Manage and track your medical supplies</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>+ Add Item</button>
      </div>

      <div className="filters-bar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search items by name, SKU, or brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="select-input"
          value={selectedOffice}
          onChange={(e) => setSelectedOffice(e.target.value)}
        >
          <option value="all">All Offices</option>
          <option value="Hemodialysis">Hemodialysis</option>
          <option value="Clinical Laboratory">Clinical Laboratory</option>
          <option value="Radiology">Radiology</option>
          <option value="Admin Office">Admin Office</option>
        </select>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Item Name</th>
                <th>Brand</th>
                <th>Total Stock</th>
                <th>Expiry Date</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => {
                const isLowStock = item.totalStock < item.minStock
                const nearExpiry = isNearExpiry(item.expiryDate)
                const expired = isExpired(item.expiryDate)
                
                let status = 'In Stock'
                let statusType = 'ok'
                
                if (expired) {
                  status = 'Expired'
                  statusType = 'expired'
                } else if (nearExpiry) {
                  status = 'Near Expiry'
                  statusType = 'near-expiry'
                } else if (isLowStock) {
                  status = 'Low Stock'
                  statusType = 'low'
                }

                return (
                  <tr key={item.id}>
                    <td className="sku">{item.sku}</td>
                    <td>
                      <div className="item-name">{item.name}</div>
                    </td>
                    <td>
                      <span className="brand-tag">{item.brand}</span>
                    </td>
                    <td>
                      <div className={`stock-cell ${isLowStock ? 'low' : ''}`}>
                        {item.totalStock} {item.unit}
                      </div>
                    </td>
                    <td>
                      <div className={`expiry-cell ${nearExpiry ? 'near' : expired ? 'expired' : ''}`}>
                        {formatExpiryDate(item.expiryDate)}
                      </div>
                    </td>
                    <td>{item.location}</td>
                    <td>
                      <span className={`status-badge ${statusType}`}>{status}</span>
                    </td>
                    <td>
                      <div className="actions">
                        <button 
                          className="btn-icon" 
                          title="Edit item"
                          onClick={() => setShowEditModal(item)}
                        >
                          ✏️
                        </button>
                        <button 
                          className="btn-icon" 
                          title="More info"
                          onClick={() => setShowMoreInfo(item)}
                        >
                          📋
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* More Info Modal */}
      {showMoreInfo && (
        <div className="modal-overlay" onClick={() => setShowMoreInfo(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Item Details</h2>
              <button className="close-btn" onClick={() => setShowMoreInfo(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="detail-section">
                <h3 className="detail-title">{showMoreInfo.name}</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">SKU:</span>
                    <span className="detail-value">{showMoreInfo.sku}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Brand:</span>
                    <span className="detail-value">{showMoreInfo.brand}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{showMoreInfo.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Total Stock:</span>
                    <span className="detail-value">{showMoreInfo.totalStock} {showMoreInfo.unit}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Expiry Date:</span>
                    <span className="detail-value">{formatExpiryDate(showMoreInfo.expiryDate)}</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h4 className="detail-subtitle">Office Allocations</h4>
                <table className="allocations-table">
                  <thead>
                    <tr>
                      <th>Office</th>
                      <th>Allocated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {showMoreInfo.allocations.map((alloc, index) => (
                      <tr key={index}>
                        <td>{alloc.office}</td>
                        <td>{alloc.stock} {showMoreInfo.unit}</td>
                      </tr>
                    ))}
                    {showMoreInfo.unallocated > 0 && (
                      <tr className="unallocated-row">
                        <td>Unallocated</td>
                        <td>{showMoreInfo.unallocated} {showMoreInfo.unit}</td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Total</td>
                      <td>{showMoreInfo.totalStock} {showMoreInfo.unit}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowMoreInfo(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Item</h2>
              <button className="close-btn" onClick={() => setShowEditModal(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label className="form-label">Item Name</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.name} />
                </div>
                <div className="form-group">
                  <label className="form-label">SKU</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.sku} />
                </div>
                <div className="form-group">
                  <label className="form-label">Brand</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.brand} />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.location} />
                </div>
                <div className="form-group">
                  <label className="form-label">Minimum Stock Level</label>
                  <input type="number" className="form-input" defaultValue={showEditModal.minStock} />
                </div>
                <div className="form-group">
                  <label className="toggle-label">
                    <input type="checkbox" defaultChecked={showEditModal.hasExpiry} />
                    Has Expiration Date
                  </label>
                </div>
                {showEditModal.hasExpiry && (
                  <div className="form-group">
                    <label className="form-label">Expiration Date</label>
                    <input type="date" className="form-input" defaultValue={showEditModal.expiryDate || ''} />
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowEditModal(null)}>Cancel</button>
              <button className="btn-primary" onClick={() => setShowEditModal(null)}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Item</h2>
              <button className="close-btn" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label className="form-label">Item Name</label>
                  <input type="text" className="form-input" placeholder="e.g., Syringes 5ml" />
                </div>
                <div className="form-group">
                  <label className="form-label">SKU</label>
                  <input type="text" className="form-input" placeholder="e.g., MED-006" />
                </div>
                <div className="form-group">
                  <label className="form-label">Brand</label>
                  <input type="text" className="form-input" placeholder="e.g., BD Medical" />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-input" placeholder="e.g., Shelf A-12" />
                </div>
                <div className="form-group">
                  <label className="form-label">Total Stock</label>
                  <input type="number" className="form-input" placeholder="e.g., 100" />
                </div>
                <div className="form-group">
                  <label className="form-label">Unit</label>
                  <select className="form-input">
                    <option value="pcs">pcs</option>
                    <option value="packs">packs</option>
                    <option value="boxes">boxes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Minimum Stock Level</label>
                  <input type="number" className="form-input" placeholder="e.g., 50" />
                </div>
                <div className="form-group">
                  <label className="toggle-label">
                    <input type="checkbox" />
                    Has Expiration Date
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label">Expiration Date</label>
                  <input type="date" className="form-input" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={() => setShowAddModal(false)}>Add Item</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .inventory {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .btn-secondary {
          background: white;
          color: #1f2937;
          border: 1px solid #e5e7eb;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .filters-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0 16px;
          gap: 10px;
          min-width: 200px;
        }

        .search-icon {
          font-size: 18px;
        }

        .search-box input {
          flex: 1;
          border: none;
          padding: 12px 0;
          font-size: 14px;
          outline: none;
        }

        .select-input {
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
          min-width: 150px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .table-container {
          overflow-x: auto;
        }

        .inventory-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 800px;
        }

        .inventory-table th,
        .inventory-table td {
          padding: 16px 20px;
          text-align: left;
        }

        .inventory-table thead {
          background: #f9fafb;
        }

        .inventory-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .inventory-table tbody tr {
          border-bottom: 1px solid #f3f4f6;
        }

        .inventory-table tbody tr:hover {
          background: #f9fafb;
        }

        .sku {
          font-family: monospace;
          color: #6b7280;
        }

        .item-name {
          font-weight: 600;
          color: #1f2937;
        }

        .brand-tag {
          display: inline-block;
          padding: 4px 12px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        }

        .stock-cell {
          font-weight: 600;
          white-space: nowrap;
        }

        .stock-cell.low {
          color: #dc2626;
        }

        .expiry-cell {
          font-weight: 500;
          white-space: nowrap;
        }

        .expiry-cell.near {
          color: #f59e0b;
          font-weight: 600;
        }

        .expiry-cell.expired {
          color: #dc2626;
          font-weight: 600;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .status-badge.ok {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.low {
          background: #fee2e2;
          color: #991b1b;
        }

        .status-badge.near-expiry {
          background: #fef3c7;
          color: #92400e;
        }

        .status-badge.expired {
          background: #fecaca;
          color: #7f1d1d;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        .btn-icon {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .btn-icon:hover {
          background: #f3f4f6;
        }

        /* Toggle Label */
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #1f2937;
          cursor: pointer;
        }

        .toggle-label input {
          width: auto;
          cursor: pointer;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #f3f4f6;
        }

        .modal-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #6b7280;
          line-height: 1;
          padding: 0 8px;
          border-radius: 4px;
        }

        .close-btn:hover {
          background: #f3f4f6;
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 20px 24px;
          border-top: 1px solid #f3f4f6;
        }

        .detail-section {
          margin-bottom: 24px;
        }

        .detail-title {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .detail-subtitle {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
        }

        .detail-label {
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .detail-value {
          font-size: 14px;
          color: #1f2937;
          font-weight: 500;
        }

        .allocations-table {
          width: 100%;
          border-collapse: collapse;
        }

        .allocations-table th,
        .allocations-table td {
          padding: 10px 14px;
          border-bottom: 1px solid #f3f4f6;
          text-align: left;
        }

        .allocations-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          background: #f9fafb;
        }

        .allocations-table td {
          font-size: 14px;
          color: #1f2937;
        }

        .unallocated-row td {
          color: #6b7280;
          font-style: italic;
        }

        .allocations-table tfoot td {
          font-weight: 700;
          border-top: 2px solid #f3f4f6;
        }

        .edit-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #4b5563;
        }

        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .filters-bar {
            gap: 12px;
          }

          .search-box {
            min-width: 100%;
            order: -1;
          }

          .select-input {
            flex: 1;
          }
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }

          .filters-bar {
            gap: 12px;
          }

          .select-input {
            width: 100%;
          }

          .modal {
            margin: 16px;
            border-radius: 12px;
          }

          .detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Inventory
