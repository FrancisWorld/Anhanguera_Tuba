// pages/auth/login.js

import { loginUser } from '../../../lib/mongo/mongoConnect';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const token = await loginUser(email, password);

      if (token) {
        console.log('Usuário autenticado com sucesso. Token gerado:', token);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Credenciais inválidas!' });
      }
    } catch (e) {
      console.error('Erro ao autenticar usuário:', e);
      res.status(500).json({ message: 'Erro ao autenticar usuário:' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido!' });
  }
}
