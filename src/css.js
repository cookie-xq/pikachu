const string = `
    .skin *{margin: 0;padding: 0;box-sizing: border-box;}
    .skin *::after, .skin *::before{box-sizing: border-box;}

    .skin{
        background: #ffe600;
        min-height: 50vh;
        position: relative;
    }
    
    .nose{
        position: absolute;
        border: 10px solid black;
        border-color: black transparent;
        border-bottom: none;
        width: 0px;
        height: 0px;
        left: 50%;
        top: 145px;
        margin-left: -10px;
        z-index: 10;
    }
    
    @keyframes wave {
        0%{
            transform: rotate(0deg);
        }
        33%{
            transform: rotate(5deg);
        }
        66%{
            transform: rotate(-5deg);
        }
        100%{
            transform: rotate(0deg);
        }
    }
    
    .nose:hover {
        transform-origin: center bottom;
        animation: wave 200ms infinite;
    }
    
    .yuan{
        position: absolute;
        width: 20px;
        height: 6px;
        top: -16px;
        left: -10px;
        border-radius: 10px 10px 0 0;
        background: black;
    }
    
    .eye{
        position: absolute;
        width: 64px;
        height: 64px;
        left: 50%;
        top: 100px;
        margin-left: -32px;
        background: #2e2e2e;
        border: 2px solid #000;
        border-radius: 50%;
    }
    
    .eye::before{
        content: '';
        display: block;
        position: relative;
        border: 3px solid #000;
        width: 31px;
        height: 31px;
        background: #fff;
        border-radius: 50%;
        left: 8px;
        top: 4px;
    }
    
    .eye.left{
        transform: translateX(-100px);
    }
    
    .eye.right{
        transform: translateX(100px);
    }
    
    .mouth{
        position: absolute;
        width: 200px;
        height: 200px;
        left: 50%;
        top: 170px;
        margin-left: -100px;
    }
    
    .mouth .up{
        position: relative;
        top:-20px;
        z-index: 1;
    }
    
    .mouth .up .lip{
        position: relative;
        position: absolute;
        border:3px solid black;
        height: 30px;
        width: 100px;
        border-top-color:transparent;
        /* border-right-color: transparent; */
        left: 50%;
        margin-left: -50px;
        background: #ffe600;
    }
    .mouth .up .lip.left{  
        border-radius: 0 0 0 50px;   
        transform: rotate(-15deg) translateX(-53px);
    }
    .mouth .up .lip.right{
        border-radius: 0 0 50px 0;
        transform: rotate(15deg) translateX(53px);
    }
    
    .mouth .up .lip::before{
        position: absolute;
        content: '';
        display: block;
        width: 7px;
        height: 30px;
        bottom: 0;
        background: #ffe600;
    }
    .mouth .up .lip.left::before{
        right: -6px;
    }
    .mouth .up .lip.right::before{
        left: -6px;
    }
    
    .mouth .down {
        height: 180px;
        width: 100%;
        position: absolute;
        top: 5px;
        overflow: hidden;
    }
    .mouth .down .yuan1{
        position: absolute;
        border:3px solid black;
        width: 150px;
        height: 1000px;
        bottom: 0;
        left: 50%;
        margin-left: -75px;
        border-radius: 75px/300px;
        background: #9b000a;
        overflow: hidden;
    }
    .mouth .down .yuan1 .yuan2{
        width: 200px;
        height: 300px;
        background: #ff485f;
        position: absolute;
        left: 50%;
        bottom: -160px;
        margin-left: -100px;
        border-radius: 100px;
    }
    .face {
        position: absolute;
        left: 50%;
        border: 3px solid black;
        width: 88px;
        height: 88px;
        top: 200px;
        margin-left: -44px;
        z-index: 3;
    }
    .face > img {
        position: absolute;
        left: 50%;
        top: 50%;
    }
    .face.left{
        transform: translateX(-180px);
        background: #ff0000;
        border-radius: 50%;
    }
    .face.left > img{
        transform: rotateY(180deg);
        transform-origin: 0 0;
    }
    .face.right{
        transform: translateX(180px);
        background: #ff0000;
        border-radius: 50%;
    }
    /*** 代码区域可自由查看代码内容~ ***/
`

export default string