import * as ReactIs from 'react-is';

export function a(value: unknown) {
  return ReactIs.isElement(value);
}
