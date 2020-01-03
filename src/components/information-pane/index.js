import React from 'react';
import styles from './style.module.scss'
import Boxart from '../boxart';
import ReactMarkdown from 'react-markdown/with-html'

export default class InformationPane extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: null,
      articleFile: null
    }
  }

  async componentDidUpdate(prevProps) {
    const { selectedBox } = this.props

    if (!selectedBox || !selectedBox.markdown) {
      this.state.article && this.setState({ article: null, articleFile: null })
      return
    }

    if (selectedBox.markdown === this.state.articleFile) {
      return
    }

    try {
      const result = await fetch(selectedBox.markdown)
      this.setState({ article: await result.text(), articleFile: selectedBox.markdown})
    } catch (err) {
      this.setState({ article: err, articleFile: err })
    }
  }

  render () {
    const { selectedBox } = this.props
    if (!selectedBox) return null
    const desc2 = !selectedBox.desc2 ? null : selectedBox.desc2.map((e, index) => (
      <li
        className={styles.descItem}
        key={selectedBox.id + index}>
        {e}
      </li>
    ))
  
    const projects = !selectedBox.projects ? null : selectedBox.projects.map((e, index) => {
      return (
        <Boxart key={`${selectedBox.id}_boxart_${index}`}
          info={this.props.boxes.find(box => box.id === e)}
          handleChangeSelectedBoxId={this.props.handleChangeSelectedBoxId}
        />
      )
    })
  
    return (
      <div className={styles.informationPane}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            {selectedBox.img && <img className={styles.headerImg} alt={selectedBox.name} src={selectedBox.img} />}
            {selectedBox.name && <h1>{selectedBox.name}</h1>}
            {selectedBox.title && <h2>{selectedBox.title}</h2>}
            {selectedBox.desc &&<div>{selectedBox.desc}</div>}
            {desc2 && <ul>{desc2}</ul>}
            {this.state.article && <ReactMarkdown
              source={this.state.article}
              escapeHtml={false}
            />}
            <div className={styles.projects}>{projects}</div>
          </div>
        </div>
        <button
          className={styles.closeButton}
          onClick={() => this.props.handleChangeSelectedBoxId(null)}>
          X
        </button>
      </div>
    );
  }
}
