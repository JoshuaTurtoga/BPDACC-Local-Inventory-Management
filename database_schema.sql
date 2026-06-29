-- BPDACC Inventory Database Schema
-- Run this in pgAdmin to create tables

CREATE TABLE IF NOT EXISTS offices (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    sku VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(100),
    location VARCHAR(100),
    min_stock INTEGER DEFAULT 0,
    unit VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS batches (
    id SERIAL PRIMARY KEY,
    item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
    batch_id VARCHAR(50) NOT NULL,
    expiry_date DATE,
    office_id INTEGER REFERENCES offices(id),
    stock INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(50) NOT NULL,
    office_id INTEGER REFERENCES offices(id),
    status VARCHAR(20) DEFAULT 'Active'
);

CREATE TABLE IF NOT EXISTS requisitions (
    id SERIAL PRIMARY KEY,
    requisition_number VARCHAR(50) NOT NULL UNIQUE,
    office_id INTEGER REFERENCES offices(id),
    purpose TEXT,
    requested_by INTEGER REFERENCES users(id),
    approved_by INTEGER REFERENCES users(id),
    issued_by INTEGER REFERENCES users(id),
    received_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default offices
INSERT INTO offices (name, description) VALUES
('Hemodialysis', 'Dialysis Unit'),
('Clinical Laboratory', 'Lab Testing'),
('Radiology', 'Imaging Department'),
('Admin Office', 'Administration'),
('Unallocated', 'Unassigned Stock')
ON CONFLICT DO NOTHING;
