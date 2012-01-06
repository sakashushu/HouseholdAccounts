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
<title>blogicIndex.jsp</title>
</head>
<body>
お名前を入力してください<br>
<html:form action="/BLogicSample">
姓：<html:text property="last_name"></html:text><br>
名：<html:text property="first_name"></html:text><br>
<html:submit property="send" value="送信"></html:submit>
</html:form>
</body>
</html>