/**
 * 
 */
package blogic.io;

import java.util.List;

/**
 * @author sakashushu
 *
 */
public class DBSampleOutput {
	private List<Object> search_result;
	private String hit_number;

	public List<Object> getSearch_result() {
		return search_result;
	}
	public void setSearch_result(List<Object> search_result) {
		this.search_result = search_result;
	}
	public String getHit_number() {
		return hit_number;
	}
	public void setHit_number(String hit_number) {
		this.hit_number = hit_number;
	}
}
