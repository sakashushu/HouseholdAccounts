*******************************************************************************
      TERASOLUNA Server Framework for Java �iWeb�Łj
      �u�����N�v���W�F�N�g �����菇

      Copyright 2007-2009 NTT DATA Corporation.
*******************************************************************************


��  �T�v�F

  ����readme�́ATERASOLUNA Server Framework for Java�iWeb�Łj
  �̃u�����N�v���W�F�N�g�𓱓�����菇���ł��B
  �u�����N�v���W�F�N�g�𓱓����邱�Ƃɂ��ATERASOLUNA�t���[�����[�N���g�����A�v
  ���P�[�V�����J�������\�z���邱�Ƃ��\�ɂȂ�܂��B 



��  �O������F

  �������ɂ́A���炩���߉��L�̂��̂��p�ӂ���Ă���K�v������܂��B 

  �EJava 2 Runtime Environment Standard Edition 1.5.0
  �EEclipse SDK 3.2.2 + WTP 1.5.5
  �EWebAP�T�[�o�FApache Tomcat 5.5.23
  �EApache Ant 1.6.5 (Eclipse��Ant�v���O�C���݂̂ł���)
  
  ���L����Ă���o�[�W���������ɓ���m�F���s���Ă��܂����A���̃o�[�W�����ȊO�̊�
  ���ł̓���𐧌�������̂ł͂���܂���B
  �܂��A�����̃C���X�g�[���y�ѐݒ�̎菇�ɂ��ẮA�ʓrWeb��̗��p�K�C�h����
  �Q�Ƃ��Ă��������B 

  

��  Ant�^�X�N�ꗗ�F

  �v���W�F�N�g�́u\ant�v�t�H���_�ɂ́Aant�^�X�N���L�q���ꂽ�ubuild.xml�v�����݂�
  �܂��B�ȉ���ant�^�X�N�̈ꗗ�ł��B 

  �Eclean
      �쐬����war�t�@�C���A�R���p�C�����ꂽ�N���X�t�@�C���̍폜���s���B
  �Ecompile
      �R���p�C�����s���B
  �Enative2ascii
      native2ascii�ɂăv���p�e�B�t�@�C���̃R�[�h�ϊ����s���B
  �Edeploy
      �v���W�F�N�g�̃f�v���C���s���B
  �EcreateJavaDoc
      JavaDoc�̐������s���B
      
      

��  �T�[�o�[�̒ǉ��iWTP���j�F

  Eclipse��WTP�v���O�C������������Ă���ꍇ�A�ȉ��̎菇�ŃT�[�o�[��ǉ����܂��B 

  1.Eclipse��ʂɂāu�E�B���h�E�v���u�r���[�̕\���v���u���̑��v�����s���A�u�T�[
    �o�[�v��I�����uOK�v���N���b�N���܂��B 
  2.�T�[�o�[�r���[�ŉE�N���b�N�u�V�K�v���u�T�[�o�[�v�����s���܂��B 
  3.�uApache�v���uTomcat v5.5 �T�[�o�[�v��I�����A�u���ցv���N���b�N���܂��B 
  4.�uTomcat�v��I�����A�u���ցv���N���b�N���܂��B 
  5.���[���̊��ɍ������uTomcat �C���X�g�[����f�B���N�g���[�v��I�����܂��B
  6.�u�I���v���N���b�N���܂��B 



��  �v���W�F�N�g�̎��s�i���ʁj�F

  �u�����N�v���W�F�N�g���C���|�[�g���܂��B 

  �@ZIP�t�@�C���̓W�J
  
    terasoluna-server4jweb-blank_(�o�[�W�����ԍ�).zip��C�ӂ̃t�H���_�ɓW�J���܂��B 

    �W�J���ꂽterasoluna-server4jweb-blank_(�o�[�W�����ԍ�).zip�̃t�H���_����
    �uterasoluna-spring-thin-blank�v�ł��邱�Ƃ��m�F���܂��B
    �W�J�c�[����W�J�̂������ɂ���ẮA�t�H���_����
    �uterasoluna-server4jweb-blank(�o�[�W�����ԍ�)�v�ƂȂ�ꍇ������܂����A
    �t�H���_�����蓮�Łuterasoluna-spring-thin-blank�v�ɕύX���Ă��������B 

  �AEclipse�ւ̃C���|�[�g
  
    1.Eclipse��ʂɂāu�t�@�C���v���u�C���|�[�g�v��I�����܂��B
    2.�u�����v���W�F�N�g�����[�N�X�y�[�X�ցv��I�����u���ցv���N���b�N���܂��B
    3.�u���[�g�E�f�B���N�g���[�̑I���v�Ƀ`�F�b�N����������ԂŁu�Q�Ɓv���N���b�N
      ���A�u�����N�v���W�F�N�g��W�J�����e�t�H���_���w�肵�܂��B 
    4.�uterasoluna-spring-thin-blank�v�Ƀ`�F�b�N�������Ă��邱�Ƃ��m�F���A�u�I��
       �v���N���b�N���܂��B 



��  �v���W�F�N�g�̎��s�iWTP���j�F
 
  WTP�v���O�C���𗘗p����ꍇ�A�ȉ��̎菇�Ńv���W�F�N�g�����s���܂��B

  �B�T�[�o�[�ւ̒ǉ�
  
    �T�[�o�[�r���[�Łuterasoluna-spring-thin-blank�v�̃v���W�F�N�g��ǉ����܂��B
    
  �CTomcat�̋N������сA���s�m�F
  
    1.�T�[�o�[���n�����܂��B 
    2.http://localhost:8080/terasoluna-spring-thin-blank�ɃA�N�Z�X���܂��B
    3.�u-- �悤����TERASOLUNA�� --�v�Ƃ�����ʂ��\�������΃f�v���C�����ł��B 
     
  
  
��  �v���W�F�N�g�̎��s�i��WTP���j�F

  WTP�v���O�C���𗘗p���Ȃ��ꍇ�A�ȉ��̎菇�Ńv���W�F�N�g�����s���܂��B 


  �Bant�^�X�N�̎��s
  
    1.�v���W�F�N�g�́u/ant/build.properties�v�����[���̊��ɍ������l�ɏ�������
      �܂��B 
      �E�ڍׂ�build.properties���Q�Ƃ��Ă��������B���Ƀp�X�֘A�Ɋւ��Ă͏\���m�F
        ���Ă��������B 
    2.�ubuild.properties�v�̏C����A�u/ant/build.xml�v���E�N���b�N��ant�^�X�N��
      �udeploy�v��I�����Ď��s���܂��B 

  �CTomcat�̋N������сA���s�m�F
  
    1.�f�v���C���Tomcat���N�����܂��B 
    2.http://localhost:8080/<context.name>/�ɃA�N�Z�X���܂��B 
      �E�u<context.name>�v�́Abuild.properties���ɋL�q�����l�ł���A�f�t�H���g��
        terasoluna-spring-thin-blank�ƂȂ��Ă��܂��B    
    3.�u-- �悤����TERASOLUNA�� --�v�Ƃ�����ʂ��\�������΃f�v���C�����ł��B


-------------------------------------------------------------------------------
Copyright 2007-2009 NTT DATA Corporation.


