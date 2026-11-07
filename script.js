// =========================
// 页面切换逻辑
// =========================
function switchPage(pageName) {
  // 隐藏所有内容区域
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });

  // 显示目标内容区域
  if (pageName === 'tasks') {
    document.getElementById('tasks-content').style.display = 'block';
  } else if (pageName === 'medals') {
    document.getElementById('medals-content').style.display = 'block';
  } else if (pageName === 'gallery') {
    document.getElementById('gallery-content').style.display = 'block';
  } else if (pageName === 'relations') {
    document.getElementById('relations-content').style.display = 'block';
  }

  // 更新按钮状态（可选）
  document.querySelectorAll('.button-group button').forEach(btn => {
    btn.style.background = 'rgba(255, 255, 255, 0.1)';
  });
  event.target.style.background = 'rgba(255, 255, 255, 0.2)';
}

// =========================
// 绑定按钮点击事件
// =========================
document.querySelectorAll('.button-group button').forEach(btn => {
  btn.addEventListener('click', function() {
    const page = this.dataset.page;
    switchPage(page);
  });
});

// =========================
// 图片点击放大
// =========================
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('g')) {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `<img src="${e.target.src}" alt="放大图">`;
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
  }
});

// =========================
// 默认显示勋章页
// =========================
document.addEventListener('DOMContentLoaded', () => {
  switchPage('medals');
});

// =========================
// 任意位置点击烟花
// =========================
document.addEventListener('click', function (e) {
  const firework = document.createElement('div');

  firework.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 99999;
    background: radial-gradient(circle, rgba(255,255,255,.95) 0%, rgba(180,220,255,.7) 40%, transparent 70%);
    animation: fireworkBoom .5s ease-out forwards;
  `;

  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 500);
});

// =========================
// 烟花动画
// =========================
const style = document.createElement('style');
style.textContent = `
@keyframes fireworkBoom {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    box-shadow:
      0 0 0 rgba(255,255,255,.8),
      0 0 0 rgba(180,220,255,.6);
  }
  50% {
    opacity: .8;
    transform: translate(-50%, -50%) scale(5);
    box-shadow:
      0 0 25px rgba(255,255,255,.6),
      0 0 50px rgba(180,220,255,.4);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(10);
    box-shadow:
      0 0 0 rgba(255,255,255,0),
      0 0 0 rgba(180,220,255,0);
  }
}
`;
document.head.appendChild(style);
