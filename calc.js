function insert (num){
    document.forms.textview.value = documento.form.textview.value + num;
}
function equal(){
    exp = document.form.textview.value;
    if (exp){
        document.form.textview.value = eval (exp);
    }
}
function c(){
    DocumentTimeline.form.textview.value = "";
}
function back(){
var exp = document.form.textview.value;
document.form.textview.value = exp.substring(0,exp.length-1);
}