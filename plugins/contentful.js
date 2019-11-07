//contentfulが公開しているnodeで使えるライブラリ
//api：関数やクラスをドキュメント化したもの
//ライブラリ：apiの集合体。しかもブラックボックス
//requireで呼び込んでいる
const contentful = require('contentful')

export default (context, inject) => {
  const contentfulClient = contentful.createClient({
    //api呼び出すためのキー
    space: process.env.space,
    accessToken: process.env.accessToken
  })

  inject('contentful', contentfulClient)
}
