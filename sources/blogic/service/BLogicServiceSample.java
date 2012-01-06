/**
 * 
 */
package blogic.service;

import jp.terasoluna.fw.service.thin.BLogic;
import jp.terasoluna.fw.service.thin.BLogicResult;
import jp.terasoluna.fw.web.UserValueObject;
import blogic.domain.BLogicDomainSample;
import blogic.io.BLogicSampleDto;
import blogic.io.BLogicSampleOutput;
import blogic.io.BLogicSampleUvo;

/**
 * @author sakashushu
 *
 */
public class BLogicServiceSample implements BLogic<BLogicSampleDto> {

	/* (non-Javadoc)
	 * @see jp.terasoluna.fw.service.thin.BLogic#execute(java.lang.Object)
	 */
	public BLogicResult execute(BLogicSampleDto dto) {
		// 入力された姓名を取得します
		String last_name = dto.getLast_name();
		String first_name = dto.getFirst_name();
		
		// ユーザ名を取得するビジネスロジックを実行します
		String user_name = BLogicDomainSample.getUserName(last_name, first_name);

		// UVOを生成します
		BLogicSampleUvo uvo = (BLogicSampleUvo) UserValueObject.createUserValueObject();

		// ユーザ名をUVOに設定します
		uvo.setUser_name(user_name);
		
		// 返却用のクラスを生成し、UVOをセットします
		BLogicSampleOutput resultObject = new BLogicSampleOutput();
		resultObject.setUvo(uvo);
		resultObject.setLast_name(last_name);
		resultObject.setFirst_name(first_name);
		
		// BLogicResultを生成します
		BLogicResult result = new BLogicResult();
		
		// 返却用クラスと処理結果を設定します
		result.setResultObject(resultObject);
		result.setResultString("success");
		
		return result;
	}

}
