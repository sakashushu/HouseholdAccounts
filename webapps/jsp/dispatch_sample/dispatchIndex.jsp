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
<title>dispatchIndex.jsp</title>
</head>
<body>
押下したボタンにより遷移先を振り分けます。<br>
<html:form action="/DispatchSample">
	結果画面に遷移します。<br>
	<html:submit property="forward_result" value="結果画面に遷移"></html:submit><br><br>
	
	エラー画面に遷移します。<br>
	<html:submit property="forward_error" value="エラー画面に遷移"></html:submit><br><br>
	
	デフォルトの遷移先画面に遷移します。<br>
	<html:submit property="dummy" value="登録されていないボタンです"></html:submit><br><br>

</html:form>
</body>
</html>

