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

	/** submitボタンproperty属性値 結果画面 */
	private String result;
	/** submitボタンproperty属性値 エラー画面 */
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
