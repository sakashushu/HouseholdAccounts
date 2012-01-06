/**
 * 
 */
package blogic.io;

import jp.terasoluna.fw.web.UserValueObject;

/**
 * @author sakashushu
 *
 */
public class BLogicSampleUvo extends UserValueObject {
	/** ÉÜÅ[ÉUñº */
	private String user_name;

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
}
