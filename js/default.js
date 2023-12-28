/* header gnb */
/* 초기설정 */
const menu = document.querySelector(".menu");
const gnb_bg = document.querySelector(".gnb_bg");//검정박스
const sub = document.querySelectorAll(".sub");
const hr = document.querySelector(".hr");

/* 메뉴설정 */
menu.addEventListener("mouseenter",AA); //오버(enter)
function AA(){
	sub.forEach(function(sb){ sb.style.height="250px" });//서브전체 보이기
	
	gnb_bg.style.height="250px";//검정박스 보이기
	//gnb_bg.style.zIndex="100";

	hr.style.transition="0.2s";
	hr.style.opacity="0";
}


menu.addEventListener("mouseleave",BB); //아웃(leave)
function BB(){
	sub.forEach(function(sb){ sb.style.height="0px" });//서브전체 안보이기
	gnb_bg.style.height="0px";//검정박스 안보이기
	
	hr.style.transition="0.2s 0.5s";
	hr.style.opacity="1";
}

/* visual */
const visualImg = document.querySelectorAll(".visual_img");
const visual_buttom_div = document.querySelectorAll(".visual_buttom_div");

let i = 0;
	visualImg.forEach(function(img){img.style.opacity="0";});
	visualImg[i].style.opacity="1";
	
	visual_buttom_div.forEach(function(ttt){ttt.style.backgroundColor="#e2e6e5";});
	visual_buttom_div[i].style.backgroundColor="#a62124";

function timer(){
	if ( i > 4 ) { i = 0; };
	visualImg.forEach(function(img){img.style.opacity="0";});
	visualImg[i].style.opacity="1";
	visualImg[i].style.transition="0.5s";
	
	visual_buttom_div.forEach(function(ttt){ttt.style.backgroundColor="#e2e6e5";});
	visual_buttom_div[i].style.backgroundColor="#a62124";
	i++;
}

setInterval(timer, 4100);


function visual_img_conversion(i){
	visualImg.forEach(function(img){img.style.opacity="0";});
	visualImg[i].style.opacity="1";
	visualImg[i].style.transition="0s";
	
	
	visual_buttom_div.forEach(function(ttt){ttt.style.backgroundColor="#e2e6e5";});
	visual_buttom_div[i].style.backgroundColor="#a62124";
}