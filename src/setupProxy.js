const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    proxy("/api/**", {
      target: "http://localhost:3000",
      changeOrigin: true
    })
  )

  app.use(
    proxy("/product/list", {
      target: "http://localhost:3000",
      changeOrigin: true
    })
  )
  
  app.use(
    proxy("/mail/**", {
      target: "http://localhost:3000",
      changeOrigin: true
    })
  )
}
