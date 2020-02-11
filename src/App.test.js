import React from 'react';
import App from './App';
import Enzyme, {shallow} from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});


/**
 * @returns shalloWrapper containg nodes
 * @function findByTestAttr
 * @param wrapper 
 * @param value
 */
const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[dataTest='${value}']`);
};

test('renders App Component', () => {  
  const appComponent = findByTestAttr(wrapper, "AppComponent");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const incrementButton = findByTestAttr(wrapper, "incrementButton");
  expect(incrementButton.length).toBe(1);
});

test('renders decrement button', () => {
  const decrementButton = findByTestAttr(wrapper, "decrementButton");
  expect(decrementButton.length).toBe(1);
});

test('renders counter display', () => {
  const counter = findByTestAttr(wrapper, "counter");
  expect(counter.length).toBe(1);
});

test('counter starts from 0', () => {
    const counter = wrapper.state("counter");
    expect(counter).toBe(0);
});

test('Counter should increment the display element', () => {
  const counter = 7;
  wrapper.setState({counter});
  const incrementButton = findByTestAttr(wrapper, "incrementButton");
  incrementButton.simulate("click");

  expect(wrapper.state("counter")).toBe(counter + 1);
});


test('Counter should decrement the display element', () => {
  const counter = 7;
  wrapper.setState({counter});
  const decrementButton = findByTestAttr(wrapper, "decrementButton");
  decrementButton.simulate("click");

  expect(wrapper.state("counter")).toBe(counter - 1);
});

test("Below 0 count error should be thrown", () => {
  const counter = 0;
  wrapper.setState({counter});

  const decrementButton = findByTestAttr(wrapper, "decrementButton");
  decrementButton.simulate("click");
  
  const errorElement = findByTestAttr(wrapper, "error");
  expect(errorElement.length).toBe(1);
});
