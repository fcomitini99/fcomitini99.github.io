var unityInstance = UnityLoader.instantiate("unityContainer", "Build/WebGLBuild.json", {onProgress: UnityProgress});

document.addEventListener('DOMContentLoaded', function () {
  var fsBtn = document.querySelector('.fullscreen');
  if (fsBtn) {
    fsBtn.addEventListener('click', function () {
      unityInstance.SetFullscreen(1);
    });
  }
});
