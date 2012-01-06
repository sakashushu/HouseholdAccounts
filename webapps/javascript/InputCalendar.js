/*----------------------------------------------------------
 * <<機能名>>
 *   カレンダー入力機能
 * 
 * <<概要>>
 *   ボタンを押下されたらカレンダーを表示する。
 *   また、カレンダー画面で日付をクリックされたら、
 *   選択した日付を指定されたフォーマットにて、
 *   テキストフィールドにセットする。
 ---------------------------------------------------------*/

/*
 * 以下、カレンダー入力機能JavaScript全体で使用する変数を定義する。
 */
// x position (-1 if to appear below control)
var jscalendarFixedX = -1;

// y position (-1 if to appear below control)
var jscalendarFixedY = -1;

var jscalendarCrossobj, jscalendarCrossMonthObj, jscalendarCrossYearObj,
    jscalendarMonthSelected, jscalendarYearSelected, jscalendarDateSelected,
    jscalendarOmonthSelected, jscalendarOyearSelected, jscalendarOdateSelected,
    jscalendarMonthConstructed, jscalendarYearConstructed, jscalendarIntervalID1, jscalendarIntervalID2,
    jscalendarTimeoutID1, jscalendarTimeoutID2, jscalendarCtlToPlaceValue, jscalendarCtlNow, jscalendarDateFormat, jscalendarNStartingYear;

var jscalendarBPageLoaded = false;

var jscalendarIe       = document.all;

var jscalendarDom      = document.getElementById;

var jscalendarNs4      = document.layers;

var jscalendarToday    = new Date();

var jscalendarDateNow  = jscalendarToday.getDate();

var jscalendarMonthNow = jscalendarToday.getMonth();

var jscalendarYearNow  = jscalendarToday.getYear();

var jscalendarBShow    = false;

/* 
 * hides <select> and <applet> objects (for IE only) 
 */
function jscalendarHideElement( elmID, overDiv ){
  if( jscalendarIe ){
    for( i = 0; i < document.all.tags( elmID ).length; i++ ){
      obj = document.all.tags( elmID )[i];
      if( !obj || !obj.offsetParent ){
        continue;
      }

      // Find the element's offsetTop and offsetLeft relative to the BODY tag.
      objLeft   = obj.offsetLeft;
      objTop    = obj.offsetTop;
      objParent = obj.offsetParent;

      while( objParent.tagName.toUpperCase() != "BODY" ){
        objLeft  += objParent.offsetLeft;
        objTop   += objParent.offsetTop;
        objParent = objParent.offsetParent;
      }

      objHeight = obj.offsetHeight;
      objWidth = obj.offsetWidth;

      if(( overDiv.offsetLeft + overDiv.offsetWidth ) <= objLeft );
      else if(( overDiv.offsetTop + overDiv.offsetHeight ) <= objTop );
      else if( overDiv.offsetTop >= ( objTop + objHeight ));
      else if( overDiv.offsetLeft >= ( objLeft + objWidth ));
      else{
        obj.style.visibility = "hidden";
      }
    }
  }
}

/*
 * unhides <select> and <applet> objects (for IE only)
 */
function jscalendarShowElement( elmID ){
  if( jscalendarIe ){
    for( i = 0; i < document.all.tags( elmID ).length; i++ ){
      obj = document.all.tags( elmID )[i];

      if( !obj || !obj.offsetParent ){
        continue;
      }

      obj.style.visibility = "";
    }
  }
}

function jscalendarHolidayRec (d, m, y, desc){
    this.d = d;
    this.m = m;
    this.y = y;
    this.desc = desc;
}

var jscalendarHolidaysCounter = 0;
var jscalendarHolidays = new Array();

function jscalendarAddHoliday (y, m, d, desc){
    jscalendarHolidays[jscalendarHolidaysCounter++] = new jscalendarHolidayRec ( d, m, y, desc );
}

