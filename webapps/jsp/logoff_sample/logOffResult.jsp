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
		out.println("�Z�b�V������j�����܂���<br>");
		out.println("���݂̃Z�b�V�����͐V�����������ꂽ�Z�b�V�����ł�");
	} else {
		out.println("�Z�b�V�����̔j���Ɏ��s���܂���");
	}
%>
<br>
�O��ʂŃZ�b�V�����Ɋi�[�����l��
<%=session.getAttribute("logoff") %>�ł�
</body>
</html>