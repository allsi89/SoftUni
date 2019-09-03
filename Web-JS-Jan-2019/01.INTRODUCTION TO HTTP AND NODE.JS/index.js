const storage = require('./storage');

storage.put('pesho', 'gosho');
storage.put('ivan', 'ivanov');
storage.put('gosho', 'peshov');
storage.del('gosho');
storage.load();

console.log(storage.getAll());
