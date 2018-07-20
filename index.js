const http = require('http')
const fs = require('fs')

// 日付を取得
const today = new Date();
const datetime = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate()
var i = 1


while (i < 4) {
  var num = '00' + i
  num = num.slice(-3)

  // サンプル画像
  var url = 'http://127.0.0.1:3000/' + num + '.mp4'

  var req = http.get(url, function (res) {
    var filename = fs.createWriteStream('writeFiles/' + num + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
      filename.close()
    })
  })

  console.log('writeFiles/' + num + '.mp4')
    ++i
}

req.on('error', function (err) {
  console.log('Error: ', err)
  return
})



// // ダウンロード開始
// var req = https.get(url, function (res) {
//   // if (res.statusCode !== 200) {
//   // }

//   // ファイルの出力場所と名前
//   var filename = fs.createWriteStream('./files/' + datetime + '_' + num + '.png')
//   res.pipe(filename)

//   res.on('end', function () {
//     filename.close()
//   })
// })

// req.on('error', function (err) {
//     console.log('Error: ', err)
//     return
//   })

//   ++i
// // }