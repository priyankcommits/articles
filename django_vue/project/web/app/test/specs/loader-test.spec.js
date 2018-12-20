/* Tests for Loader Animation Component */
import LoaderComponent from '../../components/loader';

import { mount } from '@vue/test-utils';
import { expect } from 'chai';

describe('LoaderComponent.vue', () => {
  let comp = mount(LoaderComponent);
  beforeEach(() => {
    comp = mount(LoaderComponent);
  });
  it(`should show loader class correctly`, () => {
    expect(comp.vm.$el.className).to.equal('timeline-wrapper');
  });
  it(`should contain timeline item as child`, () => {
    expect(comp.vm.$el.childElementCount).to.equal(1);
    expect(comp.contains('.timeline-item')).to.equal(true);
  });
  it(`should contain repeat property as the default value`, () => {
    expect(comp.vm.$props.repeat).to.equal(4);
    expect(comp.findAll('.animated-background').length).to.equal(4);
  });
  it(`should contain repeat property as the prop that is passed`, () => {
    comp.setProps({repeat: 3});
    expect(comp.findAll('.animated-background').length).to.equal(3);
  });
});
