import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Ada Lovelace',
            'Linus Torvalds',
            'Donald Knuth',
            'Grace Hopper',
            'Richard Stallman',
            'Mark Zuckerberg',
            'Steve Wozniak',
            'Guido van Rossum',];
  }
});
