/* eslint-env node */
'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'mock-socket',

  treeForAddon (tree) {
    const mockSocketPath = path.dirname(require.resolve('mock-socket/src/index.js'))
    const mockSocketTree = this.treeGenerator(mockSocketPath)

    if (!tree) {
      return this._super.treeForAddon.call(this, mockSocketTree)
    }

    const trees = mergeTrees([mockSocketTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
