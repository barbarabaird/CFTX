$(document).ready(function () {

    //assign button click event to call function to create html table dynamically

    $("#three").click(function(){
        var table = $('#3xclasses');
       if ($(table).length >0) {
            $(table).remove();
        }
        else  {
            Create3xHtmlTable('3xclasses');
        };

    })

    $("#two").click(function(){
        var table = $('#2xclasses');
       if ($(table).length >0) {
            $(table).remove();
        }
        else  {
            Create2xHtmlTable('2xclasses');
        };

    })

    $("#sat").click(function(){
        var table = $('#satClasses');
       if ($(table).length >0) {
            $(table).remove();
        }
        else  {
            CreateSatHtmlTable('satClasses');
        };

    })

})


function Create3xHtmlTable(classesFile) {


    //Clear result div
   // $("#resultArea").html("");

    //Crate table html tag
    var table = $("<table id=\"" + classesFile + "\" border=1></table>").appendTo("#threeresultArea");

    //Create table header row
    var rowHeader = $("<tr></tr>").appendTo(table);
    $("<td></td>").text("Days").appendTo(rowHeader);
    $("<td></td").text("Time").appendTo(rowHeader);
    $("<td></td>").text("Coach").appendTo(rowHeader);

    $.getJSON(classesFile + ".json", function (json) {
        var tr=[];
        
        for (var i = 0; i < json['classes'].length; i++) {
            tr.push('<tr>');


            tr.push("<td>" + json['classes'][i]['day'] + "</td>");
            tr.push("<td>" + json['classes'][i]['time'] + "</td>");
            tr.push("<td>" + json['classes'][i]['coach']  + "</td>");
            tr.push('</tr>');
        }

       
        $(table).append($(tr.join('')));
    });



};    


function Create2xHtmlTable(classesFile) {


    //Clear result div
   // $("#resultArea").html("");

    //Crate table html tag
    var table = $("<table id=\"" + classesFile + "\" border=1></table>").appendTo("#tworesultArea");

    //Create table header row
    var rowHeader = $("<tr></tr>").appendTo(table);
    $("<td></td>").text("Days").appendTo(rowHeader);
    $("<td></td").text("Time").appendTo(rowHeader);
    $("<td></td>").text("Coach").appendTo(rowHeader);

    $.getJSON(classesFile + ".json", function (json) {
        var tr=[];
        
        for (var i = 0; i < json['classes'].length; i++) {
            tr.push('<tr>');


            tr.push("<td>" + json['classes'][i]['day'] + "</td>");
            tr.push("<td>" + json['classes'][i]['time'] + "</td>");
            tr.push("<td>" + json['classes'][i]['coach']  + "</td>");
            tr.push('</tr>');
        }

       
        $(table).append($(tr.join('')));
    });



};  



function CreateSatHtmlTable(classesFile) {


    //Clear result div
   // $("#resultArea").html("");

    //Crate table html tag
    var table = $("<table id=\"" + classesFile + "\" border=1></table>").appendTo("#satresultArea");

    //Create table header row
    var rowHeader = $("<tr></tr>").appendTo(table);
    $("<td></td>").text("Days").appendTo(rowHeader);
    $("<td></td").text("Time").appendTo(rowHeader);
    $("<td></td>").text("Coach").appendTo(rowHeader);

    $.getJSON(classesFile + ".json", function (json) {
        var tr=[];
        
        for (var i = 0; i < json['classes'].length; i++) {
            tr.push('<tr>');


            tr.push("<td>" + json['classes'][i]['day'] + "</td>");
            tr.push("<td>" + json['classes'][i]['time'] + "</td>");
            tr.push("<td>" + json['classes'][i]['coach']  + "</td>");
            tr.push('</tr>');
        }

       
        $(table).append($(tr.join('')));
    });



};  