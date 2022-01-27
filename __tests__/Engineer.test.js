const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('engineer object', () => {
        it('should create a new employee object', () => {
            const engineer = new Engineer('Jane', 1, 'janedoe@gmail.com');

            expect(typeof(engineer)).toBe('object');
            expect(engineer.name).toBe('Jane');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toBe('janedoe@gmail.com');
        });
    });

    describe('engineer.name', () => {
        it('should set engineer name property', () => {
            const name = 'Jane';
            const engineer = new Engineer(name);
            expect(engineer.name).toBe(name);
        });
    });

    describe('engineer.id', () => {
        it('should set engineer ID property', () => {
            const id = 1;
            const engineer = new Engineer('Jane', id);
            expect(engineer.id).toBe(id)
        });
    });

    describe('engineer.email', () => {
        it('should set engineer email property', () => {
            const email = 'janedoe@gmail.com';
            const engineer = new Engineer('Jane', 1, email);
            expect(engineer.email).toBe(email);
        });
    });

    describe('engineer.github', () => {
        it('should set engineer github property', () => {
            const github = 'janedoe123';
            const engineer = new Engineer('Jane', 1, 'janedoe@gmail.com', github);
            expect(engineer.github).toBe(github);
        });
    });

    describe('getName', () => {
        it('should retrieve engineer name property', () => {
            const name = 'Jane';
            const engineer = new Engineer(name, 1, 'janedoe@gmail.com');
            expect(engineer.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('should retrieve engineer ID property', () => {
            const id = 1;
            const engineer = new Engineer('Jane', id, 'janedoe@gmail.com');
            expect(engineer.getId()).toBe(id);
        });
    });

    describe('getEmail', () => {
        it('should retrieve engineer email', () => {
            const email = 'janedoe@gmail.com';
            const engineer = new Engineer('Jane', 1, email);
            expect(engineer.getEmail()).toBe(email);
        });
    });

    describe('getGithub', () => {
        it('should retrieve engineer github', () => {
            const github = 'janedoe123';
            const engineer = new Engineer('Jane', 1, 'janedoe@gmail.com', github);
            expect(engineer.getGithub()).toBe(github);
        });
    });

    describe('getRole', () => {
        it('should display engineer as the role', () => {
            const engineer = new Engineer();
            expect(engineer.getRole()).toBe('Engineer');
        });
    });
});