if (jscalendarDom){
    document.write("<div onclick='jscalendarBShow=true' id='calendar'  class='" + jscalendarThemePrefix + "-div-style'>");
    document.write("<table width='220' class='" + jscalendarThemePrefix + "-table-style'>");
    document.write("<tr class='" + jscalendarThemePrefix + "-title-background-style'>");
    document.write("<td><table width='218'><tr><td class='" + jscalendarThemePrefix + "-title-style'><span id='caption'></span></td>");
    document.write("<td align=right>");
    document.write("<a href='javascript:jscalendarHideCalendar();'>");
    document.write("<img src='" + jscalendarImgDir + jscalendarThemePrefix + 
        "-close.gif' width='15' height='13' border='0' onmousemove='window.status=\"\"'>");
    document.write("</a></td></tr></table></td></tr><tr>");
    document.write("<td class='" + jscalendarThemePrefix + "-body-style'><span id='content'></span></td></tr>");
    document.write("<tr class='" + jscalendarThemePrefix + "-today-style'>");
    document.write("<td class='" + jscalendarThemePrefix + "-today-lbl-style'>");
    document.write("<span id='lblToday'></span></td></tr>");
    document.write("</table></div><div id='selectMonth' class='" + jscalendarThemePrefix + "-div-style'></div>");
    document.write("<div id='selectYear' class='" + jscalendarThemePrefix + "-div-style'></div>");
}

function jscalendarSwapImage(srcImg, destImg){
    if (jscalendarIe) {
        document.getElementById(srcImg).setAttribute("src",jscalendarImgDir + destImg);
    }
}

