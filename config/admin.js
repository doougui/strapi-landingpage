module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3f8c827bd876e38a30971291ff0fc9bb'),
  },
});
