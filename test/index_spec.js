// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe("TTSService", () => {
    describe("Get /:brand/:name", () => {
         it("should get TTS averages", (done) => {
            chai.request(app)
                .get('/Adidas/Yeezy')
                .set({'Content-Type': 'application/json'})
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                 });
        });
    });
    describe("Post /", () => {
        it("should post TTS data", (done) => {
           chai.request(app)
               .post('/')
               .set({'Content-Type': 'application/json'})
               .send({name: 'Yeezy', brand: 'Adidas',  ttsData: 3})
               .end((err, res) => {
                   res.should.have.status(200);
                   done();
                });
       });
   });

});