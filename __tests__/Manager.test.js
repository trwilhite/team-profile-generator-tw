const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('manager object', () => {
        it('should create a new manager object', () => {
            const manager = new Manager('Jane', 1, 'janedoe@gmail.com');

            expect(typeof(manager)).toBe('object');
            expect(manager.name).toBe('Jane');
            expect(manager.id).toEqual(1);
            expect(manager.email).toBe('janedoe@gmail.com');
        });
    });

    describe('manager.name', () => {
        it('should set manager name property', () => {
            const name = 'Jane';
            const manager = new Manager(name);
            expect(manager.name).toBe(name);
        });
    });

    describe('manager.id', () => {
        it('should set manager ID property', () => {
            const id = 1;
            const manager = new Manager('Jane', id);
            expect(manager.id).toBe(id)
        });
    });

    describe('manager.email', () => {
        it('should set manager email property', () => {
            const email = 'janedoe@gmail.com';
            const manager = new Manager('Jane', 1, email);
            expect(manager.email).toBe(email);
        });
    });

    describe('manager.officeNumber', () => {
        it('should set manager office number property', () => {
            const officeNumber = 1;
            const manager = new Manager('Jane', 1, 'janedoe@gmail.com', officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });

    describe('getName', () => {
        it('should retrieve manager name property', () => {
            const name = 'Jane';
            const manager = new Manager(name, 1, 'janedoe@gmail.com');
            expect(manager.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('should retrieve manager ID property', () => {
            const id = 1;
            const manager = new Manager('Jane', id, 'janedoe@gmail.com');
            expect(manager.getId()).toBe(id);
        });
    });

    describe('getEmail', () => {
        it('should retrieve manager email', () => {
            const email = 'janedoe@gmail.com';
            const manager = new Manager('Jane', 1, email);
            expect(manager.getEmail()).toBe(email);
        });
    });

    describe('getOfficeNumber', () => {
        it('should retrieve manager office number', () => {
            const officeNumber = 1;
            const manager = new Manager('Jane', 1, 'janedoe@gmail.com', officeNumber);
            expect(manager.getOfficeNumber()).toBe(officeNumber);
        });
    });

    describe('getRole', () => {
        it('should display manager as the role', () => {
            const manager = new Manager();
            expect(manager.getRole()).toBe('Manager');
        });
    });
});