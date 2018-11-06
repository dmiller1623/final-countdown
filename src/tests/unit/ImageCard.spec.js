import { mount, shallowMount } from '@vue/test-utils';
import ImageCard from '../../components/ImageCard';

describe('ImageCard', () => {
  it('should do this', () => {
    const image = "https://nrs.harvard.edu/urn-3:HUAM:INV038751_dynmc"
    const wrapper = shallowMount(ImageCard, {
      propsData: {
        image: image
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})