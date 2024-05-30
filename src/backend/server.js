const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Para permitir peticiones desde tu aplicación Angular

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Usa CORS para permitir peticiones desde otros orígenes

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Lógica de autenticación simple
    if (email === 'test@example.com' && password === 'password123') {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
