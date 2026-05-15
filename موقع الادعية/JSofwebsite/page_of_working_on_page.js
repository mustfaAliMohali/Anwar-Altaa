
let h3 = document.createElement("h3");
let div = document.createElement("div");


div.style.zIndex = "1";
div.style.width = "77vh";
div.style.height = "90vh";
div.style.position = "relative";



h3.innerText = "يتم العمل والتدقيق على نص الدعاء حاليا ...  يرجى مراجعة الدعاء بعد ايام ...حاليا لا يعمل في الموقع الا القران الكريم";
h3.style.color = "#000000";
h3.style.fontSize = "30px";
h3.style.position = "relative";
h3.style.top = "15%";
h3.style.right = "5%";



document.body.innerHTML = "<div></div>"

header = `<header id="headerr">
        <b class="title">انوار الطاعة</b>
        <div>
            <a id="headlink1" href="../home/d3aa_home.html">الرئيسية</a>
            <a id="headlink2" href="../other/other.html">تصفح الكل</a>
        </div>
    </header>`;

document.body.innerHTML = header;


div.appendChild(h3);
document.body.appendChild(div);