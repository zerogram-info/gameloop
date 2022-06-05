
// main
async function main() {
   
    if(document.readyState !== "complete"){
        await new Promise<any>((rs)=>{
           
            window.addEventListener("load",rs);
        });
    }

    let div = document.getElementById("hello-world");
    if(!div)return;
    div.textContent = "Hello World!"

    // 今回CSSを使わないので
    document.body.style.overflow = "hidden";//はみ出した部分は表示しない
    div.style.position = "absolute";//自分で表示位置を指定
    div.style.whiteSpace = "nowrap";//折り返し禁止
    div.style.fontSize = "200%";
   
    let pos = 0;
    setInterval(()=>{
        if(!div)return;
        div.style.left = "" + pos + "%";
        div.style.top = "" + pos + "%";
        pos += 1;
        if(pos > 100){
            pos = 0;
        }

    }, 1000/60);

   
}

// やってはいけないゲームループ
function gameLoop(){
    while(1){
        // ゲームの処理や描画
    }
    //無限ループ
}

main();


