/**
 * 
 */
package blogic.io;

/**
 * @author sakashushu
 *
 */
public class BLogicSampleDto {
	/** お名前 姓 */
	private String last_name;
	/** お名前 名 */
	private String first_name;

	public String getLast_name() {
		return last_name;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
}
