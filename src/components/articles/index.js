import React from 'react';
import styles from './style.module.scss'
import ReactMarkdown from 'react-markdown/with-html'

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: null
    }
  }

  async componentDidMount() {
    const { params } = this.props.match

    try {
      const result = await fetch(`${params.article}.md`)
      this.setState({ article: await result.text()})
    } catch (err) {
      this.setState({ article: err })
    }
  }

  render() {
    return (
      <div
        className={styles.article}>
        <ReactMarkdown
          source={this.state.article}
          escapeHtml={false}
        />
      </div>
    )
  }
}