function jscalendarInit(){
    if (!jscalendarNs4){
        if (!jscalendarIe) {
            jscalendarYearNow += 1900
        }

        jscalendarCrossobj = (jscalendarDom) ? document.getElementById("calendar").style : jscalendarIe ? document.all.calendar : document.calendar;
        jscalendarHideCalendar();
        jscalendarCrossMonthObj = (jscalendarDom) ? document.getElementById("selectMonth").style : 
            jscalendarIe ? document.all.selectMonth : document.selectMonth;
        jscalendarCrossYearObj = (jscalendarDom) ? document.getElementById("selectYear").style : 
            jscalendarIe ? document.all.jscalendarSelectYear : document.jscalendarSelectYear;

        jscalendarMonthConstructed=false;
        jscalendarYearConstructed=false;

        //カレンダー下部、現在日付リンク生成
        var localtoday = "";
        if (localja) {
            localtoday = jscalendarYearNow +  "年" +  jscalendarMonthName[jscalendarMonthNow] +  "" +  jscalendarDateNow + "日";
        } else {
            localtoday = jscalendarDayName[(jscalendarToday.getDay()==-1) ? 6 : jscalendarToday.getDay()] +
                ", " + jscalendarDateNow + " " + jscalendarMonthName[jscalendarMonthNow].substring(0,3)  + " " + jscalendarYearNow;
        }

        document.getElementById("lblToday").innerHTML = 
            jscalendarTodayString + " <a onmousemove='window.status=\"\"' class='" + jscalendarThemePrefix + "-today-style' " +
            "href='javascript:jscalendarMonthSelected=jscalendarMonthNow;jscalendarYearSelected=jscalendarYearNow;jscalendarConstructCalendar();'>" + 
            localtoday + "</a>";

        //カレンダー上部左、前月移動ボタン生成
        sHTML1 = "<span id='spanLeft'  class='" + jscalendarThemePrefix + "-title-control-normal-style' " + 
                 "onmouseover='jscalendarSwapImage(\"changeLeft\",\""+jscalendarThemePrefix+"-left2.gif\");  this.className=\"" + jscalendarThemePrefix + 
                 "-title-control-select-style\";' onclick='javascript:jscalendarDecMonth()' onmouseout='clearInterval(jscalendarIntervalID1);" +
                 "jscalendarSwapImage(\"changeLeft\",\""+jscalendarThemePrefix+"-left1.gif\"); this.className=\"" + jscalendarThemePrefix + 
                 "-title-control-normal-style\"; window.status=\"\"' onmousedown='clearTimeout(jscalendarTimeoutID1);" +
                 "jscalendarTimeoutID1=setTimeout(\"jscalendarStartDecMonth()\",500)' " +
                 " onmouseup='clearTimeout(jscalendarTimeoutID1);clearInterval(jscalendarIntervalID1)'>&nbsp" +
                 "<img id='changeLeft' src='"+jscalendarImgDir+jscalendarThemePrefix+"-left1.gif' width=10 height=11 border=0>&nbsp</span>&nbsp;";

        //カレンダー上部左、次月移動ボタン生成
        sHTML1+= "<span id='spanRight' class='" + jscalendarThemePrefix + "-title-control-normal-style' " +
                 "onmouseover='jscalendarSwapImage(\"changeRight\",\""+jscalendarThemePrefix+"-right2.gif\");this.className=\"" +
                 jscalendarThemePrefix + "-title-control-select-style\";' onmouseout='clearInterval(jscalendarIntervalID1);" +
                 "jscalendarSwapImage(\"changeRight\",\""+jscalendarThemePrefix+"-right1.gif\"); " +
                 "this.className=\"" + jscalendarThemePrefix + "-title-control-normal-style\"; window.status=\"\"' " +
                 "onclick='jscalendarIncMonth()' onmousedown='clearTimeout(jscalendarTimeoutID1);" +
                 "jscalendarTimeoutID1=setTimeout(\"jscalendarStartIncMonth()\",500)'  " +
                 "onmouseup='clearTimeout(jscalendarTimeoutID1);clearInterval(jscalendarIntervalID1)'>&nbsp" +
                 "<img id='changeRight' src='"+jscalendarImgDir+jscalendarThemePrefix+"-right1.gif' width=10 height=11 border=0>&nbsp</span>&nbsp";

        //カレンダー上部中、年指定プルダウン生成
        sHTML1+= "<span id='spanYear'  class='" + jscalendarThemePrefix + "-title-control-normal-style' " +
                 "onmouseover='jscalendarSwapImage(\"changeYear\",\""+jscalendarThemePrefix+"-drop2.gif\");  this.className=\"" + jscalendarThemePrefix +
                 "-title-control-select-style\";' onmouseout='jscalendarSwapImage(\"changeYear\",\""+jscalendarThemePrefix+"-drop1.gif\"); " +
                 "this.className=\"" + jscalendarThemePrefix + "-title-control-normal-style\"; " +
                 "window.status=\"\"' onclick='jscalendarPopUpYear()'></span>&nbsp;";

        //カレンダー上部中、月指定プルダウン生成
        sHTML1+= "<span id='spanMonth' class='" + jscalendarThemePrefix + "-title-control-normal-style' " +
                 "onmouseover='jscalendarSwapImage(\"changeMonth\",\""+jscalendarThemePrefix+"-drop2.gif\"); this.className=\"" + jscalendarThemePrefix + 
                 "-title-control-select-style\";' onmouseout='jscalendarSwapImage(\"changeMonth\",\""+jscalendarThemePrefix+"-drop1.gif\"); " +
                 "this.className=\"" + jscalendarThemePrefix + "-title-control-normal-style\"; " +
                 "window.status=\"\"' onclick='jscalendarPopUpMonth()'></span>&nbsp;";

        document.getElementById("caption").innerHTML  = sHTML1

        jscalendarBPageLoaded=true
    }
}

function jscalendarHideCalendar(){
    jscalendarCrossobj.visibility="hidden";
    if (jscalendarCrossMonthObj != null) {
        jscalendarCrossMonthObj.visibility="hidden";
    }
    if (jscalendarCrossYearObj !=   null) {
        jscalendarCrossYearObj.visibility="hidden";
    }
    jscalendarShowElement( 'SELECT' );
    jscalendarShowElement( 'APPLET' );
}

function jscalendarPadZero(num) {
    return (num < 10)? '0' + num : num;
}

