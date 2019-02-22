import * as React from 'react'

interface Props {
  text: string,
  onClick: () => void,
}

interface State {
  disabled: boolean,
}

export default class SampleButton extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false
    }
  }

  render() {
    const { text, onClick } = this.props
    const { disabled } = this.state
    return <button onClick={ onClick } disabled={ disabled }>{text}</button>
  }
}
