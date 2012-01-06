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
<title>logOffResult.jsp</title>
</head>
<body>
<%
	if (session.isNew()) {
		out.println("セッションを破棄しました<br>");
		out.println("現在のセッションは新しく生成されたセッションです");
	} else {
		out.println("セッションの破棄に失敗しました");
	}
%>
<br>
前画面でセッションに格納した値は
<%=session.getAttribute("logoff") %>です
</body>
</html>