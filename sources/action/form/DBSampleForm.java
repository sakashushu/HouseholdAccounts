package action.form;

import jp.terasoluna.fw.web.struts.form.ValidatorActionFormEx;

/**
 * @author sakashushu
 *
 */
public class DBSampleForm extends ValidatorActionFormEx {
	/** ŒŸõ‹æ•ª */
	private String search_kbn;
	/** ŒŸõğŒ */
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
