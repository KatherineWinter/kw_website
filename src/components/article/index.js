import React from 'react';
import styles from './style.module.css'
import ReactMarkdown from 'react-markdown/with-html'

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      article: null
    }
  }

  async componentDidMount() {
    const { params } = this.props.match

    try {
      const med_party_tips = await import(`../../data/${params.article}.md`)
      const result = await fetch(med_party_tips.default)
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
