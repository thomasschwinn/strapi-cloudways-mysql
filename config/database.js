module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "192.248.177.247"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "fgujppvqtp"),
      user: env("DATABASE_USERNAME", "fgujppvqtp"),
      password: env("DATABASE_PASSWORD", "MvZ547yBMz"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
