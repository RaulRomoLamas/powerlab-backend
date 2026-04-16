CREATE DATABASE carbono_powerlab_db;
USE carbono_powerlab_db;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    categoria VARCHAR(100),
    marca VARCHAR(100),
    precio DECIMAL(10,2),
    stock INT,
    imagen VARCHAR(255),
    descripcion TEXT,
    disponible BOOLEAN
);

CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(150),
    asunto VARCHAR(150),
    mensaje TEXT
);

INSERT INTO productos (nombre, categoria, marca, precio, stock, imagen, descripcion, disponible)
VALUES
('Proteina Whey Gold Standard', 'Suplementos', 'Optimum Nutrition', 1250.00, 20, 'img/whey-gold.jpg', 'Proteina whey de rapida absorcion para recuperacion muscular.', true),
('Creatina Monohidratada', 'Suplementos', 'Universal Nutrition', 450.00, 35, 'img/creatina-monohidratada.jpg', 'Creatina pura micronizada para fuerza y rendimiento.', true),
('Pre Workout C4', 'Pre-entreno', 'Cellucor', 680.00, 18, 'img/preworkout-c4.jpg', 'Pre entreno con cafeina para energia y enfoque.', true),
('BCAA 2:1:1', 'Aminoacidos', 'Scivation', 520.00, 22, 'img/bcaa-211.jpg', 'Aminoacidos ramificados para apoyo en recuperacion.', true),
('Shaker Deportivo 700ml', 'Accesorios', 'SmartShake', 180.00, 40, 'img/shaker-700.jpg', 'Shaker resistente con compartimento para suplemento.', true),
('Guantes para Gym Pro Grip', 'Accesorios', 'Harbinger', 320.00, 25, 'img/guantes-gym.jpg', 'Guantes con soporte de muneca y agarre antideslizante.', true),
('Cinturon de Levantamiento', 'Accesorios', 'RDX', 790.00, 12, 'img/cinturon-levantamiento.jpg', 'Cinturon de cuero para soporte lumbar en cargas pesadas.', true),
('Proteina Vegana Plant Power', 'Suplementos', 'MyProtein', 980.00, 16, 'img/proteina-vegana.jpg', 'Proteina vegetal blend sin lactosa ni gluten.', true),
('Multivitaminico Daily Fit', 'Vitaminas', 'GNC', 390.00, 30, 'img/multivitaminico.jpg', 'Complejo multivitaminico para soporte general diario.', true),
('Termogenico Extreme Burn', 'Control de peso', 'Muscletech', 610.00, 14, 'img/termogenico.jpg', 'Termogenico para apoyo en quema de grasa y energia.', true);
