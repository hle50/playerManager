$(function () {
	var pstyle = 'background-color: #F5F6F7; border: 1px solid #dfdfdf; padding: 5px;';
	$('#layout').w2layout({
		name: 'layout',
		panels: [
			{
				type: 'top',
				size: 50,
				resizable: true,
				style: pstyle,
				content: 'top'
			},
			{
				type: 'left',
				size: 200,
				resizable: true,
				style: pstyle,
				content: 'left'
			},
			{
				type: 'main',
				style: pstyle,
				content: 'main'
			},
			{
				type: 'preview',
				size: '50%',
				resizable: true,
				style: pstyle,
				content: 'preview'
			},
			{
				type: 'right',
				size: 200,
				resizable: true,
				style: pstyle,
				content: 'right'
			},

        ]
	});
});
