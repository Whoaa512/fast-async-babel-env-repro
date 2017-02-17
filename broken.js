'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.geneByName = undefined;

var _nodentRuntime = require('nodent-runtime');

var _nodentRuntime2 = _interopRequireDefault(_nodentRuntime);

var geneByName = exports.geneByName = function () {
    var _ref = _asyncToGenerator(function* (event, context, callback) {
        var name = event.pathParameters.name;
        // Need to call .then so that the query will kick off

        var genes = yield dbClient(TABLE_NAME).then(identity);
        return genes;
    });

    return function geneByName(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var identity = function identity(x) {
    console.log(x);
    return x;
};
var dbClient = function dbClient() {
    return new Promise(function (fill, fail) {
        setTimeout(function () {
            return fill(['results']);
        }, 10);
    });
};
