/**
 * 
 */
package blogic.io;

/**
 * @author sakashushu
 *
 */
public class BLogicSampleOutput {
	/** ユーザ名を保持するUserValueObject */
	private BLogicSampleUvo uvo;
	/** お名前 姓 */
	private String last_name;
	/** お名前 名 */
	private String first_name;

	public BLogicSampleUvo getUvo() {
		return uvo;
	}
	public void setUvo(BLogicSampleUvo uvo) {
		this.uvo = uvo;
	}
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
