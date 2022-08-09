const hourMessage = require("../helpers/hourMessage");
let hourStub
describe("hourMessage()", () => {
  afterEach(() => {
    hourStub.restore()
  });
  subject(() => hourMessage());
  describe('between 0 and 4 am', () => {
    beforeEach(() => {
      hourStub = sinon.stub(Date.prototype, 'getHours').returns(4)
    });
    it(()=> is.expected.to.equal('Good night'))
  });
  describe('between 5 and 11 am', () => {
    beforeEach(() => {
      hourStub = sinon.stub(Date.prototype, 'getHours').returns(11)  
    });

    it(()=> is.expected.to.equal('Good morning'))
  });
  describe('between 12 and 17 pm', () => {
    beforeEach(() => {
      hourStub = sinon.stub(Date.prototype, 'getHours').returns(17)  
    });
    it(()=> is.expected.to.equal('Good afternoon'))
  });

  describe('between 18 and 24 pm', () => {
    beforeEach(() => {
      hourStub = sinon.stub(Date.prototype, 'getHours').returns(24)  
    });
    it(()=> is.expected.to.equal('Good evening'))
  });
});
