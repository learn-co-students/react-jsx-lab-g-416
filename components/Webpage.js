const React = require('react')
const FillerText = require('./FillerText')

class Webpage extends React.Component {
  render() {
    return (
      <div>
    <h2>"The world's coolest webpage"</h2>
    < FillerText />
    < FillerText />
</div>
    )
  }
}
module.exports = Webpage;
