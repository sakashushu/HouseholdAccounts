/**
 * 
 */
package blogic.service;

import java.util.List;

import jp.terasoluna.fw.dao.QueryDAO;
import jp.terasoluna.fw.service.thin.BLogic;
import jp.terasoluna.fw.service.thin.BLogicResult;
import blogic.io.DBSampleInput;
import blogic.io.DBSampleOutput;

/**
 * @author sakashushu
 *
 */
public class BLogicServiceDBSample implements BLogic<DBSampleInput> {
	// �����������s��DAO�ł�
	private QueryDAO queryDAO;
	/* (non-Javadoc)
	 * @see jp.terasoluna.fw.service.thin.BLogic#execute(java.lang.Object)
	 */
	public BLogicResult execute(DBSampleInput dto) {
		// �������ʂ��i�[����I�u�W�F�N�g�ł�
		BLogicResult result = new BLogicResult();
		
		// �����������s���܂�
		List<Object> searchResult = (List<Object>) getQueryDAO().executeForObjectList("user.dbSample", dto);
		
		DBSampleOutput resultObject = new DBSampleOutput();
		resultObject.setHit_number(String.valueOf(searchResult.size()));
		resultObject.setSearch_result(searchResult);

		// �t�H���[�h����w�肵�܂�
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
	
}
