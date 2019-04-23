const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    proxy("/api/**", {
      target: "http://192.168.0.70:9001",
      changeOrigin: true
    })
  )

  app.use(
    proxy("/product/**", {
      target: "http://192.168.0.70:9001",
      changeOrigin: true
    })
  )

  app.use(
    proxy("/user/**", {
      target: "http://192.168.0.70:9001",
      changeOrigin: true
    })
  )
  
  app.use(
    proxy("/mail/**", {
      target: "http://192.168.0.70:9002",
      changeOrigin: true
    })
  )
}
