/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Video from './index'
import { setupServer } from 'msw/node'
import { DefaultRequestBody, rest } from 'msw'
import { VideoInterface } from '../../models/Video'
import { debug } from 'console'

const server = setupServer(rest.get<DefaultRequestBody, VideoInterface>('todos', (req, res, ctx) => {
  return res(ctx.json([
    {
      _id: 'asdasdas',
      title: 'Esse video',
      link: 'esse link',
      liked: false
    }
  ]))
}))

beforeAll(() => server.listen())
afterAll(() => server.close())

describe('after apllication fully loads', () => {
  beforeEach(async () => {
  })
  it('renders the photos', () => {
    const { getByText } = render(<Video _id={'asdasdas'} title={'Esse video'} link={'Esse link'} liked={false} />)
    expect(getByText('Esse video')).toBeInTheDocument()
    debug()
  })
})
