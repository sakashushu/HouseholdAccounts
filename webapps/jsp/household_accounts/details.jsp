<%@ page language="java" contentType="text/html; charset=windows-31j"
    pageEncoding="windows-31j" %>
<%@ taglib uri="/struts-bean" prefix="bean" %>
<%@ taglib uri="/struts-html" prefix="html" %>
<%@ taglib uri="/struts-logic" prefix="logic" %>
<%@ taglib uri="/terasoluna-struts" prefix="ts" %>
<%@ taglib uri="/terasoluna" prefix="t" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html:html lang="ja">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-31j">
<title>details.jsp</title>
</head>
<body>
<html:form action="/HhaDetail">
<!-- 
	<html:text property="year_fr"></html:text>年
	<html:text property="month_fr"></html:text>　～　
	<html:text property="year_to"></html:text>年
	<html:text property="month_to"></html:text>月<br><br>
 -->
 日付：
	<html:select property="year_fr">
		<html:option value="0">---</html:option>
		<html:option value="2012">2012年</html:option>
		<html:option value="2011">2011年</html:option>
		<html:option value="2010">2010年</html:option>
		<html:option value="2009">2009年</html:option>
		<html:option value="2008">2008年</html:option>
		<html:option value="2007">2007年</html:option>
		<html:option value="2006">2006年</html:option>
		<html:option value="2005">2005年</html:option>
		<html:option value="2004">2004年</html:option>
		<html:option value="2003">2003年</html:option>
		<html:option value="2002">2002年</html:option>
		<html:option value="2001">2001年</html:option>
		<html:option value="2000">2000年</html:option>
		<html:option value="1999">1999年</html:option>
	</html:select>
	<html:select property="month_fr">
		<html:option value="0">---</html:option>
		<html:option value="1">1月</html:option>
		<html:option value="2">2月</html:option>
		<html:option value="3">3月</html:option>
		<html:option value="4">4月</html:option>
		<html:option value="5">5月</html:option>
		<html:option value="6">6月</html:option>
		<html:option value="7">7月</html:option>
		<html:option value="8">8月</html:option>
		<html:option value="9">9月</html:option>
		<html:option value="10">10月</html:option>
		<html:option value="11">11月</html:option>
		<html:option value="12">12月</html:option>
	</html:select>　～　
	<html:select property="year_to">
		<html:option value="0">---</html:option>
		<html:option value="2012">2012年</html:option>
		<html:option value="2011">2011年</html:option>
		<html:option value="2010">2010年</html:option>
		<html:option value="2009">2009年</html:option>
		<html:option value="2008">2008年</html:option>
		<html:option value="2007">2007年</html:option>
		<html:option value="2006">2006年</html:option>
		<html:option value="2005">2005年</html:option>
		<html:option value="2004">2004年</html:option>
		<html:option value="2003">2003年</html:option>
		<html:option value="2002">2002年</html:option>
		<html:option value="2001">2001年</html:option>
		<html:option value="2000">2000年</html:option>
		<html:option value="1999">1999年</html:option>
	</html:select>
	<html:select property="month_to">
		<html:option value="0">---</html:option>
		<html:option value="1">1月</html:option>
		<html:option value="2">2月</html:option>
		<html:option value="3">3月</html:option>
		<html:option value="4">4月</html:option>
		<html:option value="5">5月</html:option>
		<html:option value="6">6月</html:option>
		<html:option value="7">7月</html:option>
		<html:option value="8">8月</html:option>
		<html:option value="9">9月</html:option>
		<html:option value="10">10月</html:option>
		<html:option value="11">11月</html:option>
		<html:option value="12">12月</html:option>
	</html:select>
	<br><br>
	<html:submit value="検索"></html:submit>
	
<table border="1">
	<tr>
		<th>日付</th>
		<th>時刻</th>
		<th>項目</th>
	</tr>
	<logic:equal name="strSelFlg" scope="request" value="selected">
		<logic:iterate id="result" name="detail_rslt">
		<tr>
		<td><bean:write name="result" property="payment_date"/></td>
		<td><bean:write name="result" property="payment_time"/></td>
		<td><bean:write name="result" property="item_name"/></td>
		</tr>
		</logic:iterate>
	</logic:equal>
</table>

</html:form>
</body>
</html:html>