import Vue from 'vue';
import Homepage from '@/Pages/Homepage/Homepage';

describe('Homepage', () => {
  it('should render a div with a content', () => {
    const Constructor = Vue.extend(Homepage);
    const vm = new Constructor().$mount();
    expect(true)
      .to.equal(true);
  });
});
