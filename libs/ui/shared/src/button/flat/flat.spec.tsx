import { render } from '@testing-library/react';
import ButtonFlat from './flat';

describe('ButtonFlat', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonFlat />);
    expect(baseElement).toBeTruthy();
  });
});
