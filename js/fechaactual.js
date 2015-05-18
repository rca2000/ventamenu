//this function will find today's date
function calendar(){
    var day=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'];
    var month=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'];
    var d=new Date();
    setText('calendar-day', day[d.getDay()]);
    setText('calendar-date', d.getDate());
    setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
};

//this function will set the text value of <p> tags
function setText(id, val){
    if(val < 10){
        val = '0' + val;    //add leading 0 if val < 10
    }
    document.getElementById(id).innerHTML = val;
};

//call calendar() when page load
window.onload = calendar;