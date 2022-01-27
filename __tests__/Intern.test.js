const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('intern object', () => {
        it('should create a new employee object', () => {
            const intern = new Intern('Jane', 1, 'janedoe@gmail.com');

            expect(typeof(intern)).toBe('object');
            expect(intern.name).toBe('Jane');
            expect(intern.id).toEqual(1);
            expect(intern.email).toBe('janedoe@gmail.com');
        });
    });

    describe('intern.name', () => {
        it('should set intern name property', () => {
            const name = 'Jane';
            const intern = new Intern(name);
            expect(intern.name).toBe(name);
        });
    });

    describe('intern.id', () => {
        it('should set employee ID property', () => {
            const id = 1;
            const intern = new Intern('Jane', id);
            expect(intern.id).toBe(id)
        });
    });

    describe('intern.email', () => {
        it('should set intern email property', () => {
            const email = 'janedoe@gmail.com';
            const intern = new Intern('Jane', 1, email);
            expect(intern.email).toBe(email);
        });
    });

    describe('intern.school', () => {
        it('should set intern school property', () => {
            const school = 'university';
            const intern = new Intern ('Jane', 1, 'janedoe@gmail.com', school);
            expect(intern.school).toBe(school);
        });
    });

    describe('getName', () => {
        it('should retrieve intern name property', () => {
            const name = 'Jane';
            const intern = new Intern(name, 1, 'janedoe@gmail.com');
            expect(intern.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('should retrieve intern ID property', () => {
            const id = 1;
            const intern = new Intern('Jane', id, 'janedoe@gmail.com');
            expect(intern.getId()).toBe(id);
        });
    });

    describe('getEmail', () => {
        it('should retrieve intern email', () => {
            const email = 'janedoe@gmail.com';
            const intern = new Intern('Jane', 1, email);
            expect(intern.getEmail()).toBe(email);
        });
    });

    describe('getSchool', () => {
        it('should retrieve intern school', () => {
            const school = 'university';
            const intern = new Intern('Jane', 1, 'janedoe@gmail.com', school);
            expect(intern.getSchool()).toBe(school);
        });
    });

    describe('getRole', () => {
        it('should display intern as the role', () => {
            const intern = new Intern();
            expect(intern.getRole()).toBe('Intern');
        });
    });
});