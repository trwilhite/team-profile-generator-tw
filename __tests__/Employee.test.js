const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('employee object', () => {
        it('should create a new employee object', () => {
            const employee = new Employee('Jane', 1, 'janedoe@gmail.com');

            expect(typeof(employee)).toBe('object');
            expect(employee.name).toBe('Jane');
            expect(employee.id).toEqual(1);
            expect(employee.email).toBe('janedoe@gmail.com');
        });
    });

    describe('employee name', () => {
        it('should set name property', () => {
            const name = 'Jane';
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        });
    });

    describe('employee ID', () => {
        it('should set employee ID property', () => {
            const id = 1;
            const employee = new Employee('Jane', id);
            expect(employee.id).toBe(id)
        });
    });

    describe('employee email', () => {
        it('should set employee email property', () => {
            const email = 'janedoe@gmail.com';
            const employee = new Employee('Jane', 1, email);
            expect(employee.email).toBe(email);
        });
    });

    describe('get employee name', () => {
        it('should retrieve employee name property', () => {
            const name = 'Jane';
            const employee = new Employee(name, 1, 'janedoe@gmail.com');
            expect(employee.getName()).toBe(name);
        });
    });

    describe('get employee id', () => {
        it('should retrieve employee ID property', () => {
            const id = 1;
            const employee = new Employee('Jane', id, 'janedoe@gmail.com');
            expect(employee.getId()).toBe(id);
        });
    });

    describe('get employee email', () => {
        it('should retrieve employee email', () => {
            const email = 'janedoe@gmail.com';
            const employee = new Employee('Jane', 1, email);
            expect(employee.getEmail()).toBe(email);
        });
    });

    describe('get employee role', () => {
        it('should display employee as the role', () => {
            const employee = new Employee();
            expect(employee.getRole()).toBe('Employee');
        });
    });
});