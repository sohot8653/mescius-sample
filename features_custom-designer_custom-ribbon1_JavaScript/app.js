let spreadNS = GC.Spread.Sheets;
let config = GC.Spread.Sheets.Designer.DefaultConfig;
let designer, spread;
window.onload = function () {
	// init
	initRibbon();
};

function initRibbon() {
    // clear ribbon
	config.ribbon = [];
    // add new ribbon tab 
	let newTab = {
		id: 'operate',
		text: 'Favorite',
		buttonGroups: [],
	};

	config.ribbon.unshift(newTab);

	// add new menu 
	let basicMenu = {
		label: 'Frequently used operations',
		thumbnailClass: 'Frequently used operations',
		commandGroup: {
			children: [
				{
					commands: ['formulaAutoSum'],
				},
				{
					commands: ['insertTable'],
				},
				{
					type: 'separator',
				},
				{
					direction: 'vertical',
					children: [
						{
							commands: ['fontFamily', 'fontSize', 'fontWeight', 'backColor', 'foreColor'],
						},
						{
							commands: ['find', 'replace', 'setFilter'],
						},
					],
				},
				{
					direction: 'vertical',
					commands: ['showHideVGridLine', 'showHideHGridLine'],
				},
			],
		},
	};

	config.ribbon[0].buttonGroups.unshift(basicMenu);
    new spreadNS.Designer.Designer(document.getElementById('ribbonHost'), config);
}