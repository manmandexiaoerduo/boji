!(function() {
    function writeCode(code) {
        let codeContainer = document.getElementById('code')
        let drawContainer = document.getElementById('style-draw');
        let n = 0;
        let id = setInterval(() => {
            n += 1;
            codeContainer.innerHTML = code.substring(0, n);
            drawContainer.innerHTML = code.substring(0, n);
            codeContainer.scrollTop = codeContainer.scrollHeight;
            if (n >= code.length) {
                clearInterval(id);
            }
        }, 1)
    }
    let code = ` .face {
        position: absolute;
        width: 300px;
        height: 300px;
        margin: 0 auto;
        top: 50px;
        left: 50px;
        border-radius: 50%;
        border: 1px solid;
        background: rgb(240, 200, 165);
        z-index: 2;
    }
    
    .nose {
        position: absolute;
        width: 12px;
        height: 12px;
        top: 142px;
        left: 156px;
        border-radius: 50%;
        border-left: 2px solid;
        transform: rotate(120deg);
    }
    
    .mouse {
        position: absolute;
        width: 72px;
        height: 20px;
        top: 222px;
        border-radius: 50%;
        border: 2px solid;
        border-bottom: none;
        border-left: none;
        border-right: none;
    }
    
    .mouse-left {
        left: 82px;
        transform: rotate( 16deg);
    }
    
    .mouse-right {
        left: 148px;
        transform: rotate( -16deg);
    }
    
    .red {
        border-top: 1px solid red;
        position: absolute;
        transform: rotate(-45deg)
    }
    
    .red1 {
        width: 20px;
        height: 20px;
        top: 180px;
        left: 50px;
    }
    
    .red2 {
        width: 30px;
        height: 30px;
        top: 180px;
        left: 60px;
    }
    
    .red3 {
        width: 40px;
        height: 30px;
        top: 180px;
        left: 70px;
    }
    
    .red24 {
        width: 20px;
        height: 20px;
        top: 180px;
        left: 200px;
    }
    
    .red27 {
        width: 30px;
        height: 30px;
        top: 180px;
        left: 210px;
    }
    
    .red25 {
        width: 40px;
        height: 30px;
        top: 180px;
        left: 220px;
    }
    
    .eyes {
        width: 280px;
        height: 80px;
        position: absolute;
        top: 132px;
        left: 60px;
        z-index: 3;
        display: flex;
        justify-content: space-around;
    }
    
    .eye-common {
        background: white;
        border-radius: 50%;
        border-top: 5px solid;
        border-bottom: 1px solid;
    }
    
    .eye-common::after {
        content: '';
        display: block;
        border-radius: 50%;
        background: black;
        margin-top: 38px;
        margin-left: 34px;
    }
    
    .left-eye {
        width: 25%;
        height: 100%;
    }
    
    .left-eye::after {
        width: 25px;
        height: 25px;
    }
    
    .right-eye {
        width: 25%;
        height: 100%;
    }
    
    .right-eye::after {
        width: 25px;
        height: 25px;
        margin-left: 14px;
    }
    
    .ears {
        width: 40px;
        height: 80px;
        border-radius: 50%;
        background: rgb(240, 200, 165);
        position: absolute;
        top: 120px;
        z-index: 9;
    }
    
    .ears-left {
        border-left: 1px solid;
        left: -20px;
    }
    
    .ears-right {
        border-right: 1px solid;
        left: 280px;
    }
    
    .eyebrows {
        position: absolute;
        width: 280px;
        height: 80px;
        top: 52px;
        left: 10px;
        background: rgb(240, 200, 165);
        display: flex;
        justify-content: space-around;
        z-index: 10;
        border-radius: 50%;
    }
    
    .eyebrows>div {
        border-radius: 50%;
        border-top: 1px solid;
    }
    
    .left-eyebrow {
        width: 20%;
        height: 60%;
    }
    
    .right-eyebrow {
        width: 20%;
        height: 60%;
    }
    
    .hair {
        position: absolute;
        border-radius: 50%;
        background: rgb(52, 58, 60);
        z-index: 1;
    }
    
    .hair0 {
        top: 90px;
        left: 40px;
        width: 100px;
        height: 100px;
    }
    
    .hair1 {
        top: 50px;
        left: 80px;
        width: 150px;
        height: 100px;
    }
    
    .hair3 {
        position: absolute;
        top: 30px;
        left: 120px;
        width: 150px;
        height: 100px;
    }
    
    .hair4 {
        position: absolute;
        top: 60px;
        left: 205px;
        width: 150px;
        height: 100px;
        transform: rotate(40deg);
    }
    
    .hair5 {
        top: 100px;
        left: 230px;
        width: 150px;
        height: 100px;
        transform: rotate(40deg);
    }
    
    .hair21 {
        top: 110px;
        left: 30px;
        width: 100px;
        height: 37px;
        transform: rotate(-55deg);
        z-index: 2;
    }
    
    .hair23 {
        top: 60px;
        left: 86px;
        width: 100px;
        height: 37px;
        transform: rotate(-37deg);
        z-index: 2;
    }
    
    .hair24 {
        top: 45px;
        left: 170px;
        width: 110px;
        height: 37px;
        background: rgb(52, 58, 60);
        transform: rotate(10deg);
        z-index: 2;
    }
    
    .hair25 {
        top: 85px;
        left: 260px;
        width: 90px;
        height: 37px;
        transform: rotate(45deg);
        z-index: 2;
    }
    
    .hair26 {
        top: 130px;
        left: 295px;
        width: 90px;
        height: 28px;
        transform: rotate(65deg);
        z-index: 2;
    }
    
    .hair28 {
        top: 80px;
        left: 220px;
        width: 50px;
        height: 50px;
        border-radius: 0 50%;
        transform: rotate(91deg);
        z-index: 2;
    }
    
    .hair29 {
        top: 87px;
        left: 201px;
        width: 39px;
        height: 45px;
        border-radius: 0 50%;
        background: rgb(240, 200, 165);
        transform: rotate(70deg);
        z-index: 2;
    }
    
    .huangguan {
        width: 0;
        height: 0;
        position: absolute;
        transform: rotate(-30deg);
    }
    
    .huangguan1 {
        top: 50px;
        left: 80px;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid #d0c872;
    }
    
    .huangguan2 {
        top: 30px;
        left: 90px;
        border-left: 30px solid transparent;
        border-right: 33px solid transparent;
        border-bottom: 30px solid #d0c872;
    }
    
    .huangguan3 {
        top: 20px;
        left: 120px;
        border-left: 30px solid transparent;
        border-right: 33px solid transparent;
        border-bottom: 30px solid #d0c872;
    }`
    writeCode(code);
})()