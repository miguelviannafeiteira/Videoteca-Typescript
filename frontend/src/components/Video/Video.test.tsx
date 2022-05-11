/* eslint-disable no-undef */
//* eslint-disable react/react-in-jsx-scope */
//* eslint-disable no-undef */
import React from 'react'
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import Video from './index'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { VideoInterface } from '../../models/Video'

const server = setupServer(
  rest.patch< VideoInterface>('/videos/Novo Video', (req, res, ctx) => {
    const video = req.body
    return res(ctx.json({ ...video, liked: !video.liked }))
  }),

  rest.get< VideoInterface>('/videos', (req, res, ctx) => {
    return res(ctx.json([
      ctx.delay(100),
      {
        _id: 'Novo Video',
        title: 'Esse video',
        link: 'https://www.youtube.com/watch?v=MhFSuOjU624&list=PLYSZyzpwBEWTBdbfStjqJSGaulqcHoNkT&index=8&ab_channel=BrunoAntunes',
        liked: false
      }
    ]))
  }))

beforeAll(() => server.listen())
afterAll(() => server.close())

describe('after apllication fully loads', () => {
  beforeEach(async () => {
    render(<Video _id={'Novo Video'} title={'Esse video'} link={'https://www.youtube.com/watch?v=MhFSuOjU624&list=PLYSZyzpwBEWTBdbfStjqJSGaulqcHoNkT&index=8&ab_channel=BrunoAntunes'} liked={false} />)
  })

  it('renders the videos', () => {
    expect(screen.getByText('Esse video')).toBeInTheDocument()
  })

  // it('liked the video', async () => {
  //   user.click(screen.getByTestId('likeButton'))
  //   await waitForElementToBeRemoved(() => screen.getByRole('button', { name: 'unliked' })
  //   )
  // })
  // it('render "liked"', () => {
  //   expect(
  //     screen.getByRole('button', { name: 'liked' })
  //   ).toBeInTheDocument()
  //   expect(
  //     screen.queryByRole('button', { name: 'unliked' })
  //   ).not.toBeInTheDocument()
  // })
})
