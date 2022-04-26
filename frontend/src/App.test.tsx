/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App'

test('tem q ter hello world', () => {
  const { getByText } = render(<App />)
  expect(getByText('Hello World')).toBeInTheDocument()
})
