const fetch = require('node-fetch')
const fs = require('fs')

const header = {
  'X-API-Key': 'UGi998Uwtk7ewy6Ctq9dfcYd6MuYlUmVNtoIrOJw'
}

const url = 'https://api.propublica.org/congress/v1/114/both/bills/introduced.json'

let result = ''

fetch(url, {headers: header})
  .then(res => res.json())
  .then(bills => bills.results[0].bills)
  .then(bills => {
    bills.forEach(bill => {
      result = result + bill.summary + ' '
    })
    return result
  })
  .then(final => fs.writeFile('114-text.txt', final, console.error))
