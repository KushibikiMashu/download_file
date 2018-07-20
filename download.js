// ここの値を書き換えてください
const dir = ''
const baseUrl = '' + dir

const url_1 = baseUrl + '001.mp4'
const url_2 = baseUrl + '002.mp4'
const url_3 = baseUrl + '003.mp4'
const url_4 = baseUrl + '004.mp4'
const url_5 = baseUrl + '005.mp4'
const url_6 = baseUrl + '006.mp4'
const url_7 = baseUrl + '007.mp4'
const url_8 = baseUrl + '008.mp4'
const url_9 = baseUrl + '009.mp4'
const url_10 = baseUrl + '010.mp4'

const http = require('http')
const fs = require('fs')

// 今日の日付を取得
const today = new Date();
const month = '0' + (today.getMonth() + 1)
const datetime = today.getFullYear() + '_' + month.slice(-2) + '_' + today.getDate()

// ディレクトリの読み取り
const readDir = fs.readdir('.', function (err, files) {
    if (err) {
        console.log('ディレクトリの読み込みに失敗しました')
        console.log('error: ' + err)
    } else {
        console.log('ディレクトリを読み込みました')
        checkDir(files)
    }
})

// フォルダの再作成を防止する
const checkDir = function (files) {
    if (files.indexOf(datetime) == -1) {
        fs.mkdir(datetime, function (err) {
            if (err) {
                console.log('フォルダの作成に失敗しました')
                console.log('error: ' + err)
            } else {
                console.log('フォルダの作成に成功しました')
            }
        })
    } else {
        console.log('フォルダは既に存在しています')
    }
}

// ダウンロードの準備
var i = 0

// ファイル名001
var req = http.get(url_1, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/00' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req.on('error', function (err) {
    console.log('Error: ', err)
    return
})

// ファイル名002
var req_2 = http.get(url_2, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/00' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req_2.on('error', function (err) {
    console.log('Error: ', err)
    return
})

// ファイル名003
var req = http.get(url_3, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/00' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req.on('error', function (err) {
    console.log('Error: ', err)
    return
})

// ファイル名004
var req = http.get(url_4, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/00' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req.on('error', function (err) {
    console.log('Error: ', err)
    return
})

// ファイル名005
var req = http.get(url_5, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/00' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req.on('error', function (err) {
    console.log('Error: ', err)
    return
})

// ファイル名006
var req = http.get(url_6, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/00' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req.on('error', function (err) {
    console.log('Error: ', err)
    return
})
// ファイル名007
var req = http.get(url_7, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/00' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req.on('error', function (err) {
    console.log('Error: ', err)
    return
})

// ファイル名008
var req = http.get(url_8, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/00' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req.on('error', function (err) {
    console.log('Error: ', err)
    return
})

// ファイル名009
var req = http.get(url_9, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/00' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req.on('error', function (err) {
    console.log('Error: ', err)
    return
})

// ファイル名010
var req = http.get(url_10, function (res) {
    ++i
    var filename = fs.createWriteStream(datetime + '/0' + i + '.mp4')
    res.pipe(filename)

    res.on('end', function () {
        filename.close()
    })
})

req.on('error', function (err) {
    console.log('Error: ', err)
    return
})