function jscalendarConstructDate(d,m,y){
    sTmp = jscalendarDateFormat;
    sTmp = sTmp.replace ("dd","<e>");
    sTmp = sTmp.replace ("d","<d>");
    sTmp = sTmp.replace ("<e>",jscalendarPadZero(d));
    sTmp = sTmp.replace ("<d>",d);
    sTmp = sTmp.replace ("mmmm","<p>");
    sTmp = sTmp.replace ("MMMM","<p>");
    sTmp = sTmp.replace ("mmm","<o>");
    sTmp = sTmp.replace ("MMM","<o>");
    sTmp = sTmp.replace ("mm","<n>");
    sTmp = sTmp.replace ("MM","<n>");
    sTmp = sTmp.replace ("m","<m>");
    sTmp = sTmp.replace ("M","<m>");
    sTmp = sTmp.replace ("<m>",m+1);
    sTmp = sTmp.replace ("<n>",jscalendarPadZero(m+1));
    sTmp = sTmp.replace ("<o>",jscalendarMonthName[m]);
    sTmp = sTmp.replace ("<p>",jscalendarMonthName[m]);
    sTmp = sTmp.replace ("yyyy",y);
    return sTmp.replace ("yy",jscalendarPadZero(y%100));
}

function jscalendarCloseCalendar() {
    var sTmp;

    jscalendarHideCalendar();
    jscalendarCtlToPlaceValue.value = jscalendarConstructDate(jscalendarDateSelected,jscalendarMonthSelected,jscalendarYearSelected);
}


/***************************************************************************
 * 月のプルダウンリスト生成部
 ***************************************************************************/

function jscalendarStartDecMonth(){
    jscalendarIntervalID1=setInterval("jscalendarDecMonth()",80);
}

function jscalendarStartIncMonth(){
    jscalendarIntervalID1=setInterval("jscalendarIncMonth()",80);
}

/**
 *  月プルダウンインクリメントボタン押下時の動作
 */
function jscalendarIncMonth () {
    jscalendarMonthSelected++;
    if (jscalendarMonthSelected > 11) {
        jscalendarMonthSelected = 0;
        jscalendarYearSelected++;
    }
    jscalendarConstructCalendar();
}

/**
 *  月プルダウンデクリメントボタン押下時の動作
 */
function jscalendarDecMonth () {
    jscalendarMonthSelected--;
    if (jscalendarMonthSelected < 0) {
        jscalendarMonthSelected = 11;
        jscalendarYearSelected--;
    }
    jscalendarConstructCalendar()
}

function jscalendarConstructMonth() {
    jscalendarPopDownYear();
    if (!jscalendarMonthConstructed) {
        sHTML = "";
        for (i=0; i < 12; i++) {
            sName = jscalendarMonthName[i];
            if (i == jscalendarMonthSelected){
                sName = "<B>" + sName + "</B>";
            }
            sHTML += "<tr><td id='m" + i + "' onmouseover='this.className=\"" + jscalendarThemePrefix + 
                     "-dropdown-select-style\"' onmouseout='this.className=\"" + jscalendarThemePrefix + 
                     "-dropdown-normal-style\"' onclick='jscalendarMonthConstructed=false;jscalendarMonthSelected="
                     + i + ";jscalendarConstructCalendar();jscalendarPopDownMonth();event.cancelBubble=true' >&nbsp;"
                     + sName + "&nbsp;</td></tr>";
        }

        if (localja) {
            document.getElementById("selectMonth").innerHTML = "<table width='45' class='" + jscalendarThemePrefix + 
                "-dropdown-style'  cellspacing=0 onmouseover='clearTimeout(jscalendarTimeoutID1)'  "+
                "onmouseout='clearTimeout(jscalendarTimeoutID1);jscalendarTimeoutID1=setTimeout"+
                "(\"jscalendarPopDownMonth()\",100);event.cancelBubble=true'>" +   sHTML + "</table>";
        } else {
            document.getElementById("selectMonth").innerHTML = "<table width='77' class='" + jscalendarThemePrefix + 
                "-dropdown-style'  cellspacing=0 onmouseover='clearTimeout(jscalendarTimeoutID1)'  "+
                "onmouseout='clearTimeout(jscalendarTimeoutID1);jscalendarTimeoutID1=setTimeout"+
                "(\"jscalendarPopDownMonth()\",100);event.cancelBubble=true'>" +   sHTML + "</table>";
        }

        jscalendarMonthConstructed=true;
    }
}

