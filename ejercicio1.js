const { Etcd3 } = require('etcd3');
const client = new Etcd3();

(async () => {
  const passValue = await client.get('pass').string();
  console.log('Password was:', passValue);

  await client.delete().all();
})();
