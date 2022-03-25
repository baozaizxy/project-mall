module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/activity':{
                target:'https://www.imooc.com',
                _changeOrigin: false,
                get changeOrigin() {
                    return this._changeOrigin;
                },
                set changeOrigin(value) {
                    this._changeOrigin = value;
                },
                pathRewrite:{
                    '/activity':'/activity'
                }
            }
        }
    }
}