<%@ page language="java" contentType="text/html; charset=windows-31j"
    pageEncoding="windows-31j" %>
<%@ taglib uri="/struts-bean" prefix="bean" %>
<%@ taglib uri="/struts-html" prefix="html" %>
<%@ taglib uri="/struts-logic" prefix="logic" %>
<%@ taglib uri="/terasoluna-struts" prefix="ts" %>
<%@ taglib uri="/terasoluna" prefix="t" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-31j">
<title>dbSampleResult.jsp</title>
</head>
<body>
��������<br>
<bean:write name="hit_number"/>���q�b�g���܂���<br><br>
���[�U���<br>
<table border="1">
<tr>
	<th>ID</th>
	<th>���O</th>
	<th>�N��</th>
</tr>
<logic:iterate id="result" name="search_result">
<tr>
<td><bean:write name="result" property="id"/></td>
<td><bean:write name="result" property="name"/></td>
<td><bean:write name="result" property="age"/></td>
</tr>
</logic:iterate>
</table>
</body>
</html>