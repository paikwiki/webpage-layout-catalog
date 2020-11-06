#!bin/bash
if [ ! -d "cmd" ] ; then
	echo "현재 폴더 내에 cmd 폴더가 없습니다. 프로젝트 루트 폴더에서 실행하세요.";
	echo "실행예: . cmd/generate_demo_webpage.sh";
elif [ ! -d "codes" ] ; then
	echo "현재 폴더 내에 codes 폴더가 없습니다. 프로젝트 루트 폴더에서 실행하세요.";
	echo "실행예: . cmd/generate_demo_webpage.sh";
else
	cd codes
	npm run-script build
	cd ..
	if [ -d "docs" ]; then
		echo "기존의 데모 웹페이지(docs)를 docs_temp로 백업했습니다.";
		rm -rf docs_temp
		mv docs docs_temp
	fi
	mv codes/build docs
fi
