if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
    	return ((num >> (bit - 1)) & 1);
    },

    base10: function(str) {
    	return str.split('').map(function(c) {return parseInt(c);}).reduce(function(p,c,i,a) { return 2*p+c; });
    },

    convertToBinary: function(num) {
			return [0,0,0,0,0,0,0,0].map(function(v,i,a) { return (num >> i) & 1; }).reverse().join('');
    },

    multiply: function(a, b) {
    	// helper fn to convert float string to integer and exponent (power of 10)
    	// 3.1416 => {i: 31416, e: 4}
			function fasi(n) {
				var s = n.toString();
				var i = Math.floor(n);
				var e = 0;
				if (s.indexOf('.') > 0) {
					e = s.length - s.indexOf('.') - 1;
					i = s.replace('.','');					
				}
				return {"i": i, "e": e};
			}
			ax = fasi(a);
			bx = fasi(b);
			return (ax.i * bx.i) / Math.pow(10, ax.e + bx.e);
    }
  };
});

