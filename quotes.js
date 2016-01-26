var m = require('markov')();

function gen() {
  return m.fill(m.pick(), 5).join(' ');
}

module.exports = loader;
function loader(cb) {
  require('fs').readFile(__dirname + '/quotes.txt', 'utf8', function (err, data) {
    if (err) throw err;
    m.seed(data, function () {
      cb(gen);
    });
  });
};

if (require.main === module) loader(function () {
  console.log(gen());
});
