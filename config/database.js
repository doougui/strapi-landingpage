module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'reactavancado_strapi'),
      user: env('DATABASE_USERNAME', 'reactavancado_strapi'),
      password: env('DATABASE_PASSWORD', 'douglas2002'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
