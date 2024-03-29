import moment from 'moment'

describe('Test Todo functionalities', function() {
    it('add todo ', function() {
      cy.visit('/')
        cy.get('[data-testid=todo]').should('have.length', 1)
        cy.get('[data-testid=add-todo]').type('asd').blur()
        cy.get('[data-testid=todo]').should('have.length', 2)
        cy.get('[data-testid=add-todo]').type('asd').blur()
        cy.get('[data-testid=todo]').should('have.length', 3)
    })

    it('edit todo ', function() {
        cy.visit('/')
        cy.get('[data-testid=todo]').should('have.length', 1)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 2)
        cy.get('[data-testid=todo-0]').type('test').should('have.value','testtest')

    })

    it('delete todo ', function() {
        cy.visit('/')
        cy.get('[data-testid=todo]').should('have.length', 1)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 2)
        cy.get('[data-testid=todo-0-delete]').click()
        cy.get('[data-testid=todo]').should('have.length', 1)
    })

    it('add due date to todo ', function() {
        cy.visit('/')
        cy.get('[data-testid=todo]').should('have.length', 1)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 2)
        cy.get('[data-testid=todo-0-dueDate]').click()
        cy.get('[data-testid=todo-0-dueDate]').should('have.value', moment().format('YYYY-MM-DD'))
    })
    it('change due date to todo ', function() {
        cy.visit('/')
        cy.get('[data-testid=todo]').should('have.length', 1)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 2)
        cy.get('[data-testid=todo-0-dueDate]').click()
        cy.get('[data-testid=todo-0-dueDate]').should('have.value', moment().format('YYYY-MM-DD'))
        cy.get('[data-testid=todo-0-dueDate]').type('1990-01-01')
        cy.get('[data-testid=todo-0-dueDate]').should('have.value', '1990-01-01')
    })
    it('check that the modal is appeared', function() {
        cy.visit('/')
        cy.get('[data-testid=todo]').should('have.length', 1)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 2)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 3)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 4)
        cy.get('[data-testid=todo-0-complete]').click()
        cy.get('[data-testid=todo-1-complete]').click()
        cy.get('[data-testid=todo-2-complete]').click()
        cy.get('[data-testid=success-modal]').should('exist')
    })
    it('close congratulating modal', function() {
        cy.visit('/')
        cy.get('[data-testid=todo]').should('have.length', 1)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 2)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 3)
        cy.get('[data-testid=add-todo]').type('test').blur()
        cy.get('[data-testid=todo]').should('have.length', 4)
        cy.get('[data-testid=todo-0-complete]').click()
        cy.get('[data-testid=todo-1-complete]').click()
        cy.get('[data-testid=todo-2-complete]').click()
        cy.get('[data-testid=success-modal]').should('exist')
        cy.get('[data-testid=success-modal-close-button]').click()
        cy.get('[data-testid=success-modal]').should('not.exist')

    })
})