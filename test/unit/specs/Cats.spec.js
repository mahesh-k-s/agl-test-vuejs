import Vue from 'vue';
import Cats from '@/components/Cats';

describe('Cat.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Cats);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.cat h2').textContent)
      .to.equal('MALE');
  });

  it('has a requested the data', () => {
    const vm = new Vue(MyComponent).$mount()
    expect(typeof MyComponent.mounted).toBe('function')
    expect(vm.fetchData).toBe('function')
  })


});
