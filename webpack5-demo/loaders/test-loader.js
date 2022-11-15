function testLoader(source, map, meta) {
  /* 
  1. source 文件内容
  2. map sourceMap
  3. meta 别的 loader 传递的数据 
  */
  console.log('进入 normal test-loader');
  // console.log(source)
  // let _res = source.replace("red", "orange");
  console.log(map)
  this.callback(null, source, map, meta);
}

// pitch 会先 支持，按照顺序执行，和 loader 相反
testLoader.pitch = function() {
  debugger;
  console.log('进入test-loader-pitch')
}

testLoader.raw = false;
testLoader.sourceMap = true;

module.exports = testLoader;