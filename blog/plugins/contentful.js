//contentfulが公開しているnodeで使えるライブラリ
//api：関数やクラスをドキュメント化したもの
//ライブラリ：apiの集合体。しかもブラックボックス
//requireで呼び込んでいる
const contentful = require('contentful')

export default (context, inject) => {
  const contentfulClient = contentful.createClient({
    //api呼び出すためのキー
    space: '73eynbkzierp',
    accessToken: '9e3cd460b700634368abbf527877323b5e78d42e43d00e9b5073e28724876a18'
  })

  inject('contentful', contentfulClient)
}
