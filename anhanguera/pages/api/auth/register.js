// pages/api/auth/register.js
import { findOrCreateUser } from '../../../lib/mongo/mongoConnect';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      console.log('Iniciando processo de criação de usuário...');
      const newUser = await findOrCreateUser(email, password);

      if (newUser) {
        console.log('Usuário criado:', newUser);
        // Adicione a lógica de autenticação (como gerar e retornar um JWT)
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
      } else {
        console.log('Não foi possível criar o usuário.');
        res.status(400).json({ message: 'Não foi possível criar o usuário!' });
      }
    } catch (e) {
      console.error('Erro ao criar usuário:', e);
      res.status(500).json({ message: 'Erro ao criar usuário:' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido!' });
  }
}
