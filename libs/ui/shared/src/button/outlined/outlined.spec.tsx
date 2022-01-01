import { render } from '@testing-library/react';
import ButtonOutlined from './outlined';

describe('ButtonOutlined', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonOutlined />);
    expect(baseElement).toBeTruthy();
  });
});
