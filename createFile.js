const fs = require('fs');
const {getStateFullComponent, getStateLessComponent} = require('./ComponentTypes')

/**
 * Create Component/File
 * @param {String} name Name of the file/component to be created
 * @param {String} type State Type StateFull | StateLess
 */

function createFile(name,type) {
  if(!fs.existsSync(`./${name}.js`)) {
    if(type == 'stateLess') {
      fs.writeFile(`${name}.js`, getStateLessComponent(name), (err) => {
        if(err) console.log('Error Creating Component');
        console.log('State Less Component Created');
      })
    } else if(type == 'stateFull') {
      fs.writeFile(`${name}.js`, getStateFullComponent(name), (err) => {
        if(err) console.log('Error Creating Component');
        console.log('State Full Component Created');
      })
    }
  } else {
    console.log('Component Already Created');
  }
}

exports.createFile = createFile;