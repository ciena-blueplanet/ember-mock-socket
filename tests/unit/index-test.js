import {expect} from 'chai'
import {describe, it} from 'mocha'
import MockSocket from 'mock-socket'

describe('mock-socket', function () {
  it('should have a single module that has been exported', function () {
    expect(typeof MockSocket).to.equal('object')
  })

  ;[
    'Server',
    'SocketIO',
    'WebSocket'
  ]
    .forEach((key) => {
      it(`should have a ${key} method`, function () {
        expect(typeof MockSocket[key]).to.equal('function')
      })
    })
})
