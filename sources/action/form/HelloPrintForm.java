/**
 * 
 */
package action.form;

import org.apache.struts.action.ActionForm;

/**
 * @author sakashushu
 *
 */
public class HelloPrintForm extends ActionForm {

	/**
	 * シリアルID
	 */
	private static final long serialVersionUID = 6198482326767978670L;

	/**
	 * お名前
	 */
	private String name;

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	
}
