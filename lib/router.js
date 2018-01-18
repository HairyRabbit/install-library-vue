/**
 * vue-router for install, override the build router
 */

export default class Router {
  id = 'router';
  lib = 'vue-router'
  install() {
    return 'vue-router'
  }
}
