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
	// �����������s��DAO�ł�
	private QueryDAO queryDAO;
	
	/* (non-Javadoc)
	 * @see jp.terasoluna.fw.service.thin.BLogic#execute(java.lang.Object)
	 */
	public BLogicResult execute(HHA_DetailInput dto) {
		// �������ʂ��i�[����I�u�W�F�N�g
		BLogicResult result = new BLogicResult();

		// ���������pBean�ɃZ�b�g
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
		
		// ��������
//		List<Object> searchResult = (List<Object>) getQueryDAO().executeForObjectList("user.ha_DetailSrchSel", dto);
		List<Object> searchResult = (List<Object>) getQueryDAO().executeForObjectList("user.ha_DetailSrchSel", bn);

		HHA_DetailOutput resultObject = new HHA_DetailOutput();
		resultObject.setDetail_rslt(searchResult);
		
		resultObject.setStrSelFlg("selected");
		
		// �t�H�A���[�h��̎w��
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
	 * �w�肵�����t������iyyyy/MM/dd or yyyy-MM-dd�j
	 * �ɂ����錎�����t��Ԃ��܂��B
	 * 
	 * @param strDate �Ώۂ̓��t������
	 * @return �������t
	 */
	public static int getLastDay(String strDate) {
	    if (strDate == null || strDate.length() != 10) {
	        throw new IllegalArgumentException(
	                "�����̕�����["+ strDate +"]" +
	                "�͕s���ł��B");
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
