/**
 * 
 */
package action.form;

import org.apache.struts.action.ActionForm;

/**
 * @author sakashushu
 *
 */
public class DispatchSampleForm extends ActionForm {

	/** submit�{�^��property�����l ���ʉ�� */
	private String result;
	/** submit�{�^��property�����l �G���[��� */
	private String error;
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	
}
