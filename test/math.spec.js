
const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

let value = 0
describe('Math class', function() {
    beforeEach(function () {
        value = 0
    })
    it('Sum two numeros', function(done){
        const math = new Math()
        value = 5

        this.timeout(3000)
        math.sum(value, 5, value => {
            expect(value).to.equal(10)
            done()
        })
              
    })

    it('multiply two numeros', function(){
        const math = new Math()
        const obj = {
            name: 'doug'
        }
        expect(obj).to.have.property('name').equal('doug')
          })
        
    it('Call res with sum and index values', function () {
        const req = {}
        const res = {
            load: function load() {
                console.log('funçao')
            }
        }
          
        sinon.spy(res, 'load')

        const math = new Math()
        math.printSum(req, res, 5, 5)
        expect(res.load.args[0][0]).to.equal('index')
    })
    })
