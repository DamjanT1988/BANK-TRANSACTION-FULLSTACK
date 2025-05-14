
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const transactions = new Map();
const accounts = new Map();

app.get('/ping', (req, res) => {
    res.status(200).send('Service is up and running.');
});

app.post('/transactions', (req, res) => {
    const { account_id, amount } = req.body;
    if (!account_id || typeof amount !== 'number') {
        return res.status(400).json({ error: 'Invalid request body' });
    }
    const transaction_id = uuidv4();
    const created_at = new Date().toISOString();
    transactions.set(transaction_id, { transaction_id, account_id, amount, created_at });

    if (accounts.has(account_id)) {
        const currentBalance = accounts.get(account_id);
        accounts.set(account_id, currentBalance + amount);
    } else {
        accounts.set(account_id, amount);
    }

    res.status(201).json({ transaction_id, account_id, amount, created_at });
});

app.get('/transactions', (req, res) => {
    res.status(200).json(Array.from(transactions.values()));
});

app.get('/transactions/:transaction_id', (req, res) => {
    const transaction = transactions.get(req.params.transaction_id);
    if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json(transaction);
});

app.get('/accounts/:account_id', (req, res) => {
    const balance = accounts.get(req.params.account_id);
    if (balance === undefined) {
        return res.status(404).json({ error: 'Account not found' });
    }
    res.status(200).json({ account_id: req.params.account_id, balance });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
