import { render } from '@testing-library/react';
import { describe, expect, test } from "vitest";
import { HelloWorld } from './HelloWorld';


describe('<HelloWorld />', () => {
  test('HelloWorld mounts properly', () => {
    const wrapper = render(<HelloWorld text="hi"/>)
    expect(wrapper).toBeTruthy()
  });
});