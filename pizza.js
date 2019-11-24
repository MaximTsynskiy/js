var $ = function (id) {
    return document.getElementById(id);
};

// id
var lb = $("leftbar"), rb = $("rightbar"), totalPrice = $("totalPrice"), becon = $("1becon"), grib = $("2grib"), kolbasa = $("3kolbasa"), olivki = $("4olivki"), spise = $("5spise"), siiirrr = $("6siiirrr"), smallPizza = $("smallPizza"), changeFon = $("changeFon"), totalPrice = $("totalPrice"), flag = true;

// смена фона
changeFon.addEventListener("click", changeFone);
                               
    function changeFone () {
        if(flag){
            document.body.style.backgroundImage = "url(img/1584.jpg)";
            flag = false;}
        else{
            document.body.style.backgroundImage = "url(img/269.jpg)";
            flag = true;}   
    }
// рассчет стоимости пицыы и добавление ингридиентов
lb.addEventListener("click", pizzaCreate);
                        
    function pizzaCreate () {
        
        if (smallPizza.checked) {totalPrice.value = smallPizza.value;}
        if (middlePizza.checked) {totalPrice.value = middlePizza.value;}
        if (bigPizza.checked) {totalPrice.value = bigPizza.value;}


        if (igrPizza.in1.checked) {
            becon.style.display = "block";
            totalPrice.value = parseInt(totalPrice.value) + parseInt(igrPizza.in1.value);
        }
        else {becon.style.display = "none";}
        if (igrPizza.in2.checked) {
            grib.style.display = "block";
            totalPrice.value = parseInt(totalPrice.value) + parseInt(igrPizza.in2.value);
        }
        else {grib.style.display = "none";}
        if (igrPizza.in3.checked) {
            kolbasa.style.display = "block";
            totalPrice.value = parseInt(totalPrice.value) + parseInt(igrPizza.in3.value);
        }
        else {kolbasa.style.display = "none";}
        if (igrPizza.in4.checked) {
            olivki.style.display = "block";
            totalPrice.value = parseInt(totalPrice.value) + parseInt(igrPizza.in4.value);
        }
        else {olivki.style.display = "none";}
        if (igrPizza.in5.checked) {
            spise.style.display = "block";
            totalPrice.value = parseInt(totalPrice.value) + parseInt(igrPizza.in5.value);
        }
        else {spise.style.display = "none";}
        if (igrPizza.in6.checked) {
            siiirrr.style.display = "block";
            totalPrice.value = parseInt(totalPrice.value) + parseInt(igrPizza.in6.value);
        }
        else {siiirrr.style.display = "none";}

    };

// watwrmarks
var waterarkName = "Введите ваше имя";
var waterarkPhone = "телефон 097-0000000";
var waterarkAddress = "Введите ваш адрес";
// заполнение watermark
var f1name = document.form1.fName;
var f1phone = document.form1.phone;
var f1address = document.form1.address;

// заполнение watermark
function markInput(){
    
    f1name.placeholder = waterarkName;
    f1name.style.color = "gray";
    f1name.style.fontStyle = "italic";
    
    f1phone.placeholder = waterarkPhone;
    f1phone.style.color = "gray";
    f1phone.style.fontStyle = "italic";
    
    f1address.placeholder = waterarkAddress;
    f1address.style.color = "gray";
    f1address.style.fontStyle = "italic";

}

markInput();
// onblur clear
clearInputs();

function clearInputs () {
    f1name.addEventListener("focus", function(){
        if(this.placeholder == waterarkName) {this.placeholder = ""}; 
    })
    f1phone.addEventListener("focus", function(){
        if(this.placeholder == waterarkPhone) {this.placeholder = ""};
    })
    f1address.addEventListener("focus", function(){
        if(this.placeholder == waterarkAddress) {this.placeholder = ""};
        
    })
    f1name.addEventListener("blur", function(){
        if(this.placeholder == "") {this.placeholder = waterarkName};
    })
    f1phone.addEventListener("blur", function(){
        if(this.placeholder == "") {this.placeholder = waterarkPhone}
    })
    f1address.addEventListener("blur", function(){
        if(this.placeholder == "") {this.placeholder = waterarkAddress};
    })
}


        