function jscalendarPopUpMonth() {
    var leftOffset;

    jscalendarConstructMonth();
    jscalendarCrossMonthObj.visibility = (jscalendarDom||jscalendarIe) ? "visible" : "show";

    leftOffset = parseInt(jscalendarCrossobj.left) + document.getElementById("spanMonth").offsetLeft;
    if (jscalendarIe) {
        leftOffset += 6;
    }
    jscalendarCrossMonthObj.left = leftOffset;
    jscalendarCrossMonthObj.top = parseInt(jscalendarCrossobj.top) + 26;

    jscalendarHideElement( 'SELECT', document.getElementById("selectMonth") );
    jscalendarHideElement( 'APPLET', document.getElementById("selectMonth") );
}


function jscalendarPopDownMonth()   {
    jscalendarCrossMonthObj.visibility= "hidden";
}



/***************************************************************************
 * 年のプルダウンリスト生成部
 ***************************************************************************/
var yearString = "";
if (localja) {
    yearString = "年";
}

/**
 *  年プルダウンインクリメントボタン押下時の動作
 */
function jscalendarIncYear() {
    for (i = 0; i < 10; i++){
        newYear = (i + jscalendarNStartingYear) + 1;
        if (newYear == jscalendarYearSelected) {
            txtYear = "&nbsp;<B>" + newYear + yearString + "</B>&nbsp;";
        } else {
            txtYear = "&nbsp;" + newYear + yearString + "&nbsp;";
        }
        document.getElementById("y" + i).innerHTML = txtYear;
    }
    jscalendarNStartingYear++;
    jscalendarBShow = true;
}

/**
 *  年プルダウンデクリメントボタン押下時の動作
 */
function jscalendarDecYear() {
    for (i=0; i < 10; i++){
        newYear = (i+jscalendarNStartingYear) - 1;
        if (newYear == jscalendarYearSelected) {
            txtYear = "&nbsp;<B>" + newYear + yearString + "</B>&nbsp;";
        } else {
            txtYear = "&nbsp;" + newYear + yearString + "&nbsp;";
        }
        document.getElementById("y" + i).innerHTML = txtYear;
    }
    jscalendarNStartingYear--;
    jscalendarBShow = true;
}

function jscalendarSelectYear(nYear) {
    jscalendarYearSelected=parseInt(nYear + jscalendarNStartingYear);
    jscalendarYearConstructed = false;
    jscalendarConstructCalendar();
    jscalendarPopDownYear();
}

function jscalendarConstructYear() {
    jscalendarPopDownMonth();
    sHTML = ""
    if (!jscalendarYearConstructed) {

        sHTML = "<tr><td align='center' onmouseover='this.className=\"" + jscalendarThemePrefix +
                "-dropdown-select-style\"' onmouseout='clearInterval(jscalendarIntervalID1); " +
                "this.className=\""+jscalendarThemePrefix+"-dropdown-normal-style\"' " +
                "onmousedown='clearInterval(jscalendarIntervalID1);jscalendarIntervalID1=setInterval(\"jscalendarDecYear()\",30)' " +
                "onmouseup='clearInterval(jscalendarIntervalID1)'>-</td></tr>";

        j = 0;
        jscalendarNStartingYear = jscalendarYearSelected - 4;
        for (i = (jscalendarYearSelected - 4); i <= (jscalendarYearSelected + 5); i++) {
            sName = i;
            if (i == jscalendarYearSelected){
                sName = "<B>" + sName + "</B>";
            }

            sHTML += "<tr><td id='y" + j + "' onmouseover='this.className=\"" + jscalendarThemePrefix + 
                     "-dropdown-select-style\"' onmouseout='this.className=\"" + jscalendarThemePrefix + 
                     "-dropdown-normal-style\"' onclick='jscalendarSelectYear(" + j + ");event.cancelBubble=true'>&nbsp;"
                     + sName + yearString + "&nbsp;</td></tr>";
            j++;
        }

        sHTML += "<tr><td align='center' onmouseover='this.className=\"" + jscalendarThemePrefix + 
                 "-dropdown-select-style\"' onmouseout='clearInterval(jscalendarIntervalID2); " +
                 "this.className=\""+jscalendarThemePrefix+"-dropdown-normal-style\"' " +
                 "onmousedown='clearInterval(jscalendarIntervalID2);jscalendarIntervalID2=setInterval(\"jscalendarIncYear()\",30)'"+
                 "    onmouseup='clearInterval(jscalendarIntervalID2)'>+</td></tr>";

        if (localja) {
            document.getElementById("selectYear").innerHTML = "<table width='57' class='" + jscalendarThemePrefix + 
                "-dropdown-style' onmouseover='clearTimeout(jscalendarTimeoutID2)' "+
                "onmouseout='clearTimeout(jscalendarTimeoutID2);jscalendarTimeoutID2="+
                "setTimeout(\"jscalendarPopDownYear()\",100)' cellspacing=0>" + sHTML + "</table>";
        }else{
            document.getElementById("selectYear").innerHTML = "<table width='45' class='" + jscalendarThemePrefix + 
                "-dropdown-style' onmouseover='clearTimeout(jscalendarTimeoutID2)' "+
                "onmouseout='clearTimeout(jscalendarTimeoutID2);jscalendarTimeoutID2="+
                "setTimeout(\"jscalendarPopDownYear()\",100)' cellspacing=0>" + sHTML + "</table>";
        }

        jscalendarYearConstructed = true;
    }
}

