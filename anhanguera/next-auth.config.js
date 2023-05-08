module.exports = {
    auth: {
      strategies: ['password'],
      loginPath: '/login',
      logoutPath: '/logout',
      secret: 'your-secret-key',
      session: {
        name: 'user',
        saveToCookies: true,
      },
    },
    database: {
      uri: 'mongodb://localhost:27017/nextDB',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };
  