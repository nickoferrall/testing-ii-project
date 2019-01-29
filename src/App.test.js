import React from 'react';
import { shallow } from 'enzyme'; // shallow  will render a component without it's children. Another module called mount renders the component including the children
import renderer from 'react-test-renderer';

import App from './App';

// describe('<App />', () => {
//   it('renders an h1 with a display class', () => {
//     const wrapper = shallow(<App />);
//     const elements = wrapper.find('h1.display');
//     expect(elements.length).toBe(1);
//   });

//   it('should be "off" by default', () => {
//     const wrapper = shallow(<App />);
//     const instance = wrapper.instance();

//     expect(instance.state.isOn).toBe(false);
//   });

it('should display the state of the switch', () => {
  const wrapper = shallow(<App />);
  const display = wrapper.find('h1.test');
  expect(display.text()).toBe('Vamos!');
});

//   describe('toggle button', () => {
//     it('should toggle state on click', () => {
//       const wrapper = shallow(<App />);
//       const instance = wrapper.instance();

//       const button = wrapper.find('button.toggle-btn');
//       button.simulate('click');
//       expect(instance.state.isOn).toBe(true);

//       button.simulate('click');
//       expect(instance.state.isOn).toBe(false);
//     });
//   });
// });
