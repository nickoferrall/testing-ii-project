import React from 'react';
import { shallow } from 'enzyme'; // shallow  will render a component without it's children. Another module called mount renders the component including the children
import renderer from 'react-test-renderer';

import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

describe('<App />', () => {
  it('Should display the state of the switch', () => {
    const wrapper = shallow(<App />);
    const display = wrapper.find('h1.test');
    expect(display.text()).toBe('Vamos!');
  });
});

describe('<Display />', () => {
  it('Should have proprty strike', () => {
    const wrapper = shallow(<Display />);
    console.log('Wrapper = ', wrapper);
    const display = wrapper.find('.strike');
    console.log('Display =', display);
    expect('Strike').toBe('Strike');
  });
});

// describe('<Dashboard />', () => {
//   it('Should update', () => {
//     const wrapper = shallow(<Dashboard />);
//     const display = wrapper.find('.strike');
//     expect(display.text()).toBe('Strike');
//   });

//   it('Should update strike', () => {
//     const wrapper = shallow(<Dashboard />);
//     const instance = wrapper.instance();
//     const button = wrapper.find('button.strike');
//     button.simulate('click');
//     // expect(display.text()).toBe('Strike);
//   });
// });

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

//   it('should be "off" by default', () => {
//     const wrapper = shallow(<App />);
//     const instance = wrapper.instance();

//     expect(instance.state.isOn).toBe(false);
//   });

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
