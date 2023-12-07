-- init.sql
CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  writer VARCHAR(255) NOT NULL,
  cover_image_url VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  tags VARCHAR(255) ARRAY
);

CREATE TABLE IF NOT EXISTS customers (
  id TEXT,
  name VARCHAR(255) NOT NULL,
  points INT DEFAULT 100
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  customer_id TEXT,
  title TEXT,
  thumbnail TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO books (title, writer, cover_image_url, price, tags) VALUES
  ('The Great Gatsby', 'F. Scott Fitzgerald', 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg', 15, ARRAY['fiction']),
  ('To Kill a Mockingbird', 'Harper Lee', 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg', 12, ARRAY['fiction']),
  ('1984', 'George Orwell', 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg', 20, ARRAY['fiction', 'dystopian']),
  ('Sapiens', 'Yuval Noah Harari', 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg', 25, ARRAY['non-fiction', 'history']);


