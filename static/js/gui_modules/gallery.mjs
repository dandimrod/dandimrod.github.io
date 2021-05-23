function gallery(element, gallery) {
    let currentIndex = 0;
    element.innerHTML = `
        <i class="fas fa-chevron-left previous"></i>
        <img class="picture">
        <i class="fas fa-chevron-right next"></i>
        <div class="nav"></div>
    `;
    const previous = element.querySelector('.previous');
    const img = element.querySelector('.picture');
    const next = element.querySelector('.next');
    const nav = element.querySelector('.nav');
    previous.onclick = ()=>{
        currentIndex--;
        if(currentIndex<0){
            currentIndex = gallery.length-1;
        }
        loadImg();
    }
    next.onclick = ()=>{
        currentIndex++;
        if(currentIndex>gallery.length-1){
            currentIndex = 0;
        }
        loadImg();
    }
    for (let index = 0; index < gallery.length; index++) {
        const ball = document.createElement('ball');
        ball.className = 'ball';
        ball.id = 'ball-'+index;
        ball.onclick=()=>{
            currentIndex = index;
            loadImg();
        }
        nav.appendChild(ball);
    }
    function loadImg() {
        img.src = gallery[currentIndex];
        nav.querySelector('.ball.active')?.classList?.remove('active');
        nav.querySelector('.ball#ball-'+currentIndex).classList.add('active');
    }

    const zoomImg = function () {
        const lbBack = document.createElement('div');
        lbBack.id='lb-back';
        const lb = document.createElement('div');
        lb.id='lb-img';
        lbBack.appendChild(lb)
        lbBack.addEventListener("click", function () {
            this.classList.remove("show");
            document.body.removeChild(lbBack);
        })
        const clone = this.cloneNode();
    
        lb.innerHTML = "";
        lb.appendChild(clone);
    
        lbBack.classList.add("show");
        document.body.appendChild(lbBack);
    };
    img.addEventListener("click", zoomImg);

    loadImg();
};

export default gallery;