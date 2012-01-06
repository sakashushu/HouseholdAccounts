<%@ page contentType="text/html; charset=Windows-31J"%>
<%@ taglib uri="/struts-html" prefix="html" %>
<%@ taglib uri="/struts-bean" prefix="bean" %>
<%@ taglib uri="/struts-logic" prefix="logic" %>
<%@ taglib uri="/terasoluna-struts" prefix="ts" %>
<%@ taglib uri="/terasoluna" prefix="t" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html:html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=shift_jis">
<title>hello.jsp</title>
</head>
<body>
<ts:form action="/HelloPrint">
	名前を入力してください<br>
	<html:text name="_helloPrintForm" property="name" maxlength="10"></html:text><br>
	<ts:submit value="送信する"></ts:submit>
</ts:form>
</body>
</html:html>