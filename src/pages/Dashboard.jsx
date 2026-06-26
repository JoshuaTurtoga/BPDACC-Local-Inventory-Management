import React from 'react'

const Dashboard = () => {
  const stats = [
    { label: 'Total Items', value: '1,247', icon: '�', color: '#3b82f6' },
    { label: 'Low Stock', value: '23', icon: '⚠️', color: '#f59e0b' },
    { label: 'Pending Requisitions', value: '8', icon: '📝', color: '#ef4444' },
    { label: 'Issued Today', value: '45', icon: '✅', color: '#10b981' },
  ]

  const recentActivity = [
    { id: 1, item: 'Syringes 5ml', office: 'Hemodialysis', action: 'Issued', time: '2 hours ago' },
    { id: 2, item: 'Gauze Pads', office: 'Clinical Laboratory', action: 'Requisitioned', time: '3 hours ago' },
    { id: 3, item: 'Alcohol Swabs', office: 'Radiology', action: 'Restocked', time: '5 hours ago' },
    { id: 4, item: 'Bandages', office: 'Admin Office', action: 'Issued', time: '6 hours ago' },
  ]

  return (
    <div className="dashboard">
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back! Here's what's happening.</p>
        </div>
        <div className="header-actions">
          <select className="select-input">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <select className="select-input">
            <option>All Offices</option>
            <option>Hemodialysis</option>
            <option>Clinical Laboratory</option>
            <option>Radiology</option>
            <option>Admin Office</option>
          </select>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Recent Activity</h2>
            <a href="#" className="card-link">View All</a>
          </div>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  {activity.action === 'Issued' && '📤'}
                  {activity.action === 'Requisitioned' && '📥'}
                  {activity.action === 'Restocked' && '📦'}
                </div>
                <div className="activity-details">
                  <div className="activity-item-name">{activity.item}</div>
                  <div className="activity-meta">
                    <span className="facility-tag">{activity.office}</span>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
                <span className={`activity-status ${activity.action.toLowerCase()}`}>
                  {activity.action}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Inventory Overview</h2>
          </div>
          <div className="chart-placeholder">
            <div className="chart-bar">
              <div className="chart-label">Hemodialysis</div>
              <div className="chart-bar-fill" style={{ width: '85%', background: '#3b82f6' }}></div>
              <div className="chart-value">85%</div>
            </div>
            <div className="chart-bar">
              <div className="chart-label">Clinical Laboratory</div>
              <div className="chart-bar-fill" style={{ width: '70%', background: '#10b981' }}></div>
              <div className="chart-value">70%</div>
            </div>
            <div className="chart-bar">
              <div className="chart-label">Radiology</div>
              <div className="chart-bar-fill" style={{ width: '60%', background: '#f59e0b' }}></div>
              <div className="chart-value">60%</div>
            </div>
            <div className="chart-bar">
              <div className="chart-label">Admin Office</div>
              <div className="chart-bar-fill" style={{ width: '50%', background: '#8b5cf6' }}></div>
              <div className="chart-value">50%</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
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
          flex-wrap: wrap;
        }

        .select-input {
          padding: 10px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
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

        .card-link {
          font-size: 14px;
          color: #3b82f6;
          text-decoration: none;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          background: #f9fafb;
        }

        .activity-icon {
          font-size: 24px;
        }

        .activity-details {
          flex: 1;
          min-width: 0;
        }

        .activity-item-name {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .activity-meta {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }

        .facility-tag {
          font-size: 12px;
          padding: 4px 10px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          white-space: nowrap;
        }

        .activity-time {
          font-size: 12px;
          color: #9ca3af;
        }

        .activity-status {
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .activity-status.issued {
          background: #dcfce7;
          color: #166534;
        }

        .activity-status.requisitioned {
          background: #fef3c7;
          color: #92400e;
        }

        .activity-status.restocked {
          background: #dbeafe;
          color: #1e40af;
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
        }

        .chart-label {
          width: 140px;
          font-size: 14px;
          color: #4b5563;
          flex-shrink: 0;
        }

        .chart-bar-container {
          flex: 1;
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

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .header-actions {
            width: 100%;
          }

          .select-input {
            flex: 1;
          }

          .page-title {
            font-size: 24px;
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

          .chart-label {
            width: 100px;
            font-size: 12px;
          }

          .activity-item {
            flex-wrap: wrap;
          }

          .activity-status {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}

export default Dashboard
