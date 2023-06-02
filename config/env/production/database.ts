module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-7.railway.app'),
      port: env.int('PGPORT', 7278),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD'),
      ssl: env.bool(true),
    },
  },
});
