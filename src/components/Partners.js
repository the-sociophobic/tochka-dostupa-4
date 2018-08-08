import React, { Component } from 'react';
import './../css/App.css';

class Partners extends Component {
  render() {
    var partners = this.props.partners;
    var blocks3 = this.props.blocks3;
    var blocks4 = this.props.blocks4;
    var path = this.props.path ? this.props.path : "";

    var blocks;
    var lineLength;
    var linedBlocks;
    if (window.innerWidth > 1000) {
      blocks = blocks4;
      lineLength = 4;
    }
    else {
      if (window.innerWidth > 580) {
        blocks = blocks3;
        lineLength = 3;
      }
    }
    if (lineLength) {
      var mappedBlocks = blocks.map(block => {
        switch(typeof block) {
          case "object": //null
            return <div className="block empty"></div>;
          case "string":
            return <div className="block"><span className={block.includes("vasion") || block.includes("торжения") ? "small-margin" : ""}>{block}</span></div>;
          case "number":
            var partner = partners.find(partner => partner.id == block);
            return <div className="block">
              <a href={partner.link} target="_blank">
                <img src={path + "img/partners/" + (window.devicePixelRatio > 1 ? "1x/" : "1x/") + partner.img} />
              </a>
            </div>;
        }
      });
      linedBlocks = [];
      mappedBlocks.forEach((block, index) => {
        if (index % lineLength == 0)
          linedBlocks.push([block]);
        else
          linedBlocks[linedBlocks.length - 1].push(block);
        if (index % lineLength == lineLength - 1)
          linedBlocks[linedBlocks.length - 1] = <div className={"partners-row " + (mappedBlocks.length == index + 1 ? "no-border" : "")}>
            <div className="row-content">
              {linedBlocks[linedBlocks.length - 1]}
            </div>
          </div>;
      });
    } else {
      linedBlocks = blocks4.map(block => {
        switch(typeof block) {
          case "object": //null
            return;
          case "string":
            return <div className="block"><span className={block.includes("vasion") || block.includes("торжения") ? "small-margin" : ""}>{block}</span></div>;
          case "number":
            var partner = partners.find(partner => partner.id == block);
            return <div className="block">
              <a href={partner.link} target="_blank">
                <img src={path + "img/partners/1x/" + partner.img} />
              </a>
            </div>;
        }
      });
    }

    return linedBlocks;
  }
}

export default Partners;
