import React from 'react';
import './App.css';
import Content from './data/kw_content.json'
import Boxart from './components/boxart'
import Header from './components/header'
import Section from './components/section'
import InformationPane from './components/information-pane'

function changeSelectedBoxId (boxId) {
  this.setState({ selectedBoxId: boxId })
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBoxId: null,
      theme: 'lightTheme'
    }
  }

  render () {
    const sections = Content.tags.map((tag, tagIndex) => {
      const boxes = Content.boxes.filter(box => box.tags.includes(tag.id))
      const boxart = boxes.map((boxartValue, boxartIndex) =>
        <Boxart key={`boxart_${boxartIndex}`}
          info={boxartValue}
          handleChangeSelectedBoxId={boxId => changeSelectedBoxId.call(this, boxId)}
        />
      )
  
      return (
        <Section
          key={`tag_${tagIndex}`}
          name={tag.name}
          boxart={boxart}
          theme={this.state.theme}
        />
      )
    })

    const boxArtWrapperClass = this.state.selectedBoxId ? 'overlay' : ''
  
    return (
      <div className={`App ${this.state.theme}`}>
        <div className={`boxart-pane ${boxArtWrapperClass}`}>
        <Header
          content={Content.about}/>
          {sections}
        </div>
        <InformationPane
          selectedBox={Content.boxes.find(box => box.id === this.state.selectedBoxId)}
          boxes={Content.boxes}
          handleChangeSelectedBoxId={boxId => changeSelectedBoxId.call(this, boxId)}
        />
      </div>
    );
  }
}
