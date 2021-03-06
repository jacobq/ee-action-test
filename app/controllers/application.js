import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller.extend({
  count: 0
}) {
  @action
  myAction() {
    this.incrementProperty('count');
    // eslint-disable-next-line no-console
    console.log('myAction firing', this.count);
  }
}

