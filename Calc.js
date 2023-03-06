function fun1() {

    var n1=parseInt(document.getElementById("txtf1").value);

    var n2=parseInt(document.getElementById("txtf2").value);

    var a=parseInt(document.getElementById("x").value);

    var t1= n2-n1;

    var tot = n1 + (a-1) * t1;

    document.getElementById("res").innerHTML=tot;

}

