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
		// ���͂��ꂽ�������擾���܂�
		String last_name = dto.getLast_name();
		String first_name = dto.getFirst_name();
		
		// ���[�U�����擾����r�W�l�X���W�b�N�����s���܂�
		String user_name = BLogicDomainSample.getUserName(last_name, first_name);

		// UVO�𐶐����܂�
		BLogicSampleUvo uvo = (BLogicSampleUvo) UserValueObject.createUserValueObject();

		// ���[�U����UVO�ɐݒ肵�܂�
		uvo.setUser_name(user_name);
		
		// �ԋp�p�̃N���X�𐶐����AUVO���Z�b�g���܂�
		BLogicSampleOutput resultObject = new BLogicSampleOutput();
		resultObject.setUvo(uvo);
		resultObject.setLast_name(last_name);
		resultObject.setFirst_name(first_name);
		
		// BLogicResult�𐶐����܂�
		BLogicResult result = new BLogicResult();
		
		// �ԋp�p�N���X�Ə������ʂ�ݒ肵�܂�
		result.setResultObject(resultObject);
		result.setResultString("success");
		
		return result;
	}

}
