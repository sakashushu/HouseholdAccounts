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
<meta http-equiv="Content-type" content="text/html; charset=windows-31j">
<title>clearSessionIndex.jsp</title>
</head>
<body>
<%
	session.setAttribute("key1","value1");
	session.setAttribute("key2","value2");
%>
セッションに格納されている値を表示します<br>
key1の値：<%=session.getAttribute("key1") %><br>
key2の値：<%=session.getAttribute("key2") %><br>
<html:form action="/ClearSessionSample">
	<html:submit property="submit" value="次へ"></html:submit>
</html:form>
</body>
</html>