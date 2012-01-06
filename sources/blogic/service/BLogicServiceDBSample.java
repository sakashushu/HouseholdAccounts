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
	// 検索処理を行うDAOです
	private QueryDAO queryDAO;
	/* (non-Javadoc)
	 * @see jp.terasoluna.fw.service.thin.BLogic#execute(java.lang.Object)
	 */
	public BLogicResult execute(DBSampleInput dto) {
		// 処理結果を格納するオブジェクトです
		BLogicResult result = new BLogicResult();
		
		// 検索処理を行います
		List<Object> searchResult = (List<Object>) getQueryDAO().executeForObjectList("user.dbSample", dto);
		
		DBSampleOutput resultObject = new DBSampleOutput();
		resultObject.setHit_number(String.valueOf(searchResult.size()));
		resultObject.setSearch_result(searchResult);

		// フォワード先を指定します
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
