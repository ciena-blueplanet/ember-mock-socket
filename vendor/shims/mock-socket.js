/* eslint-env node:true */
/* globals define, self */

(function () {
  function vendorModule () {
    'use strict'

    return {
      'WebSocket': self.Mock.WebSocket,
      'Server': self.Mock.Server,
      'SocketIO': self.Mock.SocketIO
    }
  }

  define('mock-socket', [], vendorModule)
})()
