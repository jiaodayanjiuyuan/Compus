module.exports = {
	PID: 'A00', //校园社团

	NAV_COLOR: '#ffffff',
	NAV_BG: '#1C9D9D',

	MEET_NAME: '活动', 
 
	MENU_ITEM: ['首页', '活动日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=社团通知|rightpic,2=社团简介|leftpic,3=社团福利,4=社团章程,5=社团招新',
	MEET_TYPE: '1=社团活动',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}