function createVideoWidget(inner) {
    const bodyEl = document.body;
    let videoEl = document.createElement('div');
    videoEl.id = 'video-widget';
    videoEl.innerHTML = inner;
    bodyEl.append(videoEl);
    document.getElementById('video-easy').addEventListener('click', function () {
        if (statusAction === false) {
            if (status === false) {
                statusAction = true
                f()
            } else if (status === true) {
                statusAction = true
                g()
            }
        }
    })
}

function f() {
    status = true
    if (oldWidth !== 200) {
        setTimeout(() => {
            oldWidth += 1
            document.getElementById('video-easy').style.maxWidth = oldWidth + 'px'
            f()
        }, 0.1)
    } else {
        statusAction = false
    }
}

function g() {
    status = false
    if (oldWidth !== 150) {
        setTimeout(() => {
            oldWidth -= 1
            document.getElementById('video-easy').style.maxWidth = oldWidth + 'px'
            g()
        }, 1)
    }
    else {
        statusAction = false
    }
}
