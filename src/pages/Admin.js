import React from 'react'

export default function() {
  var spekts = this.state.spekts.map(spekt => {
    return {
      number: "",
      id: spekt.id,
      id_shown: spekt.id,
      name: spekt.name,
      place: spekt.place,
      edit: "",
      move: "",
    };
  });

  return (
    <div>
      {/* <Sortable listings={spekts} setState={this.setState.bind(this)} /> */}
    </div>
  );
}