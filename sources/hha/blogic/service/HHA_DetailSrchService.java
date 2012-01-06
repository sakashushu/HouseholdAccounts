/**
 * 
 */
package hha.blogic.service;

import java.util.Calendar;
import java.util.List;

import hha.blogic.io.HHA_DetailInput;
import hha.blogic.io.HHA_DetailOutput;
import hha.model.HHA_RecordsSelBean;
import jp.terasoluna.fw.dao.QueryDAO;
import jp.terasoluna.fw.service.thin.BLogic;
import jp.terasoluna.fw.service.thin.BLogicResult;

/**
 * @author sakashushu
 *
 */
public class HHA_DetailSrchService implements BLogic<HHA_DetailInput> {
	// 検索処理を行うDAOです
	private QueryDAO queryDAO;
	
	/* (non-Javadoc)
	 * @see jp.terasoluna.fw.service.thin.BLogic#execute(java.lang.Object)
	 */
	public BLogicResult execute(HHA_DetailInput dto) {
		// 処理結果を格納するオブジェクト
		BLogicResult result = new BLogicResult();

		// 検索条件用Beanにセット
		HHA_RecordsSelBean bn = new HHA_RecordsSelBean();
		Integer intYearFr = dto.getYear_fr();
		Integer intMonthFr = dto.getMonth_fr();
		Integer intYearTo = dto.getYear_to();
		Integer intMonthTo = dto.getMonth_to();
		if (intYearFr == 0) {
			intYearFr = 1900;
		}
		if (intMonthFr == 0) {
			intMonthFr = 1;
		}
		String strPayDateFr = String.format("%04d", intYearFr) + String.format("%02d", intMonthFr) + "01";
		if (intYearTo == 0) {
			intYearTo = 2999;
		}
		if (intMonthTo == 0) {
			intMonthTo = 12;
		}
		String strFirstday = String.format("%04d", intYearTo)  + "/" + String.format("%02d", intMonthTo) + "/01";
		String strPayDateTo = String.format("%04d", intYearTo)  + String.format("%02d", intMonthTo) + getLastDay(strFirstday);
		
		bn.setPayDateFr(strPayDateFr);
		bn.setPayDateTo(strPayDateTo);
		
		// 検索処理
//		List<Object> searchResult = (List<Object>) getQueryDAO().executeForObjectList("user.ha_DetailSrchSel", dto);
		List<Object> searchResult = (List<Object>) getQueryDAO().executeForObjectList("user.ha_DetailSrchSel", bn);

		HHA_DetailOutput resultObject = new HHA_DetailOutput();
		resultObject.setDetail_rslt(searchResult);
		
		resultObject.setStrSelFlg("selected");
		
		// フォアワード先の指定
		result.setResultString("success");
		result.setResultObject(resultObject);
		
		return result;
	}

	public QueryDAO getQueryDAO() {
		return queryDAO;
	}

	public void setQueryDAO(QueryDAO queryDAO) {
		this.queryDAO = queryDAO;
	}

	/**
	 * 指定した日付文字列（yyyy/MM/dd or yyyy-MM-dd）
	 * における月末日付を返します。
	 * 
	 * @param strDate 対象の日付文字列
	 * @return 月末日付
	 */
	public static int getLastDay(String strDate) {
	    if (strDate == null || strDate.length() != 10) {
	        throw new IllegalArgumentException(
	                "引数の文字列["+ strDate +"]" +
	                "は不正です。");
	    }
	    int yyyy = Integer.parseInt(strDate.substring(0,4));
	    int MM = Integer.parseInt(strDate.substring(5,7));
	    int dd = Integer.parseInt(strDate.substring(8,10));
	    Calendar cal = Calendar.getInstance();
	    cal.set(yyyy,MM-1,dd);
	    int last = cal.getActualMaximum(Calendar.DATE);
	    return last;
	}
}
