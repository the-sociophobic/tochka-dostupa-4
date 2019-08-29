import React from 'react'

import SpektCard from 'components/SpektCard';
import Ficher from 'components/Ficher';

import { recursiveTimeOut } from 'utils/utils'
import graphCodes from 'utils/graphCodes'
import {
  easterEgg,
  easterEggRomanova,
  easterEggCramp,
  easterEggNata
} from 'utils/easterEggs'


//WTF export default () => { DORSN'T WORK ?!?!!
export default function() {
  document.title = this.state.lang ? "The Access Point: Main Page" : "Точка Доступа: Главная страница";

  var W = this.state.width;
  var H = this.state.height;
  var textStyle = {
    fontSize: (
      H / W > 0.7 ?
        W / 11
        :
        (Math.pow(W * H, 0.452) * (W / H > 20 / 9 ? 0.21 : 0.22))) * (this.state.lang ? 1.1 : .99) + "px"
  };
  var textStyleMobile = {
    fontSize: (H / W > 1.2 ? W / 11 : (Math.pow(W * H, 0.459) * (W / H > 20 / 9 ? (W < 340 || H < 340 ? 0.12 : 0.14) : (W < 340 || H < 340 ? 0.138 : 0.153)))) * (this.state.lang ? 1.1 : 1) + "px"
  };
  var landscape = W > H && W <= 768;


  const titleText = [["четвертый международный летний фестиваль искусств", "точка доступа", "19\xa0июля — 5\xa0августа"], ["4th international summer festival of arts", "the access point", "19\xa0July — 5\xa0August"]];

  const titleTextLetters = Array
    .from(new Set(
      titleText
        .reduce((a, b) => a + b)
        .split('')
    ))
    
  if (!this.graphCodes)
    this.graphCodes = graphCodes.map(node => ({
      ...node,
      codes: node.codes.map(code => code
        .split('')
        .filter(letter => titleTextLetters.includes(letter))
        .join('')
      )
    }))


  var codeText = this.lang(titleText)
    .map(paragraph =>
      <h1
        style={this.state.mobile ? textStyleMobile : textStyle}
        key={paragraph}
      >
        {paragraph
            .split("")
            .map((letter, index) =>
              <b
                onClick={() => codeInput.bind(this)(letter)}
                key={index}
              >
                {letter}
              </b>
            )}
      </h1>
    );

  return (
    <div>
      <div className="upper with-logo">
        <div className={"text-container" + (landscape ? " landscape" : "")}>
          <section id="title-container">
            {codeText}
          </section>
        </div>
      </div>
      <div className="cards-container">
        <div className="row">
          <SpektCard spekt={this.state.spekts[1]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          <SpektCard spekt={this.state.spekts[2]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <SpektCard spekt={this.state.spekts[5]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          <SpektCard spekt={this.state.spekts[4]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <Ficher ficher={this.state.fichers[(this.state.abonementPic) % 2]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} />

          <SpektCard spekt={this.state.spekts[0]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          {/* <Abonement pic={this.state.abonementPic} lang={this.lang.bind(this)} align="right" /> */}
          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[0]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[1]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[2]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[3]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          <SpektCard spekt={this.state.spekts[this.state.spektsOrder[4]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

          <Ficher ficher={this.state.fichers[(this.state.abonementPic + 1) % 2]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} />

          <SpektCard spekt={this.state.spekts[3]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
        </div>
      </div>
    </div>
  );
}

function codeInput(letter) {
  let newCode = this.state.code + letter.toLowerCase()
  console.log(newCode)

  this.graphCodes.forEach(node => {
    if (typeof node.url === "string" && node.url === newCode)
      window.open("https://kiss-graph.com/node/" + node.url)
    else 
      node.codes.forEach(code => {
        if (code === newCode) {
          if (typeof node.url === "string")
            window.open("https://kiss-graph.com/node/" + node.url)
          else
            node.url.forEach(url => window.open("https://kiss-graph.com/node/" + url))
        }
      })
  })

  if (newCode === "рейв")
    recursiveTimeOut(easterEgg.bind(this), 555, 100500)
  if (newCode === "ййййй")
    recursiveTimeOut(easterEggRomanova.bind(this), 555, 100500)
  if (newCode === "самп")
    recursiveTimeOut(easterEggCramp.bind(this), 555, 100500)
  if (newCode === "ната")
    recursiveTimeOut(easterEggNata.bind(this), 555, 100500)

  this.setState({code: newCode})
}