const https = require('https')
const fs = require('fs')

// サンプル画像
var url = 'https://1.bp.blogspot.com/-wXNSXGxGLcY/WzC-Nrk2AgI/AAAAAAABM_k/S-2MEmlmO40My55xP42peI3WJ3PIoEtBACLcBGAs/s800/bucket_relay_nimotsu.png'

// ダウンロード開始
var req = https.get(url, function (res) {

  // ファイルの出力場所と名前
  var filename = fs.createWriteStream('./files/001.png')
  res.pipe(filename)

  res.on('end', function () {
    filename.close()
  })
})

req.on('error', function (err) {
  console.log('Error: ', err)
  return
})