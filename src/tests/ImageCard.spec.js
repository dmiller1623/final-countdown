import { mount } from '@vue/test-utils';
import ImageCard  from '../components/ImageCard';

describe('ImageCard', () => {
  it('should do this', () => {
    const wrapper = mount(ImageCard)
    expect(wrapper).toMatchSnapshot()
  })
})