CREATE DATABASE IF NOT EXISTS vajra_db;

USE vajra_db;

CREATE TABLE IF NOT EXISTS contact_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,

    interest VARCHAR(50) NOT NULL,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL,

    phone VARCHAR(30),

    city VARCHAR(100),

    organisation VARCHAR(150),

    role VARCHAR(100),

    protection VARCHAR(100),

    message TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);