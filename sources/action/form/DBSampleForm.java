package action.form;

import jp.terasoluna.fw.web.struts.form.ValidatorActionFormEx;

/**
 * @author sakashushu
 *
 */
public class DBSampleForm extends ValidatorActionFormEx {
	/** �����敪 */
	private String search_kbn;
	/** �������� */
	private String search_condition;
	
	public String getSearch_kbn() {
		return search_kbn;
	}
	public void setSearch_kbn(String search_kbn) {
		this.search_kbn = search_kbn;
	}
	public String getSearch_condition() {
		return search_condition;
	}
	public void setSearch_condition(String search_condition) {
		this.search_condition = search_condition;
	}
}
