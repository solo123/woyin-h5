export default {

  // 获取京东商品类别列表
  'GET /api/goodsClassLists': (req, res) => {
    res.json({
      "status": 200,
      "data": [{
        "id": 1,
        "category": "手机"
      }, {
        "id": 2,
        "category": "数码"
      }, {
        "id": 3,
        "category": "家居日用"
      }, {
        "id": 4,
        "category": "食品"
      }, {
        "id": 5,
        "category": "个人护理"
      }, {
        "id": 6,
        "category": "移动硬盘＋鼠标＋摄像头"
      }, {
        "id": 7,
        "category": "u盘+鼠标垫+电脑工具"
      }, {
        "id": 8,
        "category": "键盘+插座"
      }, {
        "id": 9,
        "category": "线缆＋网络仪表仪器"
      }, {
        "id": 10,
        "category": "酒类"
      }],
      "msg": "请求成功"
    })
  },
  
  // 获取商品列表
  'GET /api/goodsLists': (req, res) => {
    res.json({"status":200,"data":{"data":[{"saleUnit":"  ","weight":"0.34","productArea":"中国大陆","wareQd":"","imagePath":"jfs/t1/11806/11/5475/151966/5c3356b8E1c814acf/0d3674f1114d5052.jpg","param":"\u003ctable cellpadding=\"0\" cellspacing=\"1\" width=\"100%\" border=\"0\" class=\"Ptable\"\u003e\u003ctr\u003e\u003cth class=\"tdTitle\" colspan=\"2\"\u003e主体\u003c/th\u003e\u003ctr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e品牌\u003c/td\u003e\u003ctd\u003e暴风魔镜\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e型号\u003c/td\u003e\u003ctd\u003eXD-01\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e类型\u003c/td\u003e\u003ctd\u003e中端VR眼镜（配合带有陀螺仪手机使用）\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e观影看剧\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e空间游戏\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e游戏资源\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e视频资源\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e低延迟率\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e3D电影\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e娱乐游戏\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e近视可用\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e功能热点\u003c/td\u003e\u003ctd\u003e瞳距调节\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e颜色\u003c/td\u003e\u003ctd\u003e黑色\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth class=\"tdTitle\" colspan=\"2\"\u003e屏幕\u003c/th\u003e\u003ctr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e分辨率\u003c/td\u003e\u003ctd\u003e建议1920*1080及以上\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e材质\u003c/td\u003e\u003ctd\u003e光学专用PMMA\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth class=\"tdTitle\" colspan=\"2\"\u003e光学设计\u003c/th\u003e\u003ctr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e视场角\u003c/td\u003e\u003ctd\u003e60°\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003cth class=\"tdTitle\" colspan=\"2\"\u003e基本信息\u003c/th\u003e\u003ctr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身长度\u003c/td\u003e\u003ctd\u003e170mm\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身宽度\u003c/td\u003e\u003ctd\u003e138mm\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身高度\u003c/td\u003e\u003ctd\u003e98mm\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身重量\u003c/td\u003e\u003ctd\u003e230g\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd class=\"tdTitle\"\u003e机身材质分类\u003c/td\u003e\u003ctd\u003eABS材质\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e","state":1,"sku":3394327,"shouhou":"","brandName":"暴风魔镜","upc":"3394327;6937972410909","appintroduce":"","category":"652;12345;12349","name":"暴风魔镜 小D 虚拟现实智能VR眼镜3D头盔 黑色","introduction":"\u003ctable id=\"__01\" width=\"750\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"\u003e \n \u003ctbody\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e \u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t5593/170/7155373949/112251/f5fa5905/596efc12Nc7d2d13c.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3220/344/1567640235/141504/75c8994b/57d10ffaN22811e3e.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3274/57/1630756003/14284/1e2fbbde/57d10ffaN2b06e273.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3226/142/1674895710/71218/dd7a93d0/57d10ffbNd3b1a2dc.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3136/349/1626708822/3486/e4a4e665/57d10ffaN1639d259.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3010/111/1999513435/60765/6fab54c8/57d10ffbN2edde526.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3067/185/1646158473/55756/7abeaafe/57d10ffbN3d1d108c.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3187/89/1641232294/64153/4c665b65/57d10ffbNff98c94e.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3859/88/502002623/36418/42c801cf/58534a60N8a0c7f2d.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3043/164/2017479880/28867/98aa5b89/57d10ffbNd8ecec71.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3214/62/1605342333/43759/eb71ac60/57d10ffbNd8b5eec0.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3286/245/2215589566/38740/9653034d/57de04d1Nce070e18.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3301/6/1674485422/100875/64153732/57d10ffbN090a6c46.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n  \u003ctr\u003e \n   \u003ctd\u003e\u003cimg src=\"http://img10.360buyimg.com/imgzone/jfs/t3088/116/1632483858/85434/8eb41ce0/57d10ffbN3ddf7405.jpg\" /\u003e\u003c/td\u003e \n  \u003c/tr\u003e \n \u003c/tbody\u003e \n\u003c/table\u003e","price":"39","jdPrice":"59","skuId":3394327,"type":2}],"count":7},"msg":"请求成功"})
  },

  // 运费计算
  'GET /mail/JDFreight': (req, res) => {
    res.json({
      "status": 200,
      "data": {
        "freight":"8",
        "baseFreight":"8",
        "remoteRegionFreight":"0",
        "remoteSku":"[]"
      },
      "msg": "请求成功"
    })
  }
}