import React, { useState } from 'react'

const Inventory = () => {
  const [selectedOffice, setSelectedOffice] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const offices = [
    'Hemodialysis',
    'Clinical Laboratory',
    'Radiology',
    'Admin Office'
  ]

  const inventoryItems = [
    {
      id: 1,
      sku: 'MED-001',
      name: 'Syringes 5ml',
      category: 'Supplies',
      office: 'Hemodialysis',
      stock: 450,
      minStock: 100,
      unit: 'pcs',
      location: 'Shelf A-12',
    },
    {
      id: 2,
      sku: 'MED-001',
      name: 'Syringes 5ml',
      category: 'Supplies',
      office: 'Clinical Laboratory',
      stock: 320,
      minStock: 100,
      unit: 'pcs',
      location: 'Shelf A-12',
    },
    {
      id: 3,
      sku: 'MED-002',
      name: 'Gauze Pads (4x4)',
      category: 'Dressings',
      office: 'Radiology',
      stock: 120,
      minStock: 50,
      unit: 'packs',
      location: 'Shelf B-05',
    },
    {
      id: 4,
      sku: 'MED-003',
      name: 'Alcohol Swabs',
      category: 'Antiseptics',
      office: 'Admin Office',
      stock: 35,
      minStock: 100,
      unit: 'boxes',
      location: 'Shelf C-08',
    },
    {
      id: 5,
      sku: 'MED-004',
      name: 'Bandages (Assorted)',
      category: 'Dressings',
      office: 'Hemodialysis',
      stock: 200,
      minStock: 150,
      unit: 'boxes',
      location: 'Shelf B-10',
    },
    {
      id: 6,
      sku: 'MED-005',
      name: 'Needles 21G',
      category: 'Supplies',
      office: 'Clinical Laboratory',
      stock: 500,
      minStock: 200,
      unit: 'pcs',
      location: 'Shelf A-15',
    },
  ]

  return (
    <div className="inventory">
      <div className="page-header">
        <div>
          <h1 className="page-title">Inventory Management</h1>
          <p className="page-subtitle">Manage and track your medical supplies</p>
        </div>
        <button className="btn-primary">+ Add Item</button>
      </div>

      <div className="filters-bar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search items..."
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
          {offices.map((office) => (
            <option key={office} value={office}>{office}</option>
          ))}
        </select>
        <select className="select-input">
          <option>All Categories</option>
          <option>Supplies</option>
          <option>Dressings</option>
          <option>Antiseptics</option>
        </select>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Office</th>
                <th>Stock</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => {
                const isLowStock = item.stock < item.minStock

                return (
                  <tr key={item.id}>
                    <td className="sku">{item.sku}</td>
                    <td>
                      <div className="item-name">{item.name}</div>
                    </td>
                    <td>
                      <span className="category-tag">{item.category}</span>
                    </td>
                    <td>
                      <span className="office-tag">{item.office}</span>
                    </td>
                    <td>
                      <div className={`stock-cell ${isLowStock ? 'low' : ''}`}>
                        {item.stock} {item.unit}
                      </div>
                    </td>
                    <td>{item.location}</td>
                    <td>
                      {isLowStock ? (
                        <span className="status-badge low">Low Stock</span>
                      ) : (
                        <span className="status-badge ok">In Stock</span>
                      )}
                    </td>
                    <td>
                      <div className="actions">
                        <button className="btn-icon">✏️</button>
                        <button className="btn-icon">📋</button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

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

        .category-tag {
          display: inline-block;
          padding: 4px 12px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        }

        .office-tag {
          display: inline-block;
          padding: 4px 12px;
          background: #f3f4f6;
          color: #4b5563;
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
        }

        .btn-icon:hover {
          background: #f3f4f6;
        }

        /* Tablet Responsive */
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

        /* Mobile Responsive */
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
        }
      `}</style>
    </div>
  )
}

export default Inventory
