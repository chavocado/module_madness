// Module Two
// The second module should accept a number and convert it to a USD value.
// HINT: You will want to Google examples of this.
// I found a couple reasonable examples of this in a simple 5-minute search.

var convertUsd = function(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
module.exports = convertUsd;
