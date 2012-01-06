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
	<html:text property="year_fr"></html:text>�N
	<html:text property="month_fr"></html:text>�@�`�@
	<html:text property="year_to"></html:text>�N
	<html:text property="month_to"></html:text>��<br><br>
 -->
 ���t�F
	<html:select property="year_fr">
		<html:option value="0">---</html:option>
		<html:option value="2012">2012�N</html:option>
		<html:option value="2011">2011�N</html:option>
		<html:option value="2010">2010�N</html:option>
		<html:option value="2009">2009�N</html:option>
		<html:option value="2008">2008�N</html:option>
		<html:option value="2007">2007�N</html:option>
		<html:option value="2006">2006�N</html:option>
		<html:option value="2005">2005�N</html:option>
		<html:option value="2004">2004�N</html:option>
		<html:option value="2003">2003�N</html:option>
		<html:option value="2002">2002�N</html:option>
		<html:option value="2001">2001�N</html:option>
		<html:option value="2000">2000�N</html:option>
		<html:option value="1999">1999�N</html:option>
	</html:select>
	<html:select property="month_fr">
		<html:option value="0">---</html:option>
		<html:option value="1">1��</html:option>
		<html:option value="2">2��</html:option>
		<html:option value="3">3��</html:option>
		<html:option value="4">4��</html:option>
		<html:option value="5">5��</html:option>
		<html:option value="6">6��</html:option>
		<html:option value="7">7��</html:option>
		<html:option value="8">8��</html:option>
		<html:option value="9">9��</html:option>
		<html:option value="10">10��</html:option>
		<html:option value="11">11��</html:option>
		<html:option value="12">12��</html:option>
	</html:select>�@�`�@
	<html:select property="year_to">
		<html:option value="0">---</html:option>
		<html:option value="2012">2012�N</html:option>
		<html:option value="2011">2011�N</html:option>
		<html:option value="2010">2010�N</html:option>
		<html:option value="2009">2009�N</html:option>
		<html:option value="2008">2008�N</html:option>
		<html:option value="2007">2007�N</html:option>
		<html:option value="2006">2006�N</html:option>
		<html:option value="2005">2005�N</html:option>
		<html:option value="2004">2004�N</html:option>
		<html:option value="2003">2003�N</html:option>
		<html:option value="2002">2002�N</html:option>
		<html:option value="2001">2001�N</html:option>
		<html:option value="2000">2000�N</html:option>
		<html:option value="1999">1999�N</html:option>
	</html:select>
	<html:select property="month_to">
		<html:option value="0">---</html:option>
		<html:option value="1">1��</html:option>
		<html:option value="2">2��</html:option>
		<html:option value="3">3��</html:option>
		<html:option value="4">4��</html:option>
		<html:option value="5">5��</html:option>
		<html:option value="6">6��</html:option>
		<html:option value="7">7��</html:option>
		<html:option value="8">8��</html:option>
		<html:option value="9">9��</html:option>
		<html:option value="10">10��</html:option>
		<html:option value="11">11��</html:option>
		<html:option value="12">12��</html:option>
	</html:select>
	<br><br>
	<html:submit value="����"></html:submit>
	
<table border="1">
	<tr>
		<th>���t</th>
		<th>����</th>
		<th>����</th>
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