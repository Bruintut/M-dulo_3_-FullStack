module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Acess-Control-Allow-Credentials', value: 'true' },
          { key: 'Acess-Control-Allow-Origin', value: '*' },
          {
            key: 'Acess-Control-Allow-Methods',
            value: 'GET,OPTION,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Acess-Control-Allow-Credentials',
            value: 'X-CSRF-Token, X-Requeested-With,',
          },
        ],
      },
    ];
  },
};
