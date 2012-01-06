/**
 * 
 */
package hha.action.form;

import jp.terasoluna.fw.web.struts.form.ValidatorActionFormEx;

/**
 * @author sakashushu
 *
 */
public class HHA_DetailForm extends ValidatorActionFormEx {
	/** (検索条件)開始年 */
	private Integer year_fr;
	/** (検索条件)開始月 */
	private Integer month_fr;
	/** (検索条件)終了年 */
	private Integer year_to;
	/** (検索条件)終了月 */
	private Integer month_to;
	public Integer getYear_fr() {
		return year_fr;
	}
	public void setYear_fr(Integer year_fr) {
		this.year_fr = year_fr;
	}
	public Integer getMonth_fr() {
		return month_fr;
	}
	public void setMonth_fr(Integer month_fr) {
		this.month_fr = month_fr;
	}
	public Integer getYear_to() {
		return year_to;
	}
	public void setYear_to(Integer year_to) {
		this.year_to = year_to;
	}
	public Integer getMonth_to() {
		return month_to;
	}
	public void setMonth_to(Integer month_to) {
		this.month_to = month_to;
	}
}
