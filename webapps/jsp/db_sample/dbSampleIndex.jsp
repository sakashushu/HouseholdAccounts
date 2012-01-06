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
<title>dbSampleIndex.jsp</title>
</head>
<body>
データベースの照会処理を行います<br>
<html:form action="/DBSample">
	検索区分を選択してください。未選択の場合は全件取得します<br>
	<html:radio property="search_kbn" value="id"></html:radio>IDで検索<br>
	<html:radio property="search_kbn" value="name"></html:radio>名前で検索<br><br>
	検索条件を入力してください<br>
	<html:text property="search_condition"></html:text><br><br>
	<html:submit value="この条件で検索"></html:submit>
</html:form>
</body>
</html>