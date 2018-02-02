/* eslint-env node */
'use strict'

const Funnel = require('broccoli-funnel')
const MergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'mock-socket',

  included: function (app) {
    // Addons - see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app
    }

    this._super.included.apply(this, app)

    if (app) {
      app.import(path.join('vendor', 'mock-socket.js'))
      app.import(path.join('vendor', 'shims', 'mock-socket.js'))
    }
  },

  treeForVendor: function (vendorTree) {
    const packageTree = new Funnel(path.join(this.project.root, 'node_modules', 'mock-socket', 'dist'), {
      files: ['mock-socket.js']
    })

    return new MergeTrees([vendorTree, packageTree])
  }
}
