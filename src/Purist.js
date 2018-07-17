import { Component } from 'react'
import isEqual from 'react-fast-compare'

const shouldComponentUpdate = (self) => (nextProps) => !isEqual(self.props, nextProps)

export const purist = (Comp) => {
  return class Purist extends React.Component {
    shouldComponentUpdate = shouldComponentUpdate(this)

    render() {
      return <Comp {...this.props} />
    }
  }
}

export class Purist extends React.Component {
  shouldComponentUpdate = shouldComponentUpdate(this)

  render() {
    return this.props.children(this.props)
  }
}
