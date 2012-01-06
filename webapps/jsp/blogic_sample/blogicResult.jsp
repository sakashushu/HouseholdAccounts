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
<title>blogicResult.jsp</title>
</head>
<body>
入力されたお名前は<br>
姓：<bean:write name="last_name" scope="request"/><br>
名：<bean:write name="first_name" scope="request"/><br>
ユーザ名：<bean:write name="USER_VALUE_OBJECT" property="user_name" scope="session" ignore="true"/>
</body>
</html>