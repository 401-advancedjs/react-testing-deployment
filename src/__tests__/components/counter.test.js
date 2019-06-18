import React from 'react';
import Counter from '../../components/counter/counter.js';
import renderer from 'react-test-renderer';

describe( "<Counter/>", () => {
  test('basic rendering', () => {
    const mountedCounter = shallow(<Counter/>);
    expect(mountedCounter.find('a')).toBeTruthy();
  });

  test('testing increment clicks', () => {
    const mountedCounter = mount(<Counter/>);
    const link = mountedCounter.find('a.upClicker');

    link.simulate('click');
    expect(mountedCounter.state('count')).toBe(1);
  });

  test('testing decrement clicks', () => {
    const mountedCounter = mount(<Counter/>);
    const link = mountedCounter.find('a.downClicker');

    link.simulate('click');
    expect(mountedCounter.state('count')).toBe(-1);
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<Counter/>).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
