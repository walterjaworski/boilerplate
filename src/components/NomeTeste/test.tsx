import { render, screen } from '@testing-library/react'

import NomeTeste from '.'

describe('<NomeTeste />', () => {
  it('should render the heading', () => {
    const { container } = render(<NomeTeste />)

    expect(
      screen.getByRole('heading', { name: /NomeTeste/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
