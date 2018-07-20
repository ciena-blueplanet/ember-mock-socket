# 0.2.2 (2018-07-20)

* **Fixed** Travis API key.


# 0.2.1 (2018-03-23)
* **Updated** pull request template
* **Added** issue template
* **Updated** to `pr-bumper` version `3`
* **Updated** to node 8
* **Added** slack integration
* **Updated** `ember-frost-test` to `^4.0.1`
* **Updated** `ember-test-utils` to `^8.1.1`
* **Removed** ignoring of `package-lock.json` file
* **Added** `package-lock.json` file
* **Updated** Travis CI scripts to allow non-exact node version

# 0.2.0 (2018-02-02)
* **Added** `bower` @ `^1.8.2` since no longer included with Ember CLI
* **Added** ignore the linting of the `CHANGELOG.md`
* **Added** ignoring of `package-lock` until we are ready to move to node 8
* **Added** ignoring of `.DS_Store` files
* **Added** ignoring of `/typings` directory
* **Removed** useLintTree ember-cli-mocha configuration from `ember-cli-build.js`
* **Added** `ember-frost-test` @ `^4.0.0`
* **Added** `chai-jquery` @ `^2.0.0`
* **Updated** `ember-cli-chai` to `0.4.3`
* **Updated** `ember-cli-mocha` to `0.14.4`
* **Added** `ember-hook` @ `1.4.2`
* **Added** `ember-sinon` @ `^0.7.0`
* **Updated** `ember-test-utils` to `^8.1.0`
* **Added** `sinon-chai` @ `^2.14.0`
* **Updated** `ember-cli-htmlbars-inline-precompile` to `0.3.12`
* **Added** `broccoli-funnel` @ `^2.0.1`
* **Updated** `broccoli-merge-trees` to `^2.0.0`
* **Updated** `mock-socket` to `^6.1.0` and moved from devDependency to dependency
* **Removed** the blueprint file since packages are now included via dependencies
* **Updated** to add `mock-socket` to vendor tree and created module shim so that it can be imported
* **Updated** `npm run test` to not include running of code coverage since it is not installed


# 0.1.5 (2017-07-10)

Upgrade Ember-cli to 2.12.3


# 0.1.4 (2017-05-11)

* **Updated** the secure auth tokens in `.travis.yml`
* **Added** `.pr-bumper.json`


# 0.1.3

* **Updated** CI to test both Chrome and Firefox.


# 0.1.2

* **Fixed** blueprint as it was using the wrong name.


# 0.1.1

* **Upgraded** to test against Ember 2.11.


# 0.1.0

* **Added** additional builds to CI to make sure addon works with latest versions of Ember.
* **Removed** files from npm package that aren't necessary (all of the various config files).
* **Updated** dependencies to latest versions.


# 0.0.2

* **Removed** debug logging from build.



# 0.0.1

* Wired repository up to CI to get it published to npm.



