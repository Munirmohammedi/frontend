const CoinbasePro = require('coinbase-pro');
const apiKey = 'zUUQyzzjGwDqmRY7';
const apiSecret = 'sjEyP9IBz7Ksh3NbB89kPqzCf3Aks802';
const apiPassphrase = '12345';
const authClient = new CoinbasePro.AuthenticatedClient(apiKey, apiSecret, apiPassphrase);

authClient.getAccounts((err, response, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
