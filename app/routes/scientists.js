import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  },
  actions: {
    addPerson(model) {
      console.log('in addPerson', model.get('name'))

      this.get('model').push(model.get('name'));
    }
  }
});
