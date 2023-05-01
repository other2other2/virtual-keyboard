class State {
  constructor(initialState) {
    this.state = initialState || 'caseDown';
  }

  set(state) {
    this.state = state;
  }

  get() {
    return this.state;
  }

  clear() {
    this.state = '';
  }
}

const state = new State('caseDown');

export default state;
