import { mount } from '@vue/test-utils';
import WelcomePage  from '../../components/WelcomePage';

describe('ImageCard', () => {
  it('should do this', () => {
    const wrapper = mount(WelcomePage)
    expect(wrapper).toMatchSnapshot()
  })
})