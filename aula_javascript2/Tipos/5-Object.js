let user = {
    name: 'Ney'
};

user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

user.lastName = 'Ney Brito';
Object.assign(user, {fullName: 'Ney Brito'});

const newObj={ foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar='foo';

