import {expect} from 'chai'
import {describe, it} from 'mocha'
import MockSocket from 'mock-socket'

describe('mock-socket', function () {
  it('is a single module that has been exported', function () {
    expect(typeof MockSocket).to.equal('object')
  })

  ;[
    'Server',
    'SocketIO',
    'WebSocket'
  ]
    .forEach((key) => {
      it(`has ${key} method`, function () {
        expect(typeof MockSocket[key]).to.equal('function')
      })
    })
})
