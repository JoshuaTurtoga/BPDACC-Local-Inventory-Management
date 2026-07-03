import React, { useState } from 'react'
import Icon from '../components/Icon'

// Import inventory icons
import searchIcon from '../assets/icons/inventory/search-icon.svg'
import expandIcon from '../assets/icons/inventory/expand-icon.svg'
import collapseIcon from '../assets/icons/inventory/collapse-icon.svg'
import editIcon from '../assets/icons/inventory/edit-icon.svg'
import stockCardIcon from '../assets/icons/inventory/stockcard-icon.svg'
import deleteIcon from '../assets/icons/inventory/delete-icon.svg'
import addItemIcon from '../assets/icons/inventory/additem-icon.svg'
import addTransactionIcon from '../assets/icons/inventory/addtransaction-icon.svg'
import closeIcon from '../assets/icons/inventory/close-icon.svg'
import printIcon from '../assets/icons/inventory/print-icon.svg'

const Inventory = () => {
  const [selectedOffice, setSelectedOffice] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showMoreInfo, setShowMoreInfo] = useState(null)
  const [showEditModal, setShowEditModal] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showTransactionModal, setShowTransactionModal] = useState({ visible: false, isEdit: false, index: null })
  const [transactionForm, setTransactionForm] = useState({
    date: '',
    reference: '',
    selectedBatch: null,
    receiptQty: 0,
    issuanceQty: 0,
    office: 'Hemodialysis',
    balance: 0
  })
  const [expandedItems, setExpandedItems] = useState(new Set())
  const [addFormData, setAddFormData] = useState({
    name: '',
    location: '',
    unit: 'pcs',
    minStock: 0,
    hasInitialBatch: false,
    initialBatch: {
      batchId: '',
      brand: '',
      supplier: '',
      stockNumber: '',
      office: 'Hemodialysis',
      stock: 0,
      hasExpiry: false,
      expiryDate: ''
    }
  })
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      sku: 'MED-001',
      name: 'Syringes 5ml',
      location: 'Shelf A-12',
      minStock: 100,
      unit: 'pcs',
      batches: [
        { batchId: 'B-001', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-001', expiryDate: null, office: 'Hemodialysis', stock: 250, transactionCount: 3 },
        { batchId: 'B-002', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-002', expiryDate: null, office: 'Clinical Laboratory', stock: 320, transactionCount: 1 },
        { batchId: 'B-003', brand: 'BD Medical', supplier: 'Medical Supply Co', stockNumber: 'SN-003', expiryDate: null, office: 'Hemodialysis', stock: 200, transactionCount: 0 }
      ],
      transactions: [
        { date: '2026-06-01', reference: 'Initial Stock', selectedBatch: null, receiptQty: 770, issuanceQty: 0, office: 'All', balance: 770 },
        { date: '2026-06-05', reference: 'MED-001B-001-1', selectedBatch: 'B-001', receiptQty: 0, issuanceQty: 50, office: 'Hemodialysis', balance: 720 },
        { date: '2026-06-06', reference: 'MED-001B-001-2', selectedBatch: 'B-001', receiptQty: 0, issuanceQty: 40, office: 'Hemodialysis', balance: 680 },
        { date: '2026-06-07', reference: 'MED-001B-001-3', selectedBatch: 'B-001', receiptQty: 0, issuanceQty: 30, office: 'Hemodialysis', balance: 650 },
        { date: '2026-06-10', reference: 'MED-001B-003-1', selectedBatch: 'B-003', receiptQty: 200, issuanceQty: 0, office: 'Hemodialysis', balance: 850 },
        { date: '2026-06-15', reference: 'MED-001B-002-1', selectedBatch: 'B-002', receiptQty: 0, issuanceQty: 80, office: 'Clinical Laboratory', balance: 770 }
      ]
    },
    {
      id: 2,
      sku: 'MED-002',
      name: 'Gauze Pads (4x4)',
      location: 'Shelf B-05',
      minStock: 50,
      unit: 'packs',
      batches: [
        { batchId: 'B-004', brand: 'Johnson & Johnson', supplier: 'Healthcare Plus', stockNumber: 'SN-004', expiryDate: '2026-07-15', office: 'Radiology', stock: 80, transactionCount: 1 },
        { batchId: 'B-005', brand: 'Johnson & Johnson', supplier: 'Healthcare Plus', stockNumber: 'SN-005', expiryDate: '2027-03-20', office: 'Radiology', stock: 40, transactionCount: 0 }
      ],
      transactions: [
        { date: '2026-06-02', reference: 'Initial Stock', selectedBatch: null, receiptQty: 120, issuanceQty: 0, office: 'All', balance: 120 },
        { date: '2026-06-08', reference: 'MED-002B-004-1', selectedBatch: 'B-004', receiptQty: 0, issuanceQty: 40, office: 'Radiology', balance: 80 }
      ]
    }
  ])

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

  // Generate new SKU
  const generateSKU = () => {
    const maxId = inventoryItems.reduce((max, item) => Math.max(max, item.id), 0)
    return `MED-${String(maxId + 1).padStart(3, '0')}`
  }

  // Calculate total stock for an item across batches
  const getTotalStock = (item) => {
    return item.batches.reduce((sum, batch) => sum + batch.stock, 0)
  }

  // Determine the most urgent status for an item based on batches
  const getItemStatus = (item) => {
    const totalStock = getTotalStock(item)
    const hasExpired = item.batches.some(batch => isExpired(batch.expiryDate))
    const hasNearExpiry = item.batches.some(batch => isNearExpiry(batch.expiryDate))
    const isLowStock = totalStock < item.minStock

    if (hasExpired) return { label: 'Expired', type: 'expired' }
    if (hasNearExpiry) return { label: 'Near Expiry', type: 'near-expiry' }
    if (isLowStock) return { label: 'Low Stock', type: 'low' }
    return { label: 'In Stock', type: 'ok' }
  }

  // Toggle expansion for item batches
  const toggleItemExpansion = (itemId) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  // Filter items based on search and office
  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesOffice = selectedOffice === 'all' || 
      item.batches.some(batch => batch.office === selectedOffice)

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

  const handleAddItem = () => {
    if (!addFormData.hasInitialBatch) {
      alert('Please add an initial batch before saving the item!')
      return
    }
    const newItem = {
      id: inventoryItems.length + 1,
      sku: generateSKU(),
      name: addFormData.name,
      location: addFormData.location,
      unit: addFormData.unit,
      minStock: addFormData.minStock,
      batches: [
        {
          batchId: addFormData.initialBatch.batchId,
          brand: addFormData.initialBatch.brand,
          supplier: addFormData.initialBatch.supplier,
          stockNumber: addFormData.initialBatch.stockNumber,
          office: addFormData.initialBatch.office,
          stock: addFormData.initialBatch.stock,
          expiryDate: addFormData.initialBatch.hasExpiry ? addFormData.initialBatch.expiryDate : null,
          transactionCount: 0
        }
      ],
      transactions: [
        {
          date: new Date().toISOString().split('T')[0],
          reference: 'Initial Stock',
          receiptQty: addFormData.initialBatch.stock,
          issuanceQty: 0,
          office: addFormData.initialBatch.office,
          balance: addFormData.initialBatch.stock
        }
      ]
    }
    setInventoryItems([...inventoryItems, newItem])
    setShowAddModal(false)
    setAddFormData({
      name: '',
      location: '',
      unit: 'pcs',
      minStock: 0,
      hasInitialBatch: false,
      initialBatch: {
        batchId: '',
        brand: '',
        supplier: '',
        stockNumber: '',
        office: 'Hemodialysis',
        stock: 0,
        hasExpiry: false,
        expiryDate: ''
      }
    })
  }

  const handleOpenTransactionModal = (isEdit = false, index = null) => {
    if (isEdit && showMoreInfo && showMoreInfo.transactions && showMoreInfo.transactions[index]) {
      const tx = showMoreInfo.transactions[index]
      setTransactionForm({
        date: tx.date,
        reference: tx.reference,
        selectedBatch: tx.selectedBatch || null,
        receiptQty: tx.receiptQty,
        issuanceQty: tx.issuanceQty,
        office: tx.office,
        balance: tx.balance
      })
    } else {
      setTransactionForm({
        date: new Date().toISOString().split('T')[0],
        reference: '',
        selectedBatch: null,
        receiptQty: 0,
        issuanceQty: 0,
        office: 'Hemodialysis',
        balance: showMoreInfo ? getTotalStock(showMoreInfo) : 0
      })
    }
    setShowTransactionModal({ visible: true, isEdit, index })
  }

  const handleSaveTransaction = () => {
    if (!showMoreInfo) return

    const updatedItems = [...inventoryItems]
    const itemIndex = updatedItems.findIndex(item => item.id === showMoreInfo.id)

    if (itemIndex === -1) return

    const item = { ...updatedItems[itemIndex] }
    let transactions = [...(item.transactions || [])]

    if (showTransactionModal.isEdit && showTransactionModal.index !== null) {
      // Update existing transaction
      transactions[showTransactionModal.index] = { ...transactionForm }
    } else {
      // Add new transaction
      const lastTx = transactions.length > 0 ? transactions[transactions.length - 1] : null
      const newBalance = lastTx
        ? lastTx.balance + transactionForm.receiptQty - transactionForm.issuanceQty
        : transactionForm.receiptQty - transactionForm.issuanceQty

      // Auto-generate reference with incrementing count
      let reference = transactionForm.reference
      let newTransactionCount = null
      if (transactionForm.selectedBatch && showMoreInfo) {
        const batchIndex = item.batches.findIndex(b => b.batchId === transactionForm.selectedBatch)
        if (batchIndex !== -1) {
          const batch = { ...item.batches[batchIndex] }
          newTransactionCount = (batch.transactionCount || 0) + 1
          batch.transactionCount = newTransactionCount
          item.batches = [...item.batches]
          item.batches[batchIndex] = batch

          if (!reference) {
            reference = `${showMoreInfo.sku}${transactionForm.selectedBatch}-${newTransactionCount}`
          }
        }
      }

      transactions.push({
        ...transactionForm,
        reference,
        balance: newBalance
      })
    }

    item.transactions = transactions
    updatedItems[itemIndex] = item
    setInventoryItems(updatedItems)
    setShowMoreInfo(item)
    setShowTransactionModal({ visible: false, isEdit: false, index: null })
  }

  const handleDeleteTransaction = (index) => {
    if (!showMoreInfo || !window.confirm('Are you sure you want to delete this transaction?')) return

    const updatedItems = [...inventoryItems]
    const itemIndex = updatedItems.findIndex(item => item.id === showMoreInfo.id)

    if (itemIndex === -1) return

    const item = { ...updatedItems[itemIndex] }
    let transactions = [...(item.transactions || [])]
    transactions.splice(index, 1)

    // Recalculate balances
    let balance = 0
    transactions = transactions.map((tx, idx) => {
      balance = balance + tx.receiptQty - tx.issuanceQty
      return { ...tx, balance }
    })

    item.transactions = transactions
    updatedItems[itemIndex] = item
    setInventoryItems(updatedItems)
    setShowMoreInfo(item)
  }

  return (
    <div className="inventory">
      <div className="page-header">
        <div>
          <h1 className="page-title">Inventory Management</h1>
          <p className="page-subtitle">Manage and track your medical supplies by batches</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          <Icon src={addItemIcon} alt="Add Item" size={20} />
          Add Item
        </button>
      </div>

      <div className="filters-bar">
        <div className="search-box">
          <span className="search-icon">
            <Icon src={searchIcon} alt="Search" size={20} />
          </span>
          <input
            type="text"
            placeholder="Search items by name or SKU..."
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
                <th style={{width: '40px'}}></th>
                <th>SKU</th>
                <th>Item Name</th>
                <th>Total Stock</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => {
                const totalStock = getTotalStock(item)
                const status = getItemStatus(item)
                const isLowStock = totalStock < item.minStock
                const isExpanded = expandedItems.has(item.id)
                
                return (
                  <React.Fragment key={item.id}>
                    <tr className="item-row" onClick={() => toggleItemExpansion(item.id)}>
                      <td>
                        <span className="expand-icon">
                          <Icon src={isExpanded ? collapseIcon : expandIcon} alt={isExpanded ? "Collapse" : "Expand"} size={20} />
                        </span>
                      </td>
                      <td className="sku">{item.sku}</td>
                      <td>
                        <div className="item-name">{item.name}</div>
                      </td>
                      <td>
                        <div className={`stock-cell ${isLowStock ? 'low' : ''}`}>
                          {totalStock} {item.unit}
                        </div>
                      </td>
                      <td>{item.location}</td>
                      <td>
                        <span className={`status-badge ${status.type}`}>{status.label}</span>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <div className="actions">
                          <button 
                            className="btn-icon" 
                            title="Edit item"
                            onClick={() => setShowEditModal(item)}
                          >
                            <Icon src={editIcon} alt="Edit" size={20} />
                          </button>
                          <button 
                            className="btn-icon" 
                            title="More info"
                            onClick={() => setShowMoreInfo(item)}
                          >
                            <Icon src={stockCardIcon} alt="Stock Card" size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {isExpanded && (
                      <tr className="batches-row">
                        <td colSpan={7}>
                          <div className="batches-container">
                            <table className="batches-table">
                              <thead>
                                <tr>
                                  <th>Batch ID</th>
                                  <th>Brand</th>
                                  <th>Supplier</th>
                                  <th>Stock #</th>
                                  <th>Office</th>
                                  <th>Stock</th>
                                  <th>Expiry Date</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.batches.map((batch, idx) => {
                                  const batchExpired = isExpired(batch.expiryDate)
                                  const batchNearExpiry = isNearExpiry(batch.expiryDate)
                                  let batchStatus = { label: 'OK', type: 'ok' }
                                  
                                  if (batchExpired) {
                                    batchStatus = { label: 'Expired', type: 'expired' }
                                  } else if (batchNearExpiry) {
                                    batchStatus = { label: 'Near Expiry', type: 'near-expiry' }
                                  }

                                  return (
                                    <tr key={idx}>
                                      <td className="batch-id">{batch.batchId}</td>
                                      <td>{batch.brand || '-'}</td>
                                      <td>{batch.supplier || '-'}</td>
                                      <td>{batch.stockNumber || '-'}</td>
                                      <td><span className="office-tag">{batch.office}</span></td>
                                      <td>{batch.stock} {item.unit}</td>
                                      <td className={`expiry-cell ${batchNearExpiry ? 'near' : batchExpired ? 'expired' : ''}`}>
                                        {formatExpiryDate(batch.expiryDate)}
                                      </td>
                                      <td>
                                        <span className={`status-badge ${batchStatus.type}`}>
                                          {batchStatus.label}
                                        </span>
                                      </td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stock Card Modal */}
      {showMoreInfo && (
        <div className="modal-overlay" onClick={() => setShowMoreInfo(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header no-print">
              <h2 className="modal-title">Stock Card: {showMoreInfo.name}</h2>
              <button className="close-btn" onClick={() => setShowMoreInfo(null)}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <div className="modal-body">
              {/* Stock Card Header */}
              <div className="stock-card-header">
                <div className="clinic-info">
                  <h3>Provincial Health Office</h3>
                  <p>Bohol, Province of Bohol - Ambulatory Care Center</p>
                  <p>Tel. No.: (038) 512-3456</p>
                </div>
                <div className="stock-card-info">
                  <div className="stock-card-field">
                    <span className="field-label">Item:</span>
                    <span className="field-value">{showMoreInfo.name}</span>
                  </div>
                  <div className="stock-card-field">
                    <span className="field-label">Stock No.:</span>
                    <span className="field-value">{showMoreInfo.sku}</span>
                  </div>
                  <div className="stock-card-field">
                    <span className="field-label">Reorder Point:</span>
                    <span className="field-value">{showMoreInfo.minStock} {showMoreInfo.unit}</span>
                  </div>
                  <div className="stock-card-field">
                    <span className="field-label">Unit:</span>
                    <span className="field-value">{showMoreInfo.unit}</span>
                  </div>
                </div>
              </div>

              <div className="stock-card-actions no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 className="detail-subtitle" style={{ margin: 0 }}>Transaction Log</h4>
                <button className="btn-primary" onClick={() => handleOpenTransactionModal(false, null)}>
                <Icon src={addTransactionIcon} alt="Add Transaction" size={20} />
                Add Transaction
              </button>
              </div>

              {/* Transaction Table */}
              <div className="stock-card-table-container">
                <table className="stock-card-table">
                  <thead>
                    <tr>
                      <th rowSpan={2}>Date</th>
                      <th rowSpan={2}>Reference</th>
                      <th rowSpan={2}>Receipt<br/>Qty</th>
                      <th colSpan={2} className="table-header-group">Issuance</th>
                      <th rowSpan={2}>Balance<br/>Qty</th>
                      <th rowSpan={2} className="actions-header no-print">Actions</th>
                    </tr>
                    <tr>
                      <th>Qty</th>
                      <th>Office</th>
                    </tr>
                  </thead>
                  <tbody>
                    {showMoreInfo.transactions && showMoreInfo.transactions.map((tx, idx) => (
                      <tr key={idx}>
                        <td>{new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                        <td>{tx.reference}</td>
                        <td className="number-cell">{tx.receiptQty > 0 ? tx.receiptQty : ''}</td>
                        <td className="number-cell">{tx.issuanceQty > 0 ? tx.issuanceQty : ''}</td>
                        <td>{tx.issuanceQty > 0 ? tx.office : ''}</td>
                        <td className="number-cell">{tx.balance}</td>
                        <td className="transaction-actions no-print">
                          <button className="btn-icon" onClick={() => handleOpenTransactionModal(true, idx)} title="Edit">
                            <Icon src={editIcon} alt="Edit" size={20} />
                          </button>
                          <button className="btn-icon" onClick={() => handleDeleteTransaction(idx)} title="Delete">
                            <Icon src={deleteIcon} alt="Delete" size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer no-print">
              <button className="btn-primary" onClick={() => window.print()}>
                <Icon src={printIcon} alt="Print" size={20} />
                Print
              </button>
              <button className="btn-secondary" onClick={() => setShowMoreInfo(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Item</h2>
              <button className="close-btn" onClick={() => setShowEditModal(null)}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label className="form-label">Item Name</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.name} />
                </div>
                <div className="form-group">
                  <label className="form-label">SKU (Auto-generated)</label>
                  <input type="text" className="form-input" defaultValue={showEditModal.sku} disabled />
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
                  <label className="form-label">Batches</label>
                  <div className="batches-edit-container">
                    {showEditModal.batches.map((batch, idx) => (
                      <div key={idx} className="batch-edit-row">
                        <div className="form-group mini">
                          <label className="form-label">Batch ID</label>
                          <input type="text" className="form-input" defaultValue={batch.batchId} />
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Brand</label>
                          <input type="text" className="form-input" defaultValue={batch.brand} />
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Supplier</label>
                          <input type="text" className="form-input" defaultValue={batch.supplier} />
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Stock #</label>
                          <input type="text" className="form-input" defaultValue={batch.stockNumber} />
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Office</label>
                          <select className="form-input" defaultValue={batch.office}>
                            <option value="Hemodialysis">Hemodialysis</option>
                            <option value="Clinical Laboratory">Clinical Laboratory</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Admin Office">Admin Office</option>
                            <option value="Unallocated">Unallocated</option>
                          </select>
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Stock</label>
                          <input type="number" className="form-input" defaultValue={batch.stock} />
                        </div>
                        <div className="form-group mini">
                          <label className="toggle-label">
                            <input type="checkbox" defaultChecked={!!batch.expiryDate} />
                            Has Expiry
                          </label>
                        </div>
                        <div className="form-group mini">
                          <label className="form-label">Expiry Date</label>
                          <input type="date" className="form-input" defaultValue={batch.expiryDate || ''} disabled={!batch.expiryDate} />
                        </div>
                        <button className="btn-icon remove-btn" title="Remove Batch">
                          <Icon src={deleteIcon} alt="Remove" size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary">Add Batch</button>
              <div className="button-group">
                <button className="btn-secondary" onClick={() => setShowEditModal(null)}>Cancel</button>
                <button className="btn-primary" onClick={() => setShowEditModal(null)}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transaction Edit Modal */}
      {showTransactionModal.visible && (
        <div className="modal-overlay" onClick={() => setShowTransactionModal({ visible: false, isEdit: false, index: null })}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {showTransactionModal.isEdit ? 'Edit Transaction' : 'Add Transaction'}
              </h2>
              <button className="close-btn" onClick={() => setShowTransactionModal({ visible: false, isEdit: false, index: null })}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={transactionForm.date}
                    onChange={(e) => setTransactionForm({ ...transactionForm, date: e.target.value })}
                  />
                </div>
                {showMoreInfo && showMoreInfo.batches && showMoreInfo.batches.length > 0 && (
                  <div className="form-group">
                    <label className="form-label">Batch</label>
                    <select
                      className="form-input"
                      value={transactionForm.selectedBatch || ''}
                      onChange={(e) => {
                        const selectedBatch = e.target.value || null
                        let reference = transactionForm.reference
                        if (selectedBatch) {
                          const batch = showMoreInfo.batches.find(b => b.batchId === selectedBatch)
                          const nextCount = (batch?.transactionCount || 0) + 1
                          reference = `${showMoreInfo.sku}${selectedBatch}-${nextCount}`
                        }
                        setTransactionForm({ ...transactionForm, selectedBatch, reference })
                      }}
                    >
                      <option value="">Select a Batch</option>
                      {showMoreInfo.batches.map((batch, idx) => (
                        <option key={idx} value={batch.batchId}>
                          {batch.batchId} - {batch.brand || 'No Brand'} ({batch.stock} {showMoreInfo.unit}) - Issued {batch.transactionCount || 0}x
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="form-group">
                  <label className="form-label">Reference</label>
                  <input
                    type="text"
                    className="form-input"
                    value={transactionForm.reference}
                    onChange={(e) => setTransactionForm({ ...transactionForm, reference: e.target.value })}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group">
                    <label className="form-label">Receipt Qty</label>
                    <input
                      type="number"
                      className="form-input"
                      value={transactionForm.receiptQty}
                      onChange={(e) => setTransactionForm({ ...transactionForm, receiptQty: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Issuance Qty</label>
                    <input
                      type="number"
                      className="form-input"
                      value={transactionForm.issuanceQty}
                      onChange={(e) => setTransactionForm({ ...transactionForm, issuanceQty: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Office</label>
                  <select
                    className="form-input"
                    value={transactionForm.office}
                    onChange={(e) => setTransactionForm({ ...transactionForm, office: e.target.value })}
                  >
                    <option value="Hemodialysis">Hemodialysis</option>
                    <option value="Clinical Laboratory">Clinical Laboratory</option>
                    <option value="Radiology">Radiology</option>
                    <option value="Admin Office">Admin Office</option>
                    <option value="All">All</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowTransactionModal({ visible: false, isEdit: false, index: null })}>
                Cancel
              </button>
              <button className="btn-primary" onClick={handleSaveTransaction}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Add New Item</h2>
              <button className="close-btn" onClick={() => setShowAddModal(false)}>
                <Icon src={closeIcon} alt="Close" size={24} />
              </button>
            </div>
            <div className="modal-body">
              <div className="edit-form">
                <div className="form-group">
                  <label className="form-label">Item Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g., Syringes 5ml"
                    value={addFormData.name}
                    onChange={(e) => setAddFormData({...addFormData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">SKU (Auto-generated)</label>
                  <input type="text" className="form-input" value={generateSKU()} disabled />
                </div>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g., Shelf A-12"
                    value={addFormData.location}
                    onChange={(e) => setAddFormData({...addFormData, location: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Unit</label>
                  <select 
                    className="form-input"
                    value={addFormData.unit}
                    onChange={(e) => setAddFormData({...addFormData, unit: e.target.value})}
                  >
                    <option value="pcs">pcs</option>
                    <option value="packs">packs</option>
                    <option value="boxes">boxes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Minimum Stock Level</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    placeholder="e.g., 50"
                    value={addFormData.minStock}
                    onChange={(e) => setAddFormData({...addFormData, minStock: parseInt(e.target.value) || 0})}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    Initial Batch 
                    <span style={{color: '#dc2626', marginLeft: '4px'}}>* Required</span>
                  </label>
                  <div className="batches-edit-container">
                    <div className="batch-edit-row">
                      <div className="form-group mini">
                        <label className="form-label">Batch ID</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="e.g., B-001"
                          value={addFormData.initialBatch.batchId}
                          onChange={(e) => setAddFormData({
                            ...addFormData, 
                            initialBatch: {...addFormData.initialBatch, batchId: e.target.value},
                            hasInitialBatch: true
                          })}
                        />
                      </div>
                      <div className="form-group mini">
                        <label className="form-label">Brand</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="e.g., BD Medical"
                          value={addFormData.initialBatch.brand}
                          onChange={(e) => setAddFormData({
                            ...addFormData, 
                            initialBatch: {...addFormData.initialBatch, brand: e.target.value},
                            hasInitialBatch: true
                          })}
                        />
                      </div>
                      <div className="form-group mini">
                        <label className="form-label">Supplier</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="Supplier name"
                          value={addFormData.initialBatch.supplier}
                          onChange={(e) => setAddFormData({
                            ...addFormData, 
                            initialBatch: {...addFormData.initialBatch, supplier: e.target.value},
                            hasInitialBatch: true
                          })}
                        />
                      </div>
                      <div className="form-group mini">
                        <label className="form-label">Stock #</label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="Stock number"
                          value={addFormData.initialBatch.stockNumber}
                          onChange={(e) => setAddFormData({
                            ...addFormData, 
                            initialBatch: {...addFormData.initialBatch, stockNumber: e.target.value},
                            hasInitialBatch: true
                          })}
                        />
                      </div>
                      <div className="form-group mini">
                        <label className="form-label">Office</label>
                        <select 
                          className="form-input"
                          value={addFormData.initialBatch.office}
                          onChange={(e) => setAddFormData({
                            ...addFormData, 
                            initialBatch: {...addFormData.initialBatch, office: e.target.value},
                            hasInitialBatch: true
                          })}
                        >
                          <option value="Hemodialysis">Hemodialysis</option>
                          <option value="Clinical Laboratory">Clinical Laboratory</option>
                          <option value="Radiology">Radiology</option>
                          <option value="Admin Office">Admin Office</option>
                          <option value="Unallocated">Unallocated</option>
                        </select>
                      </div>
                      <div className="form-group mini">
                        <label className="form-label">Stock</label>
                        <input 
                          type="number" 
                          className="form-input" 
                          placeholder="0"
                          value={addFormData.initialBatch.stock}
                          onChange={(e) => setAddFormData({
                            ...addFormData, 
                            initialBatch: {...addFormData.initialBatch, stock: parseInt(e.target.value) || 0},
                            hasInitialBatch: true
                          })}
                        />
                      </div>
                      <div className="form-group mini">
                        <label className="toggle-label">
                          <input 
                            type="checkbox" 
                            checked={addFormData.initialBatch.hasExpiry}
                            onChange={(e) => setAddFormData({
                              ...addFormData, 
                              initialBatch: {...addFormData.initialBatch, hasExpiry: e.target.checked},
                              hasInitialBatch: true
                            })}
                          />
                          Has Expiry
                        </label>
                      </div>
                      <div className="form-group mini">
                        <label className="form-label">Expiry Date</label>
                        <input 
                          type="date" 
                          className="form-input" 
                          value={addFormData.initialBatch.expiryDate}
                          onChange={(e) => setAddFormData({
                            ...addFormData, 
                            initialBatch: {...addFormData.initialBatch, expiryDate: e.target.value},
                            hasInitialBatch: true
                          })}
                          disabled={!addFormData.initialBatch.hasExpiry}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="button-group" style={{marginLeft: 'auto'}}>
                <button className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button className="btn-primary" onClick={handleAddItem}>
                  <Icon src={addItemIcon} alt="Add" size={20} />
                  Add Item
                </button>
              </div>
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
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

        .inventory-table .item-row {
          border-bottom: 1px solid #f3f4f6;
          cursor: pointer;
        }

        .inventory-table .item-row:hover {
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

        .office-tag {
          display: inline-block;
          padding: 4px 10px;
          background: #f3f4f6;
          color: #4b5563;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
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

        .expand-icon {
          font-size: 10px;
          color: #6b7280;
        }

        .batches-row {
          background: #f9fafb;
        }

        .batches-container {
          padding: 12px 24px 24px;
        }

        .batches-table {
          width: 100%;
          border-collapse: collapse;
        }

        .batches-table th {
          background: transparent;
          font-size: 11px;
          font-weight: 600;
          color: #6b7280;
          padding: 8px 12px;
          text-align: left;
        }

        .batches-table td {
          padding: 10px 12px;
          font-size: 13px;
        }

        .batches-table tr {
          border-bottom: 1px solid #e5e7eb;
        }

        .batch-id {
          font-family: monospace;
          color: #374151;
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

        /* Print Styles */
        @media print {
          .no-print {
            display: none !important;
          }
          .modal {
            box-shadow: none !important;
            max-width: 100% !important;
            max-height: none !important;
            overflow: visible !important;
          }
          .stock-card-table-container {
            overflow: visible !important;
          }
          .modal-body {
            overflow: visible !important;
            padding: 0 !important;
          }
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

        .modal-large {
          max-width: 1100px;
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
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 20px 24px;
          border-top: 1px solid #f3f4f6;
        }

        .button-group {
          display: flex;
          gap: 12px;
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

        .form-group.mini {
          flex: 1;
          min-width: 0;
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

        /* Stock Card Styles */
        .stock-card-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 24px;
          border: 2px solid #1f2937;
          padding: 20px;
          border-radius: 8px;
        }

        .clinic-info {
          text-align: center;
        }

        .clinic-info h3 {
          margin: 0 0 4px 0;
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }

        .clinic-info p {
          margin: 0;
          font-size: 14px;
          color: #4b5563;
        }

        .stock-card-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .stock-card-field {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .field-label {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
        }

        .field-value {
          font-size: 14px;
          color: #4b5563;
        }

        .stock-card-table-container {
          overflow-x: auto;
        }

        .stock-card-table {
          width: 100%;
          border-collapse: collapse;
        }

        .stock-card-table th,
        .stock-card-table td {
          border: 1px solid #000;
          padding: 10px;
          text-align: left;
        }

        .stock-card-table th {
          background: #f3f4f6;
          font-weight: 700;
          font-size: 12px;
          text-align: center;
        }

        .table-header-group {
          border-left: 1px solid #000;
          background: #e5e7eb;
        }

        .table-header-space {
          width: 40px;
        }

        .transaction-actions {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .actions-header {
          width: 100px;
        }

        .form-input:disabled {
          background: #f3f4f6;
          cursor: not-allowed;
        }

        .batches-edit-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .batch-edit-row {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
          align-items: flex-end;
          flex-wrap: wrap;
        }

        .remove-btn {
          color: #dc2626;
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

          .batch-edit-row {
            flex-direction: column;
            align-items: stretch;
          }

          .form-group.mini {
            width: 100%;
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

          .modal-footer {
            flex-direction: column;
          }

          .button-group {
            width: 100%;
            flex-direction: column;
          }

          .button-group button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default Inventory
