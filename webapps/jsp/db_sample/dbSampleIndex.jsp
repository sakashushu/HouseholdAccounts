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
�f�[�^�x�[�X�̏Ɖ�����s���܂�<br>
<html:form action="/DBSample">
	�����敪��I�����Ă��������B���I���̏ꍇ�͑S���擾���܂�<br>
	<html:radio property="search_kbn" value="id"></html:radio>ID�Ō���<br>
	<html:radio property="search_kbn" value="name"></html:radio>���O�Ō���<br><br>
	������������͂��Ă�������<br>
	<html:text property="search_condition"></html:text><br><br>
	<html:submit value="���̏����Ō���"></html:submit>
</html:form>
</body>
</html>