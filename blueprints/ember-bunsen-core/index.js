module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'mock-socket', target: '^3.0.1'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
