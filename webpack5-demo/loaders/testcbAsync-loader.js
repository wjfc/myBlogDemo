function testLoader(source, map, meta) {
  /* 
  1. source 文件内容
  2. map sourceMap
  3. meta 别的 loader 传递的数据 
  */
  console.log('进入  normal  testcbAsync-loader');
  let _res = source.replace("#fff", "red");
  console.log(map)
  /* 
  参数1: 代表是否有错
  参数2: 处理后的内容
  参数3: sourceMap 继续传递给 sourceMap
  参数4: 给下一个loader 传递参数
  */
  let callback = this.async();
  setTimeout(() => {
    callback(null, _res, map, meta);
  }, 1000)
}

testLoader.pitch = function() {
  console.log('进入testcbAsync-loade-pitch')
}
testLoader.sourceMap = true;

module.exports = testLoader;