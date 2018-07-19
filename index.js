const https = require('https')
const fs = require('fs')

// サンプル画像
var url = 'https://1.bp.blogspot.com/-wXNSXGxGLcY/WzC-Nrk2AgI/AAAAAAABM_k/S-2MEmlmO40My55xP42pJ3PIoEtBACLcBGAs/s800/bucket_relay_nimots.png'

// 日付を取得
var today = new Date();
var datetime = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate()

// ダウンロード開始
var req = https.get(url, function (res) {

  var i = 1

  while (res.statusCode === '200') {
    var num = '00' + i
    num = num.slice(-3)

    // ファイルの出力場所と名前
    var filename = fs.createWriteStream('./files/' + datetime + '_' + num + '.png')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
      })

      ++i
  }
})

req.on('error', function (err) {
  console.log('Error: ', err)
  return
})