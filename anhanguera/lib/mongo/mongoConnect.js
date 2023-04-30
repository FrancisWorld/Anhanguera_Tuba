// lib/mongoConnect.js

import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useUnifiedTopology: true });

export async function connectToDatabase() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  return client;
}

export async function findOrCreateUser(email, password) {
  const client = await connectToDatabase();
  const db = client.db();
  const usersCollection = db.collection('usuarios');

  const user = await usersCollection.findOne({ email });

  if (!user) {
    const newUser = {
      email,
      password, // Você deve armazenar a senha como um hash, não em texto simples.
    };

    await usersCollection.insertOne(newUser);
    console.log('Usuário criado com sucesso:', newUser); // Adicione esta linha para depurar
    return newUser;
  }

  console.log('Usuário encontrado:', user); // Adicione esta linha para depurar
  return user;
}

export async function verifyUser(email, password) {
  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db.collection('usuarios').findOne({ email });

  if (!existingUser) {
    return null;
  }

  // Você pode usar a biblioteca bcrypt para comparar senhas criptografadas
  // const passwordsMatch = await bcrypt.compare(password, existingUser.password);
  // if (!passwordsMatch) {
  //   return null;
  // }

  // Para fins de demonstração, estamos comparando as senhas diretamente
  if (existingUser.password !== password) {
    return null;
  }

  return existingUser;
}

export async function loginUser(email, password) {
  const user = await verifyUser(email, password);
  if (!user) {
    return null;
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET); // verifique se JWT_SECRET está definido e correto

  console.log('Token gerado:', token); // Adicione esta linha para depurar

  return token;
}
