/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ComponentName = (function () {
  function ComponentName() {
    _classCallCheck(this, ComponentName);
  }

  _createClass(ComponentName, [{
    key: 'sayHello',
    value: function sayHello() {
      console.log('sayHello from cu-lib-example');
    }
  }], [{
    key: 'staticSayHello',
    value: function staticSayHello() {
      console.log('staticSayHello from cu-lib-example');
    }
  }]);

  return ComponentName;
})();

exports.ComponentName = ComponentName;
//# sourceMappingURL=../component-name/component-name.js.map