function jscalendarPopDownYear() {
    clearInterval(jscalendarIntervalID1);
    clearTimeout(jscalendarTimeoutID1);
    clearInterval(jscalendarIntervalID2);
    clearTimeout(jscalendarTimeoutID2);
    jscalendarCrossYearObj.visibility = "hidden";
}

function jscalendarPopUpYear() {
    var leftOffset;

    jscalendarConstructYear();
    jscalendarCrossYearObj.visibility = (jscalendarDom||jscalendarIe) ? "visible" : "show";
    leftOffset = parseInt(jscalendarCrossobj.left) + document.getElementById("spanYear").offsetLeft;
    if (jscalendarIe) {
        leftOffset += 6;
    }
    jscalendarCrossYearObj.left = leftOffset;
    jscalendarCrossYearObj.top = parseInt(jscalendarCrossobj.top) + 26;
}



/*** calendar ********************************************************************************/

function jscalendarConstructCalendar () {
    var aNumDays = Array (31,0,31,30,31,30,31,31,30,31,30,31);

    var dateMessage;
    var startDate = new Date (jscalendarYearSelected,jscalendarMonthSelected, 1);
    var endDate;

    if (jscalendarMonthSelected == 1) {
        endDate = new Date (jscalendarYearSelected, jscalendarMonthSelected+1, 1);
        endDate = new Date (endDate - (24 * 60 * 60 * 1000));
        numDaysInMonth = endDate.getDate();
    } else {
        numDaysInMonth = aNumDays[jscalendarMonthSelected];
    }

    datePointer = 0;
    dayPointer = startDate.getDay();

    if (dayPointer<0) {
        dayPointer = 6;
    }

    sHTML = "<table  border=0 class='" + jscalendarThemePrefix + "-body-style'><tr>";

    for (i = 0; i < 7; i++) {
        if(localja){
            sHTML += "<td width='27' align='right'><B>"+ jscalendarDayName[i]+"&nbsp;</B></td>";
        }else{
            sHTML += "<td width='27' align='right'><B>"+ jscalendarDayName[i]+"</B></td>";
        }
    }
    sHTML +="</tr><tr>";

    for ( var i=1; i<=dayPointer;i++ ) {
        sHTML += "<td>&nbsp;</td>";
    }

    for ( datePointer = 1; datePointer <= numDaysInMonth; datePointer++ ) {
        dayPointer++;
        sHTML += "<td style=\"font-color:red;\" align=right>";

        //regular day
        var sStyle=jscalendarThemePrefix+"-normal-day-style";

        //today
        if ((datePointer == jscalendarDateNow) && 
            (jscalendarMonthSelected == jscalendarMonthNow) && 
            (jscalendarYearSelected == jscalendarYearNow)) {
            sStyle = jscalendarThemePrefix + "-current-day-style";
        //end-of-the-week day
        } else if (dayPointer % 7 == 1) {
            sStyle = jscalendarThemePrefix + "-end-of-week-sun-style";
        } else if (dayPointer % 7 == 0) {
            sStyle = jscalendarThemePrefix + "-end-of-week-sat-style";
        }

        //selected day
        if ((datePointer==jscalendarOdateSelected) && 
            (jscalendarMonthSelected==jscalendarOmonthSelected) && 
            (jscalendarYearSelected==jscalendarOyearSelected)) {
            sStyle += " " + jscalendarThemePrefix + "-selected-day-style";
        }

        sHint = ""
        for (k = 0; k < jscalendarHolidaysCounter; k++) {
            if ((parseInt(jscalendarHolidays[k].d) == datePointer) && 
                (parseInt(jscalendarHolidays[k].m) == (jscalendarMonthSelected+1))) {
                if ((parseInt(jscalendarHolidays[k].y) == 0) || 
                   ((parseInt(jscalendarHolidays[k].y) == jscalendarYearSelected) && (parseInt(jscalendarHolidays[k].y)!=0))) {
                    sStyle += " " + jscalendarThemePrefix + "-holiday-style";
                    sHint += sHint == "" ? jscalendarHolidays[k].desc : "\n" + jscalendarHolidays[k].desc;
                }
            }
        }
        var regexp= /\"/g
        sHint = sHint.replace(regexp, "&quot;");

        sSelectStyle = sStyle + " " + jscalendarThemePrefix + "-would-be-selected-day-style";
        sNormalStyle = sStyle;

        dateMessage = "onmousemove='window.status=\"\"' onmouseout='this.className=\"" + sNormalStyle + "\"; window.status=\"\"' ";

        sHTML += "<a class='" + sStyle + "' " + dateMessage + " title=\"" + sHint + 
                 "\" href='javascript:jscalendarDateSelected=" + datePointer + 
                 ";jscalendarCloseCalendar();' onmouseover='this.className=\"" + 
                 sSelectStyle + "\";' >&nbsp;" + datePointer + "&nbsp;</a>";
        sHTML += ""
        if ((dayPointer) % 7 == 0) {
            sHTML += "</tr><tr>";
        }
    }

    document.getElementById("content").innerHTML = sHTML;
    document.getElementById("spanMonth").innerHTML = "&nbsp;" + jscalendarMonthName[jscalendarMonthSelected] + 
        "&nbsp;<img id='changeMonth' src='"+jscalendarImgDir+jscalendarThemePrefix+"-drop1.gif' width='12' height='10' border=0>";
    document.getElementById("spanYear").innerHTML = "&nbsp;" + jscalendarYearSelected + 
        yearString + "&nbsp;<img id='changeYear' src='"+jscalendarImgDir+jscalendarThemePrefix+"-drop1.gif' width='12' height='10' border=0>";
}

