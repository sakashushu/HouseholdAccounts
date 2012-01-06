/**
 * 
 */
package action.form;

import org.apache.struts.action.ActionForm;

/**
 * @author sakashushu
 *
 */
public class BLogicSampleForm extends ActionForm {
	/** Ç®ñºëO ê© */
	private String last_name;
	/** Ç®ñºëO ñº */
	private String first_name;

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
}
