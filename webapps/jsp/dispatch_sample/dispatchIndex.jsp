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
���������{�^���ɂ��J�ڐ��U�蕪���܂��B<br>
<html:form action="/DispatchSample">
	���ʉ�ʂɑJ�ڂ��܂��B<br>
	<html:submit property="forward_result" value="���ʉ�ʂɑJ��"></html:submit><br><br>
	
	�G���[��ʂɑJ�ڂ��܂��B<br>
	<html:submit property="forward_error" value="�G���[��ʂɑJ��"></html:submit><br><br>
	
	�f�t�H���g�̑J�ڐ��ʂɑJ�ڂ��܂��B<br>
	<html:submit property="dummy" value="�o�^����Ă��Ȃ��{�^���ł�"></html:submit><br><br>

</html:form>
</body>
</html>

