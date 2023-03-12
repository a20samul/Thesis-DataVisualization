// naming the div inside index.html as the variable canvasContainer
var canvasContainer = document.getElementById('canvasContainer');

// Specifying canvas as rendering method
var myCanvasMap = echarts.init(canvasContainer, null, {
  renderer: 'canvas',
  useDirtyRect: false
});