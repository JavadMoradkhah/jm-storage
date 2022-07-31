const Storage = require('../index.js');

const storage = new Storage('./storage.json');

describe('setItem', () => {
  it('should save the given key-value pair', () => {
    const payload = {
      name: 'Javad Moradkhah',
      email: 'javadmoradkhah.dev@gmail.com',
    };

    storage.setItem('user', payload);

    const user = storage.getItem('user');

    expect(user).toMatchObject(payload);
  });
});

describe('getItem', () => {
  it('should return saved key-value pair', () => {
    const payload = {
      name: 'Javad Moradkhah',
      email: 'javadmoradkhah.dev@gmail.com',
    };

    const user = storage.getItem('user');

    expect(user).toMatchObject(payload);
  });

  it('should return the specified default value if an invalid key is passed', () => {
    const payload = {
      username: 'javadmoradkhah',
      email: 'javadmoradkhah.dev@gmail.com',
    };

    const githubProfile = storage.getItem('githubProfile', payload);

    expect(githubProfile).toMatchObject(payload);
  });

  it('should return null if an invalid key is passed', () => {
    const githubProfile = storage.getItem('githubProfile');

    expect(githubProfile).toBeNull();
  });
});

describe('getAll', () => {
  it('should return the whole saved object', () => {
    const payload = {
      user: {
        name: 'Javad Moradkhah',
        email: 'javadmoradkhah.dev@gmail.com',
      },
    };

    const result = storage.getAll();

    expect(result).toMatchObject(payload);
  });

  it('should return an empty object if storage is empty', () => {
    const storage = new Storage('./storage2.json');
    const result = storage.getAll();
    expect(result).toEqual({});
  });
});

describe('removeItem', () => {
  it('should remove the given key-value pair', () => {
    const payload = {
      username: 'javadmoradkhah',
      email: 'javadmoradkhah.dev@gmail.com',
    };

    storage.setItem('githubProfile', payload);

    storage.removeItem('githubProfile');

    const githubProfile = storage.getItem('githubProfile');

    expect(githubProfile).toBeNull();
  });
});

describe('clear', () => {
  it('should clear the whole storage', () => {
    storage.clear();

    const result = storage.getAll();

    expect(result).toEqual({});
  });
});
