*******************************************************************************
      TERASOLUNA Server Framework for Java （Web版）
      ブランクプロジェクト 導入手順

      Copyright 2007-2009 NTT DATA Corporation.
*******************************************************************************


■  概要：

  このreadmeは、TERASOLUNA Server Framework for Java（Web版）
  のブランクプロジェクトを導入する手順書です。
  ブランクプロジェクトを導入することにより、TERASOLUNAフレームワークを使ったアプ
  リケーション開発環境を構築することが可能になります。 



■  前提条件：

  導入環境には、あらかじめ下記のものが用意されている必要があります。 

  ・Java 2 Runtime Environment Standard Edition 1.5.0
  ・Eclipse SDK 3.2.2 + WTP 1.5.5
  ・WebAPサーバ：Apache Tomcat 5.5.23
  ・Apache Ant 1.6.5 (EclipseのAntプラグインのみでも可)
  
  併記されているバージョンを元に動作確認を行っていますが、このバージョン以外の環
  境での動作を制限するものではありません。
  また、これらのインストール及び設定の手順については、別途Web上の利用ガイド等を
  参照してください。 

  

■  Antタスク一覧：

  プロジェクトの「\ant」フォルダには、antタスクが記述された「build.xml」が存在し
  ます。以下がantタスクの一覧です。 

  ・clean
      作成したwarファイル、コンパイルされたクラスファイルの削除を行う。
  ・compile
      コンパイルを行う。
  ・native2ascii
      native2asciiにてプロパティファイルのコード変換を行う。
  ・deploy
      プロジェクトのデプロイを行う。
  ・createJavaDoc
      JavaDocの生成を行う。
      
      

■  サーバーの追加（WTP環境）：

  EclipseにWTPプラグインが導入されている場合、以下の手順でサーバーを追加します。 

  1.Eclipse画面にて「ウィンドウ」＞「ビューの表示」＞「その他」を実行し、「サー
    バー」を選択し「OK」をクリックします。 
  2.サーバービューで右クリック「新規」＞「サーバー」を実行します。 
  3.「Apache」＞「Tomcat v5.5 サーバー」を選択し、「次へ」をクリックします。 
  4.「Tomcat」を選択し、「次へ」をクリックします。 
  5.自端末の環境に合った「Tomcat インストール･ディレクトリー」を選択します。
  6.「終了」をクリックします。 



■  プロジェクトの実行（共通）：

  ブランクプロジェクトをインポートします。 

  ①ZIPファイルの展開
  
    terasoluna-server4jweb-blank_(バージョン番号).zipを任意のフォルダに展開します。 

    展開されたterasoluna-server4jweb-blank_(バージョン番号).zipのフォルダ名が
    「terasoluna-spring-thin-blank」であることを確認します。
    展開ツールや展開のしかたによっては、フォルダ名が
    「terasoluna-server4jweb-blank(バージョン番号)」となる場合がありますが、
    フォルダ名を手動で「terasoluna-spring-thin-blank」に変更してください。 

  ②Eclipseへのインポート
  
    1.Eclipse画面にて「ファイル」＞「インポート」を選択します。
    2.「既存プロジェクトをワークスペースへ」を選択し「次へ」をクリックします。
    3.「ルート・ディレクトリーの選択」にチェックが入った状態で「参照」をクリック
      し、ブランクプロジェクトを展開した親フォルダを指定します。 
    4.「terasoluna-spring-thin-blank」にチェックが入っていることを確認し、「終了
       」をクリックします。 



■  プロジェクトの実行（WTP環境）：
 
  WTPプラグインを利用する場合、以下の手順でプロジェクトを実行します。

  ③サーバーへの追加
  
    サーバービューで「terasoluna-spring-thin-blank」のプロジェクトを追加します。
    
  ④Tomcatの起動および、実行確認
  
    1.サーバーを始動します。 
    2.http://localhost:8080/terasoluna-spring-thin-blankにアクセスします。
    3.「-- ようこそTERASOLUNAへ --」という画面が表示されればデプロイ成功です。 
     
  
  
■  プロジェクトの実行（非WTP環境）：

  WTPプラグインを利用しない場合、以下の手順でプロジェクトを実行します。 


  ③antタスクの実行
  
    1.プロジェクトの「/ant/build.properties」を自端末の環境に合った値に書き換え
      ます。 
      ・詳細はbuild.propertiesを参照してください。特にパス関連に関しては十分確認
        してください。 
    2.「build.properties」の修正後、「/ant/build.xml」を右クリックしantタスクの
      「deploy」を選択して実行します。 

  ④Tomcatの起動および、実行確認
  
    1.デプロイ先のTomcatを起動します。 
    2.http://localhost:8080/<context.name>/にアクセスします。 
      ・「<context.name>」は、build.properties内に記述した値であり、デフォルトは
        terasoluna-spring-thin-blankとなっています。    
    3.「-- ようこそTERASOLUNAへ --」という画面が表示されればデプロイ成功です。


-------------------------------------------------------------------------------
Copyright 2007-2009 NTT DATA Corporation.