/**
 * カレンダー表示処理
 * 画面にてボタン押下時に呼び出されるファンクション。
 */
function jscalendarPopUpCalendar(ctl, ctl2, format) {
    var leftpos = 0;
    var toppos = 0;

    if (jscalendarBPageLoaded) {
        if ( jscalendarCrossobj.visibility ==   "hidden" ) {
            jscalendarCtlToPlaceValue = ctl2;
            jscalendarDateFormat = format;

            formatChar = " ";
            aFormat = jscalendarDateFormat.split(formatChar);
            if (aFormat.length<3) {
                formatChar = "/";
                aFormat = jscalendarDateFormat.split(formatChar);
                if (aFormat.length < 3) {
                    formatChar = ".";
                    aFormat = jscalendarDateFormat.split(formatChar);
                    if (aFormat.length<3) {
                        formatChar = "-";
                        aFormat = jscalendarDateFormat.split(formatChar);
                        if (aFormat.length < 3) {
                            // invalid date format
                            formatChar = "";
                        }
                    }
                }
            }

            tokensChanged = 0;
            if ( formatChar != "" ) {

                // use user's date
                aData = ctl2.value.split(formatChar);
                for (i = 0; i < 3; i++) {
                    if ((aFormat[i]=="d") || (aFormat[i]=="dd")) {
                        jscalendarDateSelected = parseInt(aData[i], 10);
                        tokensChanged++;
                    } else if ((aFormat[i] == "m") || (aFormat[i] == "mm") ||
                               (aFormat[i] == "M") || (aFormat[i] == "MM")) {
                        jscalendarMonthSelected = parseInt(aData[i], 10) - 1;
                        tokensChanged++;
                    } else if (aFormat[i]=="yyyy") {
                        jscalendarYearSelected = parseInt(aData[i], 10);
                        tokensChanged++;
                    } else if (aFormat[i]=="yy") {
                        newYear = parseInt(aData[i], 10);

                        if(newYear > 50) {
                            jscalendarYearSelected = 1900 + newYear;
                        } else {
                            jscalendarYearSelected = 2000 + newYear;
                        }

                        tokensChanged++;
                    } else if (aFormat[i] == "mmm" || aFormat[i] == "MMM") {
                        for (j = 0; j < 12; j++) {
                            if (aData[i]==jscalendarMonthName[j]) {
                                jscalendarMonthSelected = j;
                                tokensChanged++;
                            }
                        }
                    } else if (aFormat[i] == "mmmm" || aFormat[i] == "MMMM") {
                        for (j = 0; j < 12; j++) {
                            if (aData[i] == jscalendarMonthName[j]) {
                                jscalendarMonthSelected = j;
                                tokensChanged++;
                            }
                        }
                    }
                }
            }
            //入力された日付が不正な場合は現在日付に移動させる。
            if ((tokensChanged != 3) ||
                isNaN(jscalendarDateSelected) ||
                isNaN(jscalendarMonthSelected) ||
                isNaN(jscalendarYearSelected)) {
                jscalendarDateSelected = jscalendarDateNow;
                jscalendarMonthSelected =   jscalendarMonthNow;
                jscalendarYearSelected = jscalendarYearNow;
            }

            //入力されている月が不正な月の場合は現在日付に移動させる。
            if (!(0 <= jscalendarMonthSelected && jscalendarMonthSelected <= 11)) {
                jscalendarDateSelected = jscalendarDateNow;
                jscalendarMonthSelected =   jscalendarMonthNow;
                jscalendarYearSelected = jscalendarYearNow;
            }

            //入力された日付、または現在日付をカレンダーの日付に連携させる。
            jscalendarOdateSelected  = jscalendarDateSelected;
            jscalendarOmonthSelected = jscalendarMonthSelected;
            jscalendarOyearSelected  = jscalendarYearSelected;

            aTag = ctl;
            do {
                aTag = aTag.offsetParent;
                leftpos += aTag.offsetLeft;
                toppos += aTag.offsetTop;
            } while(aTag.tagName != "BODY");

            jscalendarCrossobj.left = jscalendarFixedX == -1 ? ctl.offsetLeft + leftpos : jscalendarFixedX;
            jscalendarCrossobj.top  = jscalendarFixedY == -1 ? ctl.offsetTop + toppos + ctl.offsetHeight + 2 : jscalendarFixedY;
            jscalendarConstructCalendar (1, jscalendarMonthSelected, jscalendarYearSelected);
            jscalendarCrossobj.visibility = (jscalendarDom || jscalendarIe) ? "visible" : "show";

            jscalendarHideElement( 'SELECT', document.getElementById("calendar") );
            jscalendarHideElement( 'APPLET', document.getElementById("calendar") );

            jscalendarBShow = true;
        } else {
            jscalendarHideCalendar();
            if (jscalendarCtlNow != ctl) {
                jscalendarPopUpCalendar(ctl, ctl2, format);
            }
        }
        jscalendarCtlNow = ctl;
    }
}

document.onkeypress = function jscalendarHidecal1 () {
    if (event.keyCode==27) {
        jscalendarHideCalendar();
    }
}
document.onclick = function jscalendarHidecal2 () {
    if (!jscalendarBShow) {
        jscalendarHideCalendar();
    }
    jscalendarBShow = false
}
