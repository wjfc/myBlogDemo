function testLoader(source, map, meta) {
  /* 
  1. source 文件内容
  2. map sourceMap
  3. meta 别的 loader 传递的数据 
  */
  console.log('进入  normal  testcb-loader');
  let _res = source.replace("16px", "36px");
  console.log(map)
  console.log(this.data.name)
  /* 
  参数1: 代表是否有错
  参数2: 处理后的内容
  参数3: sourceMap 继续传递给 sourceMap
  参数4: 给下一个loader 传递参数
  */
  this.callback(null, _res, map, meta);
}

testLoader.pitch = function (remainingRequest, previousRequest, data) {
  /* 
  remainingRequest: 剩余需要处理的loader的绝对路径以!分割组成的字符串
  previousRequest: pitch阶段已经迭代过的loader按照!分割组成的字符串。
  data: 默认空对象{}， 用作 pitch loader 和 normal loader 交互
  当我们在loader.pith函数中通过给data对象上的属性赋值时，比如data.name="19Qingfeng"。
   此时在loader函数中可以通过this.data.name获取到自身pitch方法中传递的19Qingfeng。
  */
  debugger;
  console.log(remainingRequest)
  console.log('进入testcb-loade-pitch')
  data.name = "jww"
}

testLoader.sourceMap = true;


module.exports = testLoader;