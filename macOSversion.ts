// @ts-ignore
const cmd = require('node-cmd')

let osVersion = {
  ProductName: '',
  ProductVersion: '',
  BuildVersion: ''
}

const getOSVersion = () => {
  cmd.get(
    'sw_vers',
    (err: any, data: any, stderr: any) => {
      let cleanData = data.split('\n').toString().replace(/\s/g, ' ').split(',')
      osVersion.ProductName = cleanData[0].split(':')[1].toString().trim()
      osVersion.ProductVersion = cleanData[1].split(':')[1].toString().trim()
      osVersion.BuildVersion = cleanData[2].split(':')[1].toString().trim()
      return osVersion
    }
  )
}

getOSVersion()