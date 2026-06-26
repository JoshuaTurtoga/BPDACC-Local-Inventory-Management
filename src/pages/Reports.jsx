import React, { useState } from 'react'

const Reports = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7))
  const [selectedOffice, setSelectedOffice] = useState('all')

  const reportData = [
    { item: 'Syringes 5ml', beginning: 500, received: 200, issued: 250, ending: 450, unit: 'pcs' },
    { item: 'Gauze Pads (4x4)', beginning: 150, received: 50, issued: 80, ending: 120, unit: 'packs' },
    { item: 'Alcohol Swabs', beginning: 100, received: 0, issued: 65, ending: 35, unit: 'boxes' },
    { item: 'Bandages (Assorted)', beginning: 300, received: 100, issued: 200, ending: 200, unit: 'boxes' },
    { item: 'Needles 21G', beginning: 600, received: 300, issued: 400, ending: 500, unit: 'pcs' },
  ]

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const [year, month] = selectedMonth.split('-')
  const monthName = monthNames[parseInt(month) - 1]

  const handlePrint = () => {
    window.print()
  }

  const totalBeginning = reportData.reduce((sum, item) => sum + item.beginning, 0)
  const totalReceived = reportData.reduce((sum, item) => sum + item.received, 0)
  const totalIssued = reportData.reduce((sum, item) => sum + item.issued, 0)
  const totalEnding = reportData.reduce((sum, item) => sum + item.ending, 0)

  return (
    <div className="reports">
      <div className="screen-view no-print">
        <div className="page-header">
          <div>
            <h1 className="page-title">Monthly Inventory Reports</h1>
            <p className="page-subtitle">Generate and print monthly issuance reports</p>
          </div>
          <div className="header-actions">
            <button className="btn-primary" onClick={handlePrint}>🖨️ Print Report</button>
          </div>
        </div>

        <div className="filters-bar">
          <div className="filter-group">
            <label>Month</label>
            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="filter-group">
            <label>Office</label>
            <select
              value={selectedOffice}
              onChange={(e) => setSelectedOffice(e.target.value)}
              className="form-input"
            >
              <option value="all">All Offices</option>
              <option value="hemodialysis">Hemodialysis</option>
              <option value="clinical-laboratory">Clinical Laboratory</option>
              <option value="radiology">Radiology</option>
              <option value="admin-office">Admin Office</option>
            </select>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#dbeafe', color: '#1e40af' }}>📦</div>
            <div>
              <div className="stat-value">{totalBeginning.toLocaleString()}</div>
              <div className="stat-label">Beginning Stock</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#dcfce7', color: '#166534' }}>⬆️</div>
            <div>
              <div className="stat-value">{totalReceived.toLocaleString()}</div>
              <div className="stat-label">Received</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#fee2e2', color: '#991b1b' }}>⬇️</div>
            <div>
              <div className="stat-value">{totalIssued.toLocaleString()}</div>
              <div className="stat-label">Issued</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#e0e7ff', color: '#3730a3' }}>📊</div>
            <div>
              <div className="stat-value">{totalEnding.toLocaleString()}</div>
              <div className="stat-label">Ending Stock</div>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Stock Movement Overview</h2>
            </div>
            <div className="chart-placeholder">
              {reportData.map((item, index) => (
                <div key={index} className="chart-bar">
                  <div className="chart-label" style={{ width: '150px' }}>{item.item}</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar-fill" style={{ width: `${(item.beginning / 600) * 100}%`, background: '#3b82f6' }}></div>
                  </div>
                  <div className="chart-value">{item.beginning}</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar-fill" style={{ width: `${(item.received / 300) * 100}%`, background: '#10b981' }}></div>
                  </div>
                  <div className="chart-value">{item.received}</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar-fill" style={{ width: `${(item.issued / 400) * 100}%`, background: '#f59e0b' }}></div>
                  </div>
                  <div className="chart-value">{item.issued}</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar-fill" style={{ width: `${(item.ending / 500) * 100}%`, background: '#8b5cf6' }}></div>
                  </div>
                  <div className="chart-value">{item.ending}</div>
                </div>
              ))}
              <div className="chart-legend">
                <div className="legend-item"><span className="legend-color" style={{ background: '#3b82f6' }}></span> Beginning</div>
                <div className="legend-item"><span className="legend-color" style={{ background: '#10b981' }}></span> Received</div>
                <div className="legend-item"><span className="legend-color" style={{ background: '#f59e0b' }}></span> Issued</div>
                <div className="legend-item"><span className="legend-color" style={{ background: '#8b5cf6' }}></span> Ending</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Issuance Distribution</h2>
            </div>
            <div className="pie-chart-placeholder">
              <div className="pie-legend">
                {reportData.map((item, index) => (
                  <div key={index} className="legend-item">
                    <span className="legend-color" style={{ background: `hsl(${index * 60}, 70%, 50%)` }}></span>
                    {item.item}
                    <span className="legend-percentage">{Math.round((item.issued / totalIssued) * 100)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Detailed Report Data</h2>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Item Description</th>
                  <th style={{ width: '10%' }}>Unit</th>
                  <th style={{ width: '15%' }}>Beginning</th>
                  <th style={{ width: '15%' }}>Received</th>
                  <th style={{ width: '15%' }}>Issued</th>
                  <th style={{ width: '15%' }}>Ending Balance</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.item}</td>
                    <td>{item.unit}</td>
                    <td className="number-cell">{item.beginning.toLocaleString()}</td>
                    <td className="number-cell">{item.received.toLocaleString()}</td>
                    <td className="number-cell">{item.issued.toLocaleString()}</td>
                    <td className="number-cell">{item.ending.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="total-label">TOTAL</td>
                  <td className="number-cell total-value">{totalBeginning.toLocaleString()}</td>
                  <td className="number-cell total-value">{totalReceived.toLocaleString()}</td>
                  <td className="number-cell total-value">{totalIssued.toLocaleString()}</td>
                  <td className="number-cell total-value">{totalEnding.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <div className="print-view">
        <div className="print-container">
          <div className="report">
            <div className="report-header">
              <div className="report-header-top">
                <div className="clinic-logo">🏥</div>
                <div className="clinic-info">
                  <h2>BPDACC Inventory Management</h2>
                  <p>MONTHLY INVENTORY ISSUANCE REPORT</p>
                </div>
              </div>
              <div className="report-period">
                For the Month of <span className="period-highlight">{monthName} {year}</span>
              </div>
            </div>

            <table className="report-table">
              <thead>
                <tr>
                  <th rowSpan="2" style={{ width: '30%' }}>Item Description</th>
                  <th rowSpan="2" style={{ width: '10%' }}>Unit</th>
                  <th colSpan="3" style={{ borderBottom: '1px solid #000' }}>Stock Movement</th>
                  <th rowSpan="2" style={{ width: '15%' }}>Ending Balance</th>
                </tr>
                <tr>
                  <th style={{ width: '15%' }}>Beginning</th>
                  <th style={{ width: '15%' }}>Received</th>
                  <th style={{ width: '15%' }}>Issued</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.item}</td>
                    <td>{item.unit}</td>
                    <td className="number-cell">{item.beginning.toLocaleString()}</td>
                    <td className="number-cell">{item.received.toLocaleString()}</td>
                    <td className="number-cell">{item.issued.toLocaleString()}</td>
                    <td className="number-cell">{item.ending.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="total-label">TOTAL</td>
                  <td className="number-cell total-value">{totalBeginning.toLocaleString()}</td>
                  <td className="number-cell total-value">{totalReceived.toLocaleString()}</td>
                  <td className="number-cell total-value">{totalIssued.toLocaleString()}</td>
                  <td className="number-cell total-value">{totalEnding.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>

            <div className="report-signatures">
              <div className="signature-block">
                <div className="signature-line"></div>
                <div className="signature-label">Prepared By</div>
                <div className="signature-sub">Signature over Printed Name</div>
              </div>
              <div className="signature-block">
                <div className="signature-line"></div>
                <div className="signature-label">Checked By</div>
                <div className="signature-sub">Signature over Printed Name</div>
              </div>
              <div className="signature-block">
                <div className="signature-line"></div>
                <div className="signature-label">Approved By</div>
                <div className="signature-sub">Signature over Printed Name</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reports {
          padding: 0;
        }

        .screen-view {
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

        .header-actions {
          display: flex;
          gap: 12px;
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
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .filter-group label {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
        }

        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          background: white;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .chart-placeholder {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .chart-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .chart-label {
          font-size: 14px;
          color: #4b5563;
          flex-shrink: 0;
        }

        .chart-bar-container {
          flex: 1;
          min-width: 60px;
          height: 32px;
          background: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
        }

        .chart-bar-fill {
          height: 100%;
          border-radius: 4px;
        }

        .chart-value {
          width: 50px;
          text-align: right;
          font-weight: 600;
          color: #1f2937;
          flex-shrink: 0;
        }

        .chart-legend {
          display: flex;
          gap: 20px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #f3f4f6;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #4b5563;
        }

        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
        }

        .legend-percentage {
          font-weight: 600;
          margin-left: auto;
        }

        .pie-chart-placeholder {
          min-height: 200px;
        }

        .pie-legend {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .table-container {
          overflow-x: auto;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .data-table th,
        .data-table td {
          border: 1px solid #e5e7eb;
          padding: 12px;
          text-align: left;
        }

        .data-table th {
          background: #f9fafb;
          font-weight: 600;
          font-size: 13px;
          color: #4b5563;
        }

        .data-table tfoot td {
          background: #f3f4f6;
          font-weight: 600;
        }

        .number-cell {
          text-align: right;
        }

        .total-label {
          text-align: right;
        }

        .total-value {
          font-size: 15px;
        }

        .print-view {
          display: none;
        }

        .print-container {
          background: white;
          padding: 40px;
        }

        .report {
          max-width: 950px;
          margin: 0 auto;
        }

        .report-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .report-header-top {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .clinic-logo {
          font-size: 48px;
        }

        .clinic-info h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 4px;
        }

        .clinic-info p {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }

        .report-period {
          font-size: 16px;
          color: #4b5563;
        }

        .period-highlight {
          font-weight: 700;
          color: #1f2937;
          font-size: 18px;
        }

        .report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 40px;
        }

        .report-table th,
        .report-table td {
          border: 1px solid #000;
          padding: 12px;
          text-align: left;
        }

        .report-table th {
          background: #f9fafb;
          font-weight: 600;
          font-size: 13px;
          color: #4b5563;
        }

        .report-table tfoot td {
          background: #f9fafb;
          font-weight: 600;
        }

        .report-signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .signature-block {
          text-align: center;
        }

        .signature-line {
          border-bottom: 1px solid #000;
          margin-bottom: 8px;
          margin-top: 40px;
        }

        .signature-label {
          font-size: 13px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .signature-sub {
          font-size: 11px;
          color: #6b7280;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .chart-bar {
            flex-wrap: wrap;
          }

          .chart-label {
            width: 100%;
            margin-bottom: 8px;
          }

          .report-signatures {
            grid-template-columns: repeat(2, 1fr);
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
            flex-direction: column;
          }

          .form-input {
            width: 100%;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 20px;
          }

          .stat-icon {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .stat-value {
            font-size: 24px;
          }

          .chart-bar {
            gap: 8px;
          }

          .chart-bar-container {
            min-width: 40px;
          }

          .chart-value {
            width: 40px;
          }

          .chart-legend {
            flex-direction: column;
          }

          .report-signatures {
            grid-template-columns: 1fr;
          }
        }

        @media print {
          .no-print {
            display: none !important;
          }

          .print-view {
            display: block !important;
          }

          .print-container {
            box-shadow: none;
            padding: 20px;
          }

          body {
            background: white;
          }
        }
      `}</style>
    </div>
  )
}

export default